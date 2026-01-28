export type ProjectBadge = {
  emoji?: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;                // for future /projects/:slug routes
  title: string;
  subtitle?: string;           // e.g. “Design system”, “Case study”
  description: string;
  imageSrc?: string;           // local (/images/x.png) or remote
  imageAlt?: string;
  featured?: boolean;

  // “Badges” are your tags/skills/outcomes, not travel features
  badges?: ProjectBadge[];

  // Where the card goes when clicked
  primaryLink: ProjectLink;

  // Optional supporting links (repo, live demo, write-up)
  secondaryLinks?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    subtitle: "Case study",
    description: "Short summary of what it is and what problem it solves.",
    imageSrc: "/project-one.png",
    imageAlt: "Project One",
    featured: true,
    badges: [
      { emoji: "🧭", label: "UX" },
      { emoji: "🧱", label: "Design system" },
      { emoji: "⚛️", label: "React" },
    ],
    primaryLink: { label: "View case study", href: "#", external: false },
    secondaryLinks: [{ label: "GitHub", href: "#", external: true }],
  },
];
