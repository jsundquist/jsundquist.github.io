import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Astro } from "@/components/ui/svgs/astro";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Vue } from "@/components/ui/svgs/vue";
import { Aws } from "@/components/ui/svgs/aws";
import { Terraform } from "@/components/ui/svgs/terraform";
import { GithubActions } from "@/components/ui/svgs/githubActions";
import { Backstage } from "@/components/ui/svgs/backstage";
import { Mcp } from "@/components/ui/svgs/mcp";
import { Sonarqube } from "@/components/ui/svgs/sonarqube";
import { Sentry } from "@/components/ui/svgs/sentry";
import { Claude } from "@/components/ui/svgs/claude";
import { K6 } from "@/components/ui/svgs/k6";
import { Openapi } from "@/components/ui/svgs/openapi";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Lightstep } from "@/components/ui/svgs/lightstep";
import { OpenTelemetry } from "@/components/ui/svgs/openTelemetry";
import { Git } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Jonathan Sundquist",
  initials: "JS",
  url: "https://digital-portfolio.net",
  location: "",
  locationLink: "",
  description:
    "Personal site — experience, projects, and a blog.",
  summary:
    "An experienced software engineer who builds developer tooling, internal platforms, and enterprise web applications. I'm drawn to the intersection of platform engineering and developer experience — architecting systems that are technically sound and genuinely easy for other engineers to use. I like tinkering with new technologies to understand how they work and whether they're worth building on, and I'm not afraid to push for newer approaches when they're the right fit. Comfortable owning a platform end to end, from architecture through adoption, having worked both as an individual contributor and as a team lead.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: false,
      label: "Projects",
      heading: "Projects",
      text: "Placeholder — add a few projects worth highlighting here.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: {
      order: 6, enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Reach out on GitHub or LinkedIn.",
    },
  },
  photos: [{ src: "", alt: "" }],
  skills: [
    { name: "JavaScript / TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Vue.js", icon: Vue },
    { name: "React", icon: ReactLight },
    { name: "Astro", icon: Astro },
    { name: "AWS", icon: Aws },
    { name: "Terraform", icon: Terraform },
    { name: "GitHub Actions", icon: GithubActions },
    { name: "Docker", icon: Docker },
    { name: "Backstage", icon: Backstage },
    { name: "MCP (Model Context Protocol)", icon: Mcp },
    { name: "Claude Code", icon: Claude },
    { name: "SonarQube", icon: Sonarqube },
    { name: "LightStep", icon: Lightstep },
    { name: "OpenTelemetry", icon: OpenTelemetry },
    { name: "Sentry", icon: Sentry },
    { name: "k6", icon: K6 },
    { name: "OpenAPI specification design", icon: Openapi },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "CI/CD" },
    { name: "GitOps", icon: Git },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jsundquist",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jonathansundquist",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "FactSet",
      href: "https://factset.com",
      badges: ["Backstage", "AWS Step Functions", "Terraform", "GitHub Actions", "PostgreSQL", "MCP"],
      location: "Greater Minneapolis-St. Paul Area · Remote",
      title: "Principal Software Engineer",
      logoUrl: "/logos/factset-circle.png",
      start: "Oct 2020",
      end: "Jun 2026",
      description:
        "Focused on internal developer experience, owning FactSet's Backstage internal developer portal (IDP) and building Developer Pathways — a guided golden path platform enabling developers to follow stakeholder-defined best practices for project creation and deployment, integrating AWS Step Functions for workflow orchestration via a dedicated GitOps repository with Terraform, Lambda functions, and GitHub Actions pipelines.\n\nExpanded Developer Pathways to support GenAI projects, working across Enterprise Architecture, AI/ML, and Security teams to bring the pathway to production. Integrated MCP tooling enabling developers to interact with Developer Pathways directly from their preferred AI agent. Also served as Backstage platform curator — maintaining catalog processors, authoring internal plugins and custom scaffolder actions, contributing to the upstream open source project, and enforcing standards through cross-team code reviews.\n\nKey contributions:\n• Expanded platform automation to provision SonarQube, Sentry, and supporting tooling via AWS SQS workflows\n• Implemented end-to-end and k6 load testing; managed ongoing Backstage version upgrades\n• Configured LightStep tracing and Sentry error tracking including source maps; built shared Sentry libraries adopted across multiple teams\n• Authored ADRs on architecture decisions; conducted Cortex POC delivering a build-vs-buy recommendation to leadership",
    },
    {
      company: "FactSet",
      href: "https://factset.com",
      badges: ["Vue.js", "Node.js", "REST APIs", "OpenAPI", "CI/CD"],
      location: "Minneapolis, Minnesota, United States",
      title: "Lead Software Engineer",
      logoUrl: "/logos/factset-circle.png",
      start: "Apr 2017",
      end: "Oct 2020",
      description:
        "Following FactSet's acquisition of Interactive Data's Managed Solutions division in 2017, delivered enterprise financial web portals for institutional clients as Lead and later Principal Software Engineer.\n\nLed development of the Wealth Management Portal and Asset Management Portal — driving MVP launches and ongoing product roadmaps including a major frontend migration from Vuetify to BootstrapVue across multiple parallel development branches.\n\nManaged a matrix team of 8 onshore engineers and offshore counterparts — running weekly meetings, 1:1s, and performance goal setting. Founded and ran \"Well Code 2.0,\" a department-wide initiative promoting engineering standards and technology trends, rated Exceptional Performance by management.\n\nKey contributions:\n• Served as Solutions Architect translating client-approved designs into production applications using Vue.js, Node.js, and JavaScript\n• Designed and built REST APIs and OpenAPI specifications for financial data clients with full CI/CD pipelines\n• Delivered multiple financial data report products including Global Market Overview and FunData Canada fund profiles\n• Participated in pre-sales RFP/RFI processes for multiple institutional asset management and banking clients\n• Served as EOC member for critical incident response coordination",
    },
    {
      company: "Interactive Data, Inc",
      href: "https://interactivedata.com",
      badges: ["PHP"],
      location: "Greater Minneapolis-St. Paul Area",
      title: "Solutions Architect",
      logoUrl: "/logos/ice-icon.png",
      start: "Sep 2013",
      end: "Apr 2017",
      description:
        "Served as Solutions Architect for Interactive Data's engineering team, leading efforts to decouple a core data abstraction layer from its underlying framework and modernizing the team's PHP project structure and dependency management. Partnered directly with IT leadership on technical proof-of-concepts, introduced new onboarding and build tooling to speed up developer ramp-up, and contributed to open source projects to help bring the team's practices in line with evolving industry standards.",
    },
    {
      company: "Life Time Fitness",
      href: "https://www.lifetime.life/",
      badges: ["CakePHP", "AngularJS", ".NET", "LESS"],
      location: "Greater Minneapolis-St. Paul Area",
      title: "Senior Developer",
      logoUrl: "/logos/life-time-fitness-icon.png",
      start: "Feb 2013",
      end: "Sep 2013",
      description:
        "Worked on converting a CakePHP application to AngularJS and .NET, including a full migration to a shared LESS-based stylesheet architecture. Participated in sprint planning and story estimation as part of an agile team.",
    },
    {
      company: "Merrill DataSite",
      href: "",
      badges: [],
      location: "St Paul, Mn",
      title: "Application Developer - Senior",
      logoUrl: "/logos/data-site.jpeg",
      start: "May 2012",
      end: "Feb 2013",
      description:
        "Contributed to a large team delivering production-ready releases each sprint, representing the team in daily scrum-of-scrums coordination meetings. Diagnosed and resolved cross-platform compatibility issues and implemented new UI designs in partnership with UX design.",
    },
    {
      company: "Interactive Data, Inc",
      href: "https://interactivedata.com/",
      badges: [],
      location: "Greater Minneapolis-St. Paul Area",
      title: "Lead Software Engineer",
      logoUrl: "/logos/ice-icon.png",
      start: "Sep 2011",
      end: "Apr 2012",
      description:
        "Led a team of eight onshore frontend engineers, coordinating work between onshore and offshore development teams. Delegated and prioritized production and maintenance work, provided estimates for new development efforts, and introduced a code review process to standardize practices across frontend and offshore teams.",
    },
    {
      company: "Interactive Data, Inc",
      href: "https://interactivedata.com/",
      badges: ["PHP", "iOS"],
      location: "",
      title: "Software Engineer",
      logoUrl: "/logos/ice-icon.png",
      start: "Mar 2010",
      end: "Sep 2011",
      description:
        "Built and maintained a shared middle-tier library used across the company's PHP projects. Partnered with project managers to gather requirements and shape implementation approaches, and developed a native iPhone application released to the App Store.",
    },
  ],
  education: [
    {
      school: "Hennepin Technical College",
      href: "https://www.hennepintech.edu/",
      degree: "Associate of Applied Science, Web Programming",
      logoUrl: "/logos/hennepin-technical-college.png",
      start: "2001",
      end: "2004",
    },
  ],
  projects: [
    {
      title: "Placeholder Project",
      href: "",
      dates: "",
      active: false,
      description: "Placeholder — add a project description here.",
      technologies: [],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      win: "",
      mlh: "",
      links: [] as { title: string; icon: ReactNode; href: string }[],
    },
  ],
} as const;
