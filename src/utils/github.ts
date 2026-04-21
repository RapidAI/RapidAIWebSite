import type { ProjectConfig } from "../types/site";

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

interface ProjectResolved extends ProjectConfig {}

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

export async function getRapidAIProjects(fallback: ProjectConfig[]): Promise<ProjectResolved[]> {
  try {
    const response = await fetch(REPOS_API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "RapidAI-Website-Build"
      }
    });
    if (!response.ok) throw new Error(`GitHub repos API ${response.status}`);

    const repos = await response.json();

    const repoMap = new Map(
      repos
      .filter((repo: any) => !repo.fork && !repo.archived)
      .map((repo: any) => [repo.full_name, repo] as const)
    );

    const merged = uniqueByRepo(
      fallback.map((project) => {
        const repo = repoMap.get(project.repo);

        if (!repo) {
          return project;
        }

        return {
          ...project,
          stars: String(repo.stargazers_count ?? project.stars),
          href: repo.html_url || project.href
        };
      })
    );

    return merged.length ? merged : fallback;
  } catch {
    return fallback;
  }
}
