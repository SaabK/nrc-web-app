import type { JoinRole } from "@/types";

export const activeRecruitment: "executive" | "volunteer" | "none" = "executive";

export const executiveRoles: JoinRole[] = [
  {
    id: "hr",
    title: "HR",
    department: "HR",
    description:
      "Manage recruitment cycles, member onboarding, and internal culture across the club.",
    responsibilities: [
      "Run recruitment drives each semester",
      "Onboard new members and assign them to teams",
      "Handle internal conflict resolution",
      "Maintain member records and attendance",
    ],
    requirements: [
      "Strong interpersonal and organizational skills",
      "Experience managing group dynamics",
      "Available for full academic year commitment",
    ],
  },
  {
    id: "technical",
    title: "Technical",
    department: "Technical",
    description:
      "Lead all competition build teams and ensure engineering quality across every NRC project.",
    responsibilities: [
      "Oversee robot design, build, and testing across all teams",
      "Conduct technical reviews before competition deadlines",
      "Mentor members on embedded systems, mechanical, and software",
      "Maintain internal technical documentation",
    ],
    requirements: [
      "Strong background in embedded systems, mechanical, or software engineering",
      "Previous NRC or competition robotics experience",
      "Ability to lead across hardware and software domains",
    ],
  },
  {
    id: "event-management",
    title: "Event Management",
    department: "Event Management (EM)",
    description:
      "Plan and execute NRC's full event calendar, from internal sessions to national competitions.",
    responsibilities: [
      "Coordinate logistics for all NRC events and competitions",
      "Manage vendor relations and venue bookings",
      "Lead event-day operations and volunteer coordination",
      "Conduct post-event reviews and document learnings",
    ],
    requirements: [
      "Strong project management and organizational skills",
      "Experience running medium-to-large events",
      "Ability to manage multiple deadlines simultaneously",
    ],
  },
  {
    id: "sponsorships",
    title: "Sponsorships",
    department: "Sponsorships",
    description:
      "Secure and manage corporate and institutional sponsors to fund NRC's competitions and events.",
    responsibilities: [
      "Identify and approach potential sponsors",
      "Prepare sponsorship decks and proposals",
      "Manage sponsor relationships and deliverables",
      "Track sponsorship income and report to Finance",
    ],
    requirements: [
      "Strong written and verbal communication skills",
      "Ability to build professional external relationships",
      "Organized and proactive in follow-ups",
    ],
  },
  {
    id: "external-relations",
    title: "External Relations",
    department: "External Relations (ER)",
    description:
      "Build and maintain partnerships with other university societies, industry organizations, and media.",
    responsibilities: [
      "Represent NRC at inter-university events and forums",
      "Establish MOUs and collaboration agreements",
      "Coordinate with EM and Sponsorships on external-facing initiatives",
      "Maintain NRC's network of alumni and industry contacts",
    ],
    requirements: [
      "Confident communicator with strong networking skills",
      "Experience in a representative or ambassadorial role",
      "Organized and reliable in follow-through",
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    department: "Marketing",
    description:
      "Shape NRC's public identity and run campaigns across digital and physical channels.",
    responsibilities: [
      "Plan and execute marketing campaigns for events and recruitment",
      "Coordinate with SMM and Graphics on content production",
      "Manage NRC's brand consistency across all outputs",
      "Analyze engagement metrics and adjust strategy accordingly",
    ],
    requirements: [
      "Experience in digital or campus marketing",
      "Strong written communication and creative thinking",
      "Familiarity with social media analytics",
    ],
  },
  {
    id: "registrations",
    title: "Registrations",
    department: "Registrations",
    description:
      "Manage all participant registration processes for NRC-hosted competitions and workshops.",
    responsibilities: [
      "Set up and manage online registration systems",
      "Communicate with registered participants before and during events",
      "Coordinate with EM on headcounts and logistics",
      "Maintain accurate participant data and records",
    ],
    requirements: [
      "Detail-oriented with strong data management skills",
      "Experience with Google Forms, Airtable, or similar tools",
      "Calm under high-volume communication loads",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    department: "Finance",
    description:
      "Oversee NRC's budget, track spending across departments, and ensure financial accountability.",
    responsibilities: [
      "Maintain NRC's master budget and department allocations",
      "Approve and track all expenditures",
      "Prepare financial summaries after each event",
      "Coordinate with Sponsorships on incoming funds",
    ],
    requirements: [
      "Strong numeracy and attention to detail",
      "Experience with spreadsheets and basic bookkeeping",
      "Trustworthy and transparent in financial reporting",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    department: "Logistics",
    description:
      "Handle procurement, storage, and transport of equipment and materials for all NRC activities.",
    responsibilities: [
      "Procure components, tools, and materials for teams",
      "Manage NRC's inventory and storage space",
      "Coordinate transport for competitions and events",
      "Liaise with vendors and suppliers",
    ],
    requirements: [
      "Organized and resourceful problem-solver",
      "Experience managing physical resources or procurement",
      "Reliable and available for event-day support",
    ],
  },
  {
    id: "decor",
    title: "Décor",
    department: "Décor",
    description:
      "Design and execute the physical setup and visual environment for NRC events.",
    responsibilities: [
      "Plan event layouts, signage, and branding elements",
      "Source and manage décor materials within budget",
      "Lead setup and breakdown teams on event days",
      "Collaborate with Graphics on visual assets",
    ],
    requirements: [
      "Creative eye and practical execution skills",
      "Experience with event setup or interior display",
      "Able to work under time pressure on event days",
    ],
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    department: "Social Media Marketing (SMM)",
    description:
      "Run NRC's social media presence across all platforms with consistent, engaging content.",
    responsibilities: [
      "Manage posting schedules across Instagram, LinkedIn, and Facebook",
      "Produce captions, stories, and short-form content",
      "Monitor comments, DMs, and community engagement",
      "Coordinate with Media and Graphics for content assets",
    ],
    requirements: [
      "Active social media presence with platform knowledge",
      "Strong writing and creative content skills",
      "Consistent and reliable in maintaining posting frequency",
    ],
  },
  {
    id: "media",
    title: "Media",
    department: "Media",
    description:
      "Document NRC events through photography and videography for archival and promotional use.",
    responsibilities: [
      "Photograph and film all major NRC events and competitions",
      "Edit and deliver media content to SMM and Marketing",
      "Maintain NRC's media archive",
      "Brief and coordinate a team of volunteer photographers",
    ],
    requirements: [
      "Proficient in photography or videography",
      "Experience with basic photo or video editing",
      "Reliable and punctual for event-day coverage",
    ],
  },
  {
    id: "graphics",
    title: "Graphics",
    department: "Graphics",
    description:
      "Design all visual assets for NRC's events, campaigns, and digital presence.",
    responsibilities: [
      "Create posters, banners, and social media graphics",
      "Maintain NRC's visual identity and design system",
      "Deliver assets on time for Marketing and SMM",
      "Iterate based on feedback from leads",
    ],
    requirements: [
      "Proficient in Figma, Illustrator, or Photoshop",
      "Strong design sense and attention to brand consistency",
      "Able to work within tight deadlines",
    ],
  },
  {
    id: "admin",
    title: "Administration",
    department: "Administration (Admin)",
    description:
      "Keep NRC's operations running smoothly through documentation, scheduling, and inter-department coordination.",
    responsibilities: [
      "Maintain meeting minutes and executive decisions log",
      "Manage NRC's internal communication channels",
      "Coordinate scheduling across department heads",
      "Ensure compliance with NUST society regulations",
    ],
    requirements: [
      "Highly organized with strong written communication",
      "Experience in administrative or coordination roles",
      "Discreet and professional in handling club information",
    ],
  },
];

export const volunteerAreas = [
  {
    id: "technical",
    title: "Technical Team",
    description:
      "Work directly on competition robots. Sub-teams include embedded systems, mechanical design, PCB design, and computer vision.",
  },
  {
    id: "operations",
    title: "Operations",
    description:
      "Support event planning, logistics coordination, venue management, and day-of operations.",
  },
  {
    id: "marketing",
    title: "Content & Media",
    description:
      "Photograph and document NRC events, create social media content, and manage NRC's online presence.",
  },
  {
    id: "outreach",
    title: "Outreach",
    description:
      "Run school visits, recruitment drives, and community engagement initiatives to grow the robotics ecosystem at NUST.",
  },
];
