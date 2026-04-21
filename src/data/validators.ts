import type {
  ActionLink,
  ContentCardData,
  DetailListCardData,
  ExploreCardData,
  ImageActionCardData,
  ProjectConfig,
  PublicationItem,
  RecruitmentInfo,
  SectionHeroData,
  SectionIntroData,
  SignalCardData
} from "../types/site";

function fail(message: string): never {
  throw new Error(`[data validation] ${message}`);
}

function assertNonEmptyString(value: string, path: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    fail(`${path} must be a non-empty string.`);
  }
}

function assertUnique(values: string[], label: string) {
  const seen = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      fail(`Duplicate ${label}: "${value}".`);
    }
    seen.add(value);
  }
}

function assertHref(value: string, path: string, allowRelative = true) {
  assertNonEmptyString(value, path);

  const isAbsolute = /^https?:\/\//.test(value) || value.startsWith("mailto:");
  const isRelative = value.startsWith("/") || value.startsWith("#");

  if (!isAbsolute && (!allowRelative || !isRelative)) {
    fail(`${path} must be an absolute URL, mailto link, anchor, or site-relative path.`);
  }
}

function assertIntegerString(value: string, path: string) {
  assertNonEmptyString(value, path);

  if (!/^\d+$/.test(value)) {
    fail(`${path} must be a numeric string.`);
  }
}

function assertDateString(value: string, path: string) {
  assertNonEmptyString(value, path);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    fail(`${path} must use YYYY-MM-DD format.`);
  }
}

function validateActionLink(action: ActionLink, path: string) {
  assertNonEmptyString(action.label, `${path}.label`);
  assertHref(action.href, `${path}.href`);
}

function validateIntro(copy: SectionIntroData, path: string) {
  assertNonEmptyString(copy.eyebrow, `${path}.eyebrow`);
  assertNonEmptyString(copy.title, `${path}.title`);
  assertNonEmptyString(copy.description, `${path}.description`);
}

function validateHero(hero: SectionHeroData, path: string) {
  assertNonEmptyString(hero.eyebrow, `${path}.eyebrow`);
  assertNonEmptyString(hero.title, `${path}.title`);
  assertNonEmptyString(hero.description, `${path}.description`);

  if (hero.panel) {
    assertNonEmptyString(hero.panel.tag, `${path}.panel.tag`);
    assertNonEmptyString(hero.panel.title, `${path}.panel.title`);
    assertNonEmptyString(hero.panel.description, `${path}.panel.description`);
  }
}

function validateContentCard(card: ContentCardData, path: string) {
  assertNonEmptyString(card.tag, `${path}.tag`);
  assertNonEmptyString(card.title, `${path}.title`);
  assertNonEmptyString(card.description, `${path}.description`);
}

function validateSignalCard(card: SignalCardData, path: string) {
  assertNonEmptyString(card.tag, `${path}.tag`);
  assertNonEmptyString(card.description, `${path}.description`);
}

function validateImageActionCard(card: ImageActionCardData, path: string) {
  validateContentCard(card, path);

  if (card.meta !== undefined) {
    assertNonEmptyString(card.meta, `${path}.meta`);
  }

  if (card.href !== undefined) {
    assertHref(card.href, `${path}.href`, false);
  }

  if (card.actionLabel !== undefined) {
    assertNonEmptyString(card.actionLabel, `${path}.actionLabel`);
  }

  if (card.image !== undefined) {
    assertHref(card.image, `${path}.image`, false);
  }

  if (card.imageAlt !== undefined) {
    assertNonEmptyString(card.imageAlt, `${path}.imageAlt`);
  }
}

function validateRecruitmentInfo(recruitment: RecruitmentInfo, path: string) {
  validateIntro(recruitment, path);
  assertNonEmptyString(recruitment.email, `${path}.email`);
  validateActionLink(recruitment.primaryAction, `${path}.primaryAction`);
  if (recruitment.secondaryAction) {
    validateActionLink(recruitment.secondaryAction, `${path}.secondaryAction`);
  }
}

function validateDetailListCard(card: DetailListCardData, path: string) {
  assertNonEmptyString(card.tag, `${path}.tag`);
  assertNonEmptyString(card.title, `${path}.title`);

  if (card.description !== undefined) {
    assertNonEmptyString(card.description, `${path}.description`);
  }

  if (card.items !== undefined) {
    if (card.items.length === 0) {
      fail(`${path}.items must contain at least one item when provided.`);
    }

    card.items.forEach((item, index) => {
      assertNonEmptyString(item, `${path}.items[${index}]`);
    });
  }

  if (card.meta !== undefined) {
    assertNonEmptyString(card.meta, `${path}.meta`);
  }

  if (card.href !== undefined) {
    assertHref(card.href, `${path}.href`);
  }

  if (card.actionLabel !== undefined) {
    assertNonEmptyString(card.actionLabel, `${path}.actionLabel`);
  }
}

export function defineSections<
  T extends {
    key: string;
    href: string;
    navLabel: string;
    footerLabel: string;
    pageTitle: string;
    pageDescription: string;
    hero: SectionHeroData;
    intro?: SectionIntroData;
    explore?: Omit<ExploreCardData, "href">;
    homeSpotlight?: SectionIntroData & { action?: ActionLink };
  }
>(sections: T[]) {
  assertUnique(
    sections.map((section) => section.key),
    "section key"
  );
  assertUnique(
    sections.map((section) => section.href),
    "section href"
  );

  sections.forEach((section) => {
    const path = `sections.${section.key}`;
    assertHref(section.href, `${path}.href`);
    assertNonEmptyString(section.navLabel, `${path}.navLabel`);
    assertNonEmptyString(section.footerLabel, `${path}.footerLabel`);
    assertNonEmptyString(section.pageTitle, `${path}.pageTitle`);
    assertNonEmptyString(section.pageDescription, `${path}.pageDescription`);
    validateHero(section.hero, `${path}.hero`);

    if (section.intro) {
      validateIntro(section.intro, `${path}.intro`);
    }

    if (section.explore) {
      assertNonEmptyString(section.explore.tag, `${path}.explore.tag`);
      assertNonEmptyString(section.explore.title, `${path}.explore.title`);
      assertNonEmptyString(section.explore.description, `${path}.explore.description`);
      assertNonEmptyString(section.explore.meta, `${path}.explore.meta`);
    }

    if (section.homeSpotlight) {
      validateIntro(section.homeSpotlight, `${path}.homeSpotlight`);
      if (section.homeSpotlight.action) {
        validateActionLink(section.homeSpotlight.action, `${path}.homeSpotlight.action`);
      }
    }
  });

  return sections;
}

export function defineProjects<T extends ProjectConfig>(projects: T[]) {
  assertUnique(
    projects.map((project) => project.repo),
    "project repo"
  );
  assertUnique(
    projects.map((project) => project.name),
    "project name"
  );

  projects.forEach((project, index) => {
    const path = `projects[${index}]`;
    assertNonEmptyString(project.name, `${path}.name`);
    assertIntegerString(project.stars, `${path}.stars`);
    assertNonEmptyString(project.repo, `${path}.repo`);
    assertNonEmptyString(project.category, `${path}.category`);
    assertNonEmptyString(project.summary, `${path}.summary`);
    assertHref(project.href, `${path}.href`, false);
  });

  return projects;
}

export function defineMembers<
  TGroup extends { key: string; title: string; description: string; roles: string[] },
  TMember extends { name: string; github: string; role: string; detail: string; joinedAt?: string; newUntil?: string }
>(
  groups: TGroup[],
  roleLabels: Record<string, string>,
  members: TMember[]
) {
  assertUnique(
    groups.map((group) => group.key),
    "member group key"
  );
  assertUnique(
    members.map((member) => member.github.toLowerCase()),
    "member github"
  );

  groups.forEach((group, index) => {
    const path = `memberGroups[${index}]`;
    assertNonEmptyString(group.key, `${path}.key`);
    assertNonEmptyString(group.title, `${path}.title`);
    assertNonEmptyString(group.description, `${path}.description`);
    if (group.roles.length === 0) {
      fail(`${path}.roles must contain at least one role.`);
    }
    group.roles.forEach((role, roleIndex) => {
      assertNonEmptyString(role, `${path}.roles[${roleIndex}]`);
      if (!roleLabels[role]) {
        fail(`${path}.roles[${roleIndex}] references missing role label "${role}".`);
      }
    });
  });

  members.forEach((member, index) => {
    const path = `members[${index}]`;
    assertNonEmptyString(member.name, `${path}.name`);
    assertNonEmptyString(member.github, `${path}.github`);
    assertNonEmptyString(member.role, `${path}.role`);
    assertNonEmptyString(member.detail, `${path}.detail`);

    if (!roleLabels[member.role]) {
      fail(`${path}.role "${member.role}" is missing from memberRoleLabels.`);
    }

    if (member.joinedAt) {
      assertDateString(member.joinedAt, `${path}.joinedAt`);
    }

    if (member.newUntil) {
      assertDateString(member.newUntil, `${path}.newUntil`);
    }
  });

  return { groups, roleLabels, members };
}

export function definePublications<T extends PublicationItem>(publications: T[]) {
  publications.forEach((item, index) => {
    const path = `publications[${index}]`;
    assertNonEmptyString(item.title, `${path}.title`);
    assertNonEmptyString(item.authors, `${path}.authors`);
    assertNonEmptyString(item.venue, `${path}.venue`);
    assertNonEmptyString(item.year, `${path}.year`);
    assertNonEmptyString(item.type, `${path}.type`);
    assertNonEmptyString(item.summary, `${path}.summary`);

    item.links.forEach((link, linkIndex) => {
      assertNonEmptyString(link.label, `${path}.links[${linkIndex}].label`);
      assertHref(link.href, `${path}.links[${linkIndex}].href`, false);
    });
  });

  return publications;
}

export function defineBlogPageContent<
  T extends {
    latest: SectionIntroData;
    paged: SectionIntroData;
  }
>(content: T) {
  validateIntro(content.latest, "blogPageContent.latest");
  validateIntro(content.paged, "blogPageContent.paged");
  return content;
}

export function defineMembersPageContent<
  T extends {
    directory: SectionIntroData;
    join: SectionIntroData;
    joinCards: ImageActionCardData[];
  }
>(content: T) {
  validateIntro(content.directory, "membersPageContent.directory");
  validateIntro(content.join, "membersPageContent.join");

  if (content.joinCards.length === 0) {
    fail("membersPageContent.joinCards must contain at least one card.");
  }

  content.joinCards.forEach((card, index) => {
    validateImageActionCard(card, `membersPageContent.joinCards[${index}]`);
  });

  return content;
}

export function defineUpdatesPageContent<
  T extends {
    timeline: SectionIntroData;
    paged: SectionIntroData;
  }
>(content: T) {
  validateIntro(content.timeline, "updatesPageContent.timeline");
  validateIntro(content.paged, "updatesPageContent.paged");
  return content;
}

export function defineResearchPageContent<
  T extends {
    overview: SectionIntroData;
    structure: SectionIntroData;
    recruitment: RecruitmentInfo;
    overviewCards: ContentCardData[];
    highlights: SignalCardData[];
    leadership: string[];
    committeeRules: string[];
    structureCards: DetailListCardData[];
  }
>(content: T) {
  validateIntro(content.overview, "researchPageContent.overview");
  validateIntro(content.structure, "researchPageContent.structure");
  validateRecruitmentInfo(content.recruitment, "researchPageContent.recruitment");

  if (content.overviewCards.length === 0) {
    fail("researchPageContent.overviewCards must contain at least one card.");
  }

  if (content.highlights.length === 0) {
    fail("researchPageContent.highlights must contain at least one card.");
  }

  if (content.leadership.length === 0) {
    fail("researchPageContent.leadership must contain at least one item.");
  }

  if (content.committeeRules.length === 0) {
    fail("researchPageContent.committeeRules must contain at least one item.");
  }

  if (content.structureCards.length === 0) {
    fail("researchPageContent.structureCards must contain at least one card.");
  }

  content.overviewCards.forEach((card, index) => {
    validateContentCard(card, `researchPageContent.overviewCards[${index}]`);
  });

  content.highlights.forEach((card, index) => {
    validateSignalCard(card, `researchPageContent.highlights[${index}]`);
  });

  content.leadership.forEach((item, index) => {
    assertNonEmptyString(item, `researchPageContent.leadership[${index}]`);
  });

  content.committeeRules.forEach((item, index) => {
    assertNonEmptyString(item, `researchPageContent.committeeRules[${index}]`);
  });

  content.structureCards.forEach((card, index) => {
    validateDetailListCard(card, `researchPageContent.structureCards[${index}]`);
  });

  return content;
}

export function definePublicationsPageContent<
  T extends {
    listing: SectionIntroData;
    openResearchActionLabel: string;
  }
>(content: T) {
  validateIntro(content.listing, "publicationsPageContent.listing");
  assertNonEmptyString(content.openResearchActionLabel, "publicationsPageContent.openResearchActionLabel");
  return content;
}
