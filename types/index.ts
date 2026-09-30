export interface EventMedia {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  caption?: string;
}

export interface EventResult {
  rank: number;
  team: string;
  members?: string[];
  score?: string;
  achievement?: string;
}

export interface EventStat {
  label: string;
  value: string;
  unit?: string;
}

export interface EventEdition {
  year: number;
  description: string;
  stats: EventStat[];
  results: EventResult[];
  media: EventMedia[];
  coverImage?: string;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  coverImage: string;
  category: "competition" | "workshop" | "seminar" | "internal";
  editions: EventEdition[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface ContactInfo {
  label: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  university: string;
  founded: string;
  location: string;
  contact: ContactInfo[];
  social: SocialLink[];
}

export interface JoinRole {
  id: string;
  title: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}
