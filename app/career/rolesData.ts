export interface RoleCard {
  id: string;
  type: string;
  title: string;
  description: string;
}

export const ROLES: RoleCard[] = [
  {
    id: "full-stack-developer",
    type: "Full Time / Hybrid",
    title: "Full Stack Developer",
    description:
      "Build high-performance web applications, client platforms, and custom digital systems using modern React and Next.js stacks.",
  },
  {
    id: "digital-marketing",
    type: "Full Time",
    title: "Digital Marketing",
    description:
      "Execute organic SEO, paid media campaigns, and social marketing funnels to scale traffic and customer acquisition.",
  },
  {
    id: "business-development",
    type: "Full Time",
    title: "Business Development",
    description:
      "Drive strategic partnerships, lead generation, and client acquisition across our creative, web, and marketing solutions.",
  },
  {
    id: "designer",
    type: "Full Time",
    title: "Designer",
    description:
      "Design digital UI/UX experiences, brand identity systems, and commercial creative assets for emerging and established brands.",
  },
];

