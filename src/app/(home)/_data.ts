import type { StaticImageData } from "next/image";
import houseloc from "../../../public/projects/HouseLoc.png";
import rahihakmaEntreprise from "../../../public/projects/rahihakmaEntreprise.png";
import amanos from "../../../public/projects/amanos.png";
import inflowblog from "../../../public/projects/Inflowblog.png";

export const profile = {
  name: "Abdellah Nassim Meridja",
  shortName: "A. Nassim",
  role: "Product Engineer",
  email: "abdallah.nassim.meridja@gmail.com",
  cv: "/Abdellah_Nassim_MERIDJA_ATS_CV_Sept2026.pdf",
  photo: "/nassim_square.jpg",
} as const;

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdellah-nassim-meridja-433998357",
  },
  {
    name: "GitHub",
    href: "https://github.com/AbdellahNassim",
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01049fd4f1e6d37279",
  },
  {
    name: "Blog",
    href: "https://inflowblog.vercel.app/",
  },
] as const;

export const navLinks = [
  { name: "Work", hash: "#work" },
  { name: "Services", hash: "#services" },
  { name: "Process", hash: "#process" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

export const projects: {
  title: string;
  index: string;
  kicker: string;
  role: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  demoLink: string | null;
  githubUrl: string | null;
}[] = [
  {
    title: "HouseLoc",
    index: "01",
    kicker: "Property rental SaaS",
    role: "Product engineer — full stack",
    description:
      "A booking and rental platform for properties: search, reservations, payments, identity checks, and e-signatures. I designed and shipped the Nest.js API, the Next.js client, and the admin dashboard — maps, Stripe, and ops included.",
    tags: [
      "Next.js",
      "Nest.js",
      "Postgres",
      "PostGIS",
      "Redis",
      "Stripe",
      "TypeScript",
    ],
    image: houseloc,
    demoLink: "https://houseloc.vercel.app/",
    githubUrl: null,
  },
  {
    title: "Rahi Hakma Enterprise",
    index: "02",
    kicker: "Hotel booking for organizations",
    role: "Product engineer — full stack",
    description:
      "A SaaS product for companies to manage hotel reservations at negotiated rates. I built the Nest.js and MySQL backend, the Next.js client, and the admin panel, then deployed the system on a private VPS.",
    tags: ["Next.js", "Nest.js", "MySQL", "TypeORM", "TypeScript", "Puppeteer"],
    image: rahihakmaEntreprise,
    demoLink: "https://entreprise.rahihakma.dz/",
    githubUrl: null,
  },
  {
    title: "AMANOS",
    index: "03",
    kicker: "Intent-based infrastructure",
    role: "Research engineer",
    description:
      "An autonomous orchestration system that turns natural-language intents into managed network and infrastructure. Built across Python and ML models, Golang services, and Kubernetes — research that had to run as a system, not a notebook.",
    tags: ["Python", "TensorFlow", "PyTorch", "Golang", "Kubernetes"],
    image: amanos,
    demoLink: null,
    githubUrl: "https://github.com/AbdellahNassim/ibn-autonomous-system-3c",
  },
  {
    title: "Inflow Blog",
    index: "04",
    kicker: "Editorial product",
    role: "Solo engineer",
    description:
      "A technical publication with accounts, comments, and an editorial workflow. I shipped the full product on Next.js, Sanity, Firebase, and NextAuth — still live, still publishing.",
    tags: ["Next.js", "Sanity", "Firebase", "NextAuth", "TypeScript"],
    image: inflowblog,
    demoLink: "https://inflowblog.vercel.app/",
    githubUrl: null,
  },
];

export const services = [
  {
    index: "01",
    title: "Product engineering",
    description:
      "The interface, the API, and the details that make a product feel finished. I take a web product from brief to production.",
    stack: "Next.js · TypeScript · Tailwind",
  },
  {
    index: "02",
    title: "SaaS platforms",
    description:
      "Multi-tenant products with dashboards, billing, admin, and the operational layer founders usually underestimate.",
    stack: "Nest.js · Postgres · Redis · Stripe",
  },
  {
    index: "03",
    title: "Applied AI",
    description:
      "When the product needs models, language, or automation — wired into a real system, not left as a demo.",
    stack: "Python · TensorFlow · PyTorch",
  },
  {
    index: "04",
    title: "Blockchain & systems",
    description:
      "Smart contracts and infrastructure when trust, orchestration, or the edge is part of the product.",
    stack: "Solidity · Rust · Go · Kubernetes",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Discover",
    description:
      "Goals, constraints, and the existing stack. A short written brief so we agree on the problem before anyone writes code.",
  },
  {
    index: "02",
    title: "Scope",
    description:
      "Architecture, milestones, and a build plan. You know what ships, in what order, and what it will take.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "Weekly progress against the plan. Production-grade code — typed, tested where it matters, ready to run.",
  },
  {
    index: "04",
    title: "Handoff",
    description:
      "Deployed, documented, and yours. I stay available after launch so the product does not stall at the finish line.",
  },
] as const;

export const about = {
  lead: "I build products end to end — the interface, the API, the infrastructure — and I take them to production.",
  body: "I'm a computer systems engineer from ESI Algiers. After a research year at La Rochelle University on intent-based networking, I shipped SaaS, edge platforms, and admissions products for teams that needed one senior engineer rather than a handoff between five. I now work independently with founders and companies who want software that actually ships.",
} as const;

export const experience = [
  {
    role: "Independent Product Engineer",
    org: "Auto-Entrepreneur",
    date: "2024 — Present",
    summary:
      "Solo full-stack, AI, and blockchain work for clients. React, Next.js, Nest.js, Postgres, Solidity, Rust, and Python.",
  },
  {
    role: "Full-Stack Engineer",
    org: "Rahi-Hakma",
    date: "2024",
    summary:
      "Enterprise hotel-reservation product: Nest.js and MySQL backend, Next.js client, and admin panel.",
  },
  {
    role: "Full-Stack Engineer",
    org: "Edraak Technologies",
    date: "2023",
    summary:
      "Website-to-CRM integration on Odoo, plus backend services for client solutions.",
  },
  {
    role: "Full-Stack Engineer",
    org: "Naseej",
    date: "2023",
    summary:
      "Student admission portal and engagement platform — React, React Native, Python Frappe, Azure.",
  },
  {
    role: "Systems Engineer",
    org: "Namla",
    date: "2022 — 2023",
    summary:
      "Controller services for an edge platform, in Golang and Kubernetes.",
  },
  {
    role: "Research Engineer Intern",
    org: "La Rochelle University",
    date: "2021 — 2022",
    summary:
      "Graduation research on intent-based networking: React, Golang, Python, TensorFlow, Kubernetes.",
  },
  {
    role: "Full-Stack Engineer",
    org: "CodeLabs Academy",
    date: "2021 — 2022",
    summary:
      "Multiple product engagements with React, Nuxt, TypeScript, Express, and MongoDB.",
  },
  {
    role: "Engineer & Master's, Computer Science",
    org: "ESI Algiers",
    date: "2017 — 2022",
    summary:
      "Five-year engineering curriculum. Master's and Engineer degree in Computer Science.",
  },
] as const;

export const stack = [
  {
    group: "Product",
    items: ["TypeScript", "React", "Next.js", "React Native", "Tailwind"],
  },
  {
    group: "Backend",
    items: ["Nest.js", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    group: "AI",
    items: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    group: "Chain",
    items: ["Solidity", "Rust"],
  },
  {
    group: "Infra",
    items: ["Golang", "Kubernetes", "AWS", "GCP", "Azure"],
  },
] as const;

export const projectTypes = [
  "Product / SaaS",
  "Applied AI",
  "Blockchain / systems",
  "Not sure yet",
] as const;
