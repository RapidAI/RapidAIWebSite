interface MemberFallback {
  name: string;
  github: string;
  role: string;
  detail: string;
}

interface MemberResolved {
  name: string;
  github: string;
  role: string;
  detail: string;
}

const PEOPLE_URL = "https://github.com/orgs/RapidAI/people";
const REPOS_API_URL = "https://api.github.com/orgs/RapidAI/repos?per_page=100&type=public";

interface ProjectFallback {
  name: string;
  stars: string;
  repo: string;
  category: string;
  summary: string;
  href: string;
}

interface ProjectResolved {
  name: string;
  stars: string;
  repo: string;
  category: string;
  summary: string;
  href: string;
}

function uniqueByGithub(members: MemberResolved[]) {
  const seen = new Set<string>();
  return members.filter((member) => {
    if (seen.has(member.github)) return false;
    seen.add(member.github);
    return true;
  });
}

function uniqueByRepo(projects: ProjectResolved[]) {
  const seen = new Set<string>();
  return projects.filter((project) => {
    if (seen.has(project.repo)) return false;
    seen.add(project.repo);
    return true;
  });
}

export async function getRapidAIMembers(fallback: MemberFallback[]): Promise<MemberResolved[]> {
  try {
    const response = await fetch(PEOPLE_URL, {
      headers: {
        "User-Agent": "RapidAI-Website-Build"
      }
    });
    if (!response.ok) throw new Error(`GitHub people page ${response.status}`);

    const html = await response.text();
    const usernamePatterns = [
      /Image:\s*@([A-Za-z0-9-]+)/g,
      /href="\/([A-Za-z0-9-]+)"[^>]*data-hovercard-type="user"/g,
      /"login":"([A-Za-z0-9-]+)"/g
    ];

    const discoveredUsernames: string[] = [];

    for (const pattern of usernamePatterns) {
      for (const match of html.matchAll(pattern)) {
        const github = match[1]?.trim();
        if (!github) continue;
        if (!discoveredUsernames.includes(github)) {
          discoveredUsernames.push(github);
        }
      }
    }

    const discovered = discoveredUsernames
      .map((github) => {
        const existing = fallback.find((member) => member.github.toLowerCase() === github.toLowerCase());

        return {
          github,
          name: existing?.name || github,
          role: existing?.role || "Member",
          detail:
            existing?.detail ||
            "RapidAI 组织成员，参与项目协作与社区建设。"
        };
      })
      .filter((member) =>
        fallback.some((item) => item.github.toLowerCase() === member.github.toLowerCase())
      );

    const merged = uniqueByGithub([
      ...discovered,
      ...fallback.map((member) => ({
        github: member.github,
        name: member.name,
        role: member.role,
        detail: member.detail
      }))
    ]);

    return merged.length ? merged : fallback;
  } catch {
    return fallback;
  }
}

export async function getRapidAIProjects(fallback: ProjectFallback[]): Promise<ProjectResolved[]> {
  try {
    const response = await fetch(REPOS_API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "RapidAI-Website-Build"
      }
    });
    if (!response.ok) throw new Error(`GitHub repos API ${response.status}`);

    const repos = await response.json();

    const normalized = repos
      .filter((repo: any) => !repo.fork && !repo.archived)
      .map((repo: any) => {
        const existing = fallback.find((item) => item.repo === repo.full_name);
        return {
          name: repo.name,
          stars: String(repo.stargazers_count ?? 0),
          repo: repo.full_name,
          category: existing?.category || "GitHub Repo",
          summary:
            existing?.summary ||
            repo.description ||
            "RapidAI 组织下的开源项目。",
          href: repo.html_url
        };
      })
      .sort((a: ProjectResolved, b: ProjectResolved) => Number(b.stars) - Number(a.stars));

    const merged = uniqueByRepo([
      ...normalized,
      ...fallback
    ]);

    return merged.length ? merged : fallback;
  } catch {
    return fallback;
  }
}
