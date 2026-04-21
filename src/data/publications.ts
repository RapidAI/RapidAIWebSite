import { sectionsByKey } from "./sections";
import { publicationsPageContent } from "./page-content";
export type { PublicationItem, PublicationLink } from "../types/site";

export const publicationsPageHero = sectionsByKey.publications.hero;
export const publicationsSectionIntro = sectionsByKey.publications.intro!;
export const publicationSection = publicationsPageContent.listing;
export const publicationsPreviewLimit = 6;

export const publicationsPageActionLabel = publicationsPageContent.openResearchActionLabel;
