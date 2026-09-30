import type { JoinRole } from "@/types";

export const executiveRoles: JoinRole[] = [
  {
    id: "president",
    title: "President",
    department: "Executive Council",
    description:
      "Lead the overall strategic direction of NRC, represent the club to the university, and coordinate between departments.",
    responsibilities: [
      "Set strategic direction and annual goals",
      "Represent NRC to NUST administration and external partners",
      "Chair executive council meetings",
      "Oversee all department heads",
    ],
    requirements: [
      "Active NRC member for at least one year",
      "Demonstrated leadership experience",
      "Strong communication skills",
      "Available for full academic year commitment",
    ],
  },
  {
    id: "technical-lead",
    title: "Technical Lead",
    department: "Technical",
    description:
      "Oversee the technical direction of all NRC projects and competition teams. Ensure design quality and knowledge transfer across teams.",
    responsibilities: [
      "Lead technical architecture decisions for competition robots",
      "Conduct design reviews and code reviews",
      "Mentor junior members on embedded systems and mechanical design",
      "Maintain NRC's internal technical documentation",
    ],
    requirements: [
      "Strong background in embedded systems, mechanical, or software engineering",
      "Previous NRC competition experience preferred",
      "Ability to work across hardware and software domains",
    ],
  },
  {
    id: "events-head",
    title: "Events Head",
    department: "Events & Operations",
    description:
      "Plan and execute NRC's event calendar including competitions, workshops, and internal events.",
    responsibilities: [
      "Plan and manage the annual events calendar",
      "Coordinate logistics for competitions and workshops",
      "Manage event budgets and vendor relations",
      "Lead post-event reviews and documentation",
    ],
    requirements: [
      "Strong organizational and project management skills",
      "Experience coordinating medium-to-large events",
      "Ability to handle multiple deadlines simultaneously",
    ],
  },
  {
    id: "marketing-lead",
    title: "Marketing Lead",
    department: "Marketing & Communications",
    description:
      "Shape NRC's public identity and communications across social media, university channels, and external press.",
    responsibilities: [
      "Manage NRC's social media presence",
      "Create visual content and event promotional materials",
      "Handle press releases and university communications",
      "Build NRC's brand identity and visual consistency",
    ],
    requirements: [
      "Experience with social media management",
      "Graphic design or video editing skills",
      "Strong written communication",
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
