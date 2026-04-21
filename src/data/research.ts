import { researchPageContent } from "./page-content";
import { sectionsByKey } from "./sections";

export const researchHero = {
  ...sectionsByKey.research.hero,
  panelTag: sectionsByKey.research.hero.panel?.tag ?? "",
  panelTitle: sectionsByKey.research.hero.panel?.title ?? "",
  panelDescription: sectionsByKey.research.hero.panel?.description ?? ""
};

export const researchSections = {
  overview: researchPageContent.overview,
  structure: researchPageContent.structure
};

export const researchRecruitment = researchPageContent.recruitment;

export const researchOverviewCards = researchPageContent.overviewCards;

export const researchHighlights = researchPageContent.highlights;

export const researchLeadership = researchPageContent.leadership;

export const researchCommitteeRules = researchPageContent.committeeRules;

export const researchStructureCards = researchPageContent.structureCards;
