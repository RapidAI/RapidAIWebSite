export interface ActionLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SectionHeroPanel {
  tag: string;
  title: string;
  description: string;
}

export interface SectionHeroData {
  eyebrow: string;
  title: string;
  description: string;
  panel?: SectionHeroPanel;
}

export interface SectionIntroData {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export interface ExploreCardData {
  tag: string;
  title: string;
  description: string;
  meta: string;
  href: string;
}

export interface ContentCardData {
  tag: string;
  title: string;
  description: string;
}

export interface SignalCardData {
  tag: string;
  description: string;
  accent?: boolean;
}

export interface ImageActionCardData extends ContentCardData {
  meta?: string;
  href?: string;
  actionLabel?: string;
  image?: string;
  imageAlt?: string;
}

export interface DetailListCardData {
  tag: string;
  title: string;
  description?: string;
  items?: string[];
  meta?: string;
  href?: string;
  actionLabel?: string;
}

export interface PublicationLink {
  label: string;
  href: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  summary: string;
  links: PublicationLink[];
}

export interface RecruitmentInfo {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
}

export interface HeroPanelCard {
  tag: string;
  title: string;
  accent?: boolean;
  wide?: boolean;
}

export interface HomeHeroData {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  badges: string[];
  panels: HeroPanelCard[];
  panelFoot: string;
}

export interface ProjectCardData {
  name: string;
  stars: string;
  repo: string;
  category: string;
  summary: string;
  href: string;
}

export interface ProjectConfig extends ProjectCardData {}
