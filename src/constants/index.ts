import { NavLink, Technology, Experience, Project } from "../types";

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "viresens",
    title: "Viresens",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  
];

export const services = [
  {
    title: "ESG & Green Tech Solutions",
    icon: "/tech/sustain.png", // We will render clean SVG icons
    description: "Designing digital tools for heavy industry to track emissions, compute ESG audits, and implement carbon reduction algorithms.",
  },
  {
    title: "Full-Stack Web Development",
    icon: "/tech/web.png",
    description: "Building production-ready, highly interactive Next.js, React, and Node.js applications with smooth performance.",
  },
  {
    title: "AI & Cloud Integrations",
    icon: "/tech/ai.png",
    description: "Orchestrating intelligent agents using Google GenAI SDK, Genkit, and deploying serverless applications on Firebase, AWS, and Azure.",
  },
];

export const technologies: Technology[] = [
  { name: "TypeScript", icon: "/tech/typescript.png" },
  { name: "JavaScript", icon: "/tech/javascript.png" },
  { name: "Next JS", icon: "/tech/nextjs.png" },
  { name: "React JS", icon: "/tech/reactjs.png" },
  { name: "Python", icon: "/tech/python.png" },
  { name: "Node JS", icon: "/tech/nodejs.png" },
  { name: "SQL", icon: "/tech/sql.png" },
  { name: "Firebase", icon: "/tech/firebase.png" },
  { name: "Supabase", icon: "/tech/supabase.png" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  { name: "Docker", icon: "/tech/docker.png" },
  { name: "Git", icon: "/tech/git.png" },
  { name: "Azure", icon: "/tech/azure.png" },
  { name: "C", icon: "/tech/c.png" },
  { name: "C++", icon: "/tech/c++.png" },
  { name: "Express", icon: "/tech/express.png" },
  { name: "Figma", icon: "/tech/figma.png" },
  { name: "React Native", icon: "/tech/reactnative.png" },
];

export const experiences: Experience[] = [
  {
    title: "Assistant Manager (Digital Transformation & Sustainability)",
    company_name: "JSW Steel Ltd.",
    icon: "/company/jsw.png", // we'll use placeholder or custom SVG
    iconBg: "#0d261b",
    date: "July 2025 - Present",
    points: [
      "Driving digital transformation and sustainability systems across steelmaking plants to systematically reduce carbon emissions.",
      "Architected and deployed a live SQL Server-driven CO₂ absolute emission monitoring dashboard used by ESG executives.",
      "Created dynamic data normalizers and parsers to bridge raw sensor databases with frontend reporting tools.",
      "Developed weighted-average calculations (CO₂/tHM & CO₂/tCS) to replace error-prone manual spreadsheets.",
      "Implemented a high-performance polling and recovery layer, ensuring sub-minute data synchronization and 99.9% uptime."
    ],
  },
  {
    title: "Web Developer & Educator",
    company_name: "ISTE SC MANIT",
    icon: "/company/iste.png",
    iconBg: "#161b22",
    date: "June 2022 - December 2024",
    points: [
      "Built and maintained responsive university community web applications using standard frontend stacks.",
      "Collaborated with designers, technical writers, and content producers to construct digital portals.",
      "Led workshops teaching over 200+ students on Data Structures, Algorithms, and Machine Learning fundamentals.",
      "Ensured mobile responsiveness and cross-browser consistency across college event portals."
    ],
  },
];

export const projects: Project[] = [
  {
    name: "CO₂ Dashboard — Steel Plant",
    description: "A production-grade sustainability dashboard built to monitor and calculate absolute carbon emissions and production ratios in real-time. Connects directly to live SQL Server databases, parsing complex chemical metrics and computing weighted averages.",
    tags: [
      { name: "Next.js", color: "text-[#34d399]" },
      { name: "SQL Server", color: "text-[#06b6d4]" },
      { name: "Recharts", color: "text-[#fbbf24]" },
      { name: "Zustand", color: "text-[#a78bfa]" }
    ],
    image: "/co2_dashboard_mockup.png",
    website_link: "",
    source_code_link: "https://github.com/rk1703/co2_monitor"
  },
  {
    name: "SpendWise AI",
    description: "An AI-integrated financial tracking and planning assistant built with Next.js 15, Firebase, Google GenAI SDK (Gemini 3.1 Flash-Lite), and Genkit. Features smart expense analysis, interactive cash-flow visuals, and automated receipt processing.",
    tags: [
      { name: "Next.js 15", color: "text-[#34d399]" },
      { name: "Gemini AI", color: "text-[#8b5cf6]" },
      { name: "Firebase", color: "text-[#f43f5e]" },
      { name: "Genkit", color: "text-[#06b6d4]" }
    ],
    image: "/spendwise_mockup.png",
    website_link: "https://spendwise.rkwolrd.in",
    source_code_link: "https://github.com/rk1703/spendwise"
  },
  {
    name: "Insta Memo",
    description: "A notes and task organizer designed for seamless organization. Built with Next.js, Supabase, Tailwind CSS, Shadcn UI, and Prisma, featuring instantaneous syncing and offline support.",
    tags: [
      { name: "Next.js", color: "text-[#34d399]" },
      { name: "Supabase", color: "text-[#06b6d4]" },
      { name: "Prisma", color: "text-[#a78bfa]" }
    ],
    image: "/instam.png", // using existing asset
    website_link: "https://instamemo.rkwolrd.in",
    source_code_link: "https://github.com/rk1703/InstaMemo"
  },
  {
    name: "GlobalSpeak",
    description: "A real-time translation web app designed to bypass language barriers. Backed by Azure Cosmos DB and OpenAI, offering text-to-speech, translation tracking, and user dictionaries.",
    tags: [
      { name: "Next.js", color: "text-[#34d399]" },
      { name: "Azure Cosmos DB", color: "text-[#3b82f6]" },
      { name: "OpenAI API", color: "text-[#f43f5e]" }
    ],
    image: "/globalspk.png", // using existing asset
    website_link: "https://globalspeak.rkwolrd.in",
    source_code_link: "https://github.com/rk1703/GlobalSpeak"
  }
];
