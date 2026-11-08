/**
 * Single source of truth for all portfolio content.
 * Edit text here — components only handle layout.
 */

import binsightCover from "../assets/images/projects/binsight.jpeg";
import erpCover from "../assets/images/projects/erp.jpeg";
import aiConfiguratorCover from "../assets/images/projects/ai-configurator.jpeg";
import offlineSyncCover from "../assets/images/projects/offline-sync.jpeg";
import flatSuiteCover from "../assets/images/projects/flat-suite.jpeg";
import dokaneCover from "../assets/images/projects/dokane.jpeg";
import ecommerceCover from "../assets/images/projects/ecommerce-integration.jpeg";
import pocketLencerCover from "../assets/images/projects/pocketlencer.jpeg";
import aimWarehouseCover from "../assets/images/projects/aim-data-warehouse.jpeg";

export const profile = {
  name: "Badrul Alam Siddique Masfy",
  shortName: "Mashfy",
  title: "Manager, Technology Division",
  organization: "BRAC International",
  tagline:
    "I lead technology strategy and delivery across BRAC International's multi-country programmes. My work spans system architecture, data pipelines and offline-first platforms, turning operational needs into secure, scalable systems.",
  location: "Dhaka, Bangladesh",
  email: "badrulalamsiddique@gmail.com",
  github: "https://github.com/Mashfy",
  linkedin: "https://www.linkedin.com/in/mashfy/",
  // Replace public/CV.pdf with your latest CV before deploying.
  resumeUrl: `${import.meta.env.BASE_URL}CV.pdf`,
};

/** Toggle optional sections without deleting their code. */
export const features = {
  // Message form in the Contact section. Detached for now; set to true to show it again.
  contactForm: false,
};

export const about = {
  paragraphs: [
    "I'm an engineering leader with 4.5+ years of progressive experience across system architecture, database engineering, data pipelines and offline-first mobile platforms. In November 2026 I moved from vendor-side engineering into BRAC International as Manager, Technology Division.",
    "For 3.5+ years I led core engineering for BInsight, BRAC International's flagship Monitoring, Evaluation and Learning (MEL) platform, as the delivery partner from Streams Tech. I ran planning and requirement sessions with head-office and country-office teams, owned the roadmap and risk log, and led a cross-functional team from design through UAT, rollout and post-go-live stabilisation.",
    "My strength is turning business and operational needs into scalable architecture, and building the workflows, access controls and reporting pipelines that let stakeholders act with confidence on field data.",
  ],
  stats: [
    { value: "30,000+", label: "field users served on BInsight" },
    { value: "70M+", label: "row PostgreSQL tables re-architected" },
    { value: "< 1 min", label: "report generation, down from 5–10 min" },
    { value: "4.5+ yrs", label: "building and leading production systems" },
  ],
};

export type ExpertiseArea = {
  icon: "leadership" | "architecture" | "database" | "data" | "backend" | "devops";
  title: string;
  description: string;
  stack: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    icon: "leadership",
    title: "Technology & Delivery Leadership",
    description:
      "Owning technical roadmaps, milestones and risk logs, running stakeholder and requirement sessions across head office and country offices, and leading cross-functional teams through UAT, rollout and change management.",
    stack: ["Roadmapping", "Stakeholder Management", "Agile / Scrum", "Risk & Issue Tracking", "Mentoring", "Change Management", "Jira"],
  },
  {
    icon: "architecture",
    title: "Architecture & Access Governance",
    description:
      "Designing scalable, configuration-driven platforms, plus Role-Based Access Control and approval-workflow structures that enforce segregation of duties across HQ, region and country roles.",
    stack: ["System Design", "RBAC", "Segregation of Duties", "Workflow Engines", "REST APIs", "Integrations"],
  },
  {
    icon: "database",
    title: "Database Architecture & Performance",
    description:
      "Data modelling and normalisation at enterprise scale, PostgreSQL LIST partitioning on 70M+ row tables, query and index tuning, and bidirectional PostgreSQL ↔ SQLite offline sync with zero data loss.",
    stack: ["PostgreSQL", "MS SQL Server", "SQLite", "MongoDB", "Firebase", "Partitioning", "Query Optimisation"],
  },
  {
    icon: "data",
    title: "Data Pipelines, Reporting & BI",
    description:
      "ETL pipelines that offload analytics from production systems (3x faster warehouse queries), and KPI dashboards and executive reporting that leadership can rely on.",
    stack: ["Airflow", "Airbyte", "dbt", "Power BI", "Data Validation", "Reconciliation"],
  },
  {
    icon: "backend",
    title: "Backend, Mobile & AI-Assisted Engineering",
    description:
      "Hands-on background in backend-heavy full-stack delivery: .NET Core services, offline-first Flutter apps, background job processing, and AI-assisted tooling that generates UI configs and survey schemas from natural language.",
    stack: ["C#", ".NET Core", "Node.js", "Flutter", "Dart", "Hangfire", "OpenAI API", "Claude MCP", "React"],
  },
  {
    icon: "devops",
    title: "DevOps & Observability",
    description:
      "Telemetry and monitoring across 20+ production deployments, CI/CD automation, and production support for high-availability, multi-country systems.",
    stack: ["Docker", "AWS", "Jenkins", "Grafana", "Git", "CI/CD"],
  },
];

export type TimelineEntry = {
  kind: "work" | "education";
  title: string;
  organization: string;
  location: string;
  date: string;
  summary?: string;
  highlights: string[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Manager, Technology Division",
    organization: "BRAC International",
    location: "Dhaka, Bangladesh",
    date: "Nov 2026 – Present",
    highlights: [
      "Lead technology strategy and roadmap across BRAC International's multi-country programmes, aligning IT initiatives with organisational digitisation priorities.",
      "Manage end-to-end delivery of technology initiatives, from requirement discovery and solution design to UAT, release and stabilisation, working with internal teams, partners and vendors.",
      "Align data platforms, access governance and KPI reporting with organisational and country-office priorities.",
      "Own system integration and data-exchange design between source and target systems, balancing quality, timelines and value for money.",
      "Drive cross-functional collaboration with head-office and country-office stakeholders, applying change management, training and adoption practices.",
    ],
  },
  {
    kind: "work",
    title: "Software Engineer · Technical Lead, BInsight",
    organization: "Streams Tech Ltd",
    location: "Dhaka, Bangladesh (Remote)",
    date: "Mar 2024 – Nov 2026",
    highlights: [
      "Led PostgreSQL LIST partitioning and schema normalisation across 70M+ row tables, cutting KPI-dashboard and report generation from 5–10 min to under 1 min.",
      "Primary technical contact for BRAC International: ran planning, requirement and review meetings with HO and country-office teams; owned the roadmap, milestones and risk/issue log.",
      "Designed RBAC and approval-workflow structures enforcing segregation of duties across country, HQ and departmental roles.",
      "Led the build of a company-wide internal ERP (HR, issue tracking, leave management) from BInsight's core engine.",
      "Owned ETL strategy (Airflow, Airbyte, dbt) for 3x faster warehouse queries; directed Grafana telemetry across 20+ deployments.",
    ],
  },
  {
    kind: "work",
    title: "Associate Software Engineer · Platform Engineering",
    organization: "Streams Tech Ltd",
    location: "Dhaka, Bangladesh",
    date: "Mar 2023 – Mar 2024",
    highlights: [
      "Built an offline-first Flutter app with bidirectional PostgreSQL ↔ SQLite sync for 30,000+ field users, with zero data loss.",
      "Architected a dynamic workflow engine that lets non-developers configure 140+ settings, cutting deployment downtime by 70%.",
      "Coordinated readiness assessments and phased rollouts with country teams.",
    ],
  },
  {
    kind: "work",
    title: "Junior Software Engineer",
    organization: "Innovex IT",
    location: "Sylhet, Bangladesh",
    date: "Mar 2022 – Mar 2023",
    highlights: [
      "Built an inventory management system (Flutter, Node.js, MongoDB) covering sales, finance and clients.",
      "Reduced network usage on low-end devices by 40%, and set up Jenkins CI/CD to cut release time from 30 min to 5 min.",
    ],
  },
  {
    kind: "education",
    title: "B.Sc. (Engg.) in Computer Science & Engineering",
    organization: "Shahjalal University of Science and Technology",
    location: "Sylhet, Bangladesh",
    date: "2018 – 2023",
    summary: "CGPA 3.55 / 4.00",
    highlights: [
      "Coursework: Data Structures, Algorithms, AI, Design Patterns, RDBMS, Computer Architecture.",
    ],
  },
];

export type ProjectEntry = {
  name: string;
  category: string;
  context: string;
  period: string;
  description: string;
  stack: string[];
  /** Optional cover image (16:9 works best). Without one, a gradient cover is shown. */
  image?: string;
  link?: string;
  /** Set to true to detach the project from the UI without deleting it. */
  hidden?: boolean;
};

export const projects: ProjectEntry[] = [
  {
    name: "BInsight",
    category: "Enterprise MEL Platform",
    context: "BRAC International (via Streams Tech)",
    period: "Mar 2023 – Nov 2026",
    description:
      "BRAC International's flagship Monitoring, Evaluation and Learning platform, serving 30,000+ field users across multiple countries. I led database and delivery: a partitioned 70M+ row data layer, offline sync, ETL pipelines, and modules for registration, events, surveys, GIS, cash disbursement and reporting.",
    stack: ["PostgreSQL", ".NET Core", "Flutter", "Airflow", "dbt", "Power BI"],
    image: binsightCover,
  },
  {
    name: "AIM Data Warehouse",
    category: "Enterprise Data Warehouse",
    context: "BRAC International (via Streams Tech)",
    period: "Mar 2023 – Nov 2026",
    description:
      "Managed the entire data warehouse for BRAC International's AIM programme. Led PostgreSQL LIST partitioning and schema normalisation across 70M+ row tables, cutting KPI-dashboard and report generation from 5–10 min to under 1 min, and owned the ETL strategy (Airflow, Airbyte, dbt) that offloaded analytics from production for 3x faster warehouse queries.",
    stack: ["PostgreSQL", "Airflow", "Airbyte", "dbt", "Power BI"],
    image: aimWarehouseCover,
  },
  {
    name: "Internal ERP Suite",
    category: "HR · Issue Tracking · Leave Management",
    context: "Streams Tech Ltd",
    period: "2024 – Nov 2026",
    description:
      "Turned BInsight's core engine into a company-wide platform. I captured requirements, designed the data model and RBAC structure, and shipped HR, an in-house Jira alternative and leave management with a small team in a few months.",
    stack: [".NET Core", "PostgreSQL", "RBAC"],
    image: erpCover,
  },
  {
    name: "AI-Assisted Workflow Configurator",
    category: "Developer Productivity",
    context: "Streams Tech Ltd",
    period: "2024 – Nov 2026",
    description:
      "A backend configurator that generates mobile UI configs and survey schemas from natural-language input, cutting configuration setup time by 60% across the team.",
    stack: ["OpenAI API", "Claude MCP", ".NET Core"],
    image: aiConfiguratorCover,
  },
  {
    name: "Offline-First Sync Engine",
    category: "Field Data Collection",
    context: "Streams Tech Ltd",
    period: "2023 – 2024",
    description:
      "Bidirectional PostgreSQL ↔ SQLite replication that lets field agents work without connectivity and reconcile with zero data loss, paired with a dynamic engine driving 140+ runtime form and workflow settings.",
    stack: ["Flutter", "Riverpod", "SQLite", "PostgreSQL"],
    image: offlineSyncCover,
  },
  {
    name: "Flat Suite",
    category: "Mobile Application",
    context: "Streams Tech Ltd",
    period: "Oct 2023 – Feb 2024",
    description:
      "Led delivery of a property management app with expense tracking, charge collection, role-based access for residents and board members, financial reporting and automated reconciliation.",
    stack: ["Flutter (BLoC)", ".NET Core"],
    image: flatSuiteCover,
  },
  {
    name: "DokanE",
    category: "Full Stack Application",
    context: "Innovex IT",
    period: "Oct 2022 – Feb 2023",
    description:
      "Built a Node.js + MongoDB backend for inventory management, with a Flutter frontend using the BLoC pattern, lazy loading and memory-efficient data serialisation for low-end device support.",
    stack: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    image: dokaneCover,
  },
  {
    name: "E-commerce, Seller & Bank Integration",
    category: "Web Application",
    context: "Undergraduate",
    period: "Feb 2022 – Jun 2022",
    description:
      "Implemented a three-way REST API integration across E-commerce, Supplier and Bank services for real-time transaction confirmation, inventory supply and balance management.",
    stack: ["Node.js", "ReactJS", "MongoDB"],
    image: ecommerceCover,
    link: "https://github.com/Mashfy/Ecommerce-Seller-Bank",
    hidden: true,
  },
  {
    name: "PocketLencer",
    category: "Cross Platform Application",
    context: "Undergraduate",
    period: "Aug 2021 – Nov 2021",
    description:
      "Built an iOS and Android app from a single Flutter codebase using MVP architecture and BLoC state management for an original artwork marketplace.",
    stack: ["Flutter", "Dart", "Node.js", "Firebase"],
    image: pocketLencerCover,
    link: "https://github.com/Mashfy/PocketLencerFlutter",
  },
];
