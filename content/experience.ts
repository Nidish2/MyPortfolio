export interface ExperienceProject {
  name: string;
  bullets: readonly string[];
}

export interface ExperienceRole {
  title: string;
  period: string;
  type: "internship" | "fulltime";
  location?: string;
  summary?: string;
  description: readonly string[];
  projects?: readonly ExperienceProject[];
  infra?: readonly string[];
  tech?: readonly string[];
  recognition?: string;
}

export interface ExperienceItem {
  company: string;
  companyPeriod?: string;
  location?: string;
  companyMeta?: string;
  companySummary?: string;
  roles: readonly ExperienceRole[];
}

export const experiences: readonly ExperienceItem[] = [
  {
    company: "Albertsons Companies India",
    companyMeta: "Full-time",
    location: "Bengaluru, Karnataka, India \u00b7 On-site",
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2026 \u2013 Present",
        type: "fulltime",
        description: [
          "Engineered production microservices for the Cart & Checkout domain across all banners using Spring Boot (WebFlux + MVC), contributing directly to the core transactional flow serving millions of live users.",
          "Developing high-concurrency, low-latency distributed backend systems using reactive programming (Spring WebFlux, Project Reactor), Kafka, and Resilience4j \u2014 building, testing across QA environments, and deploying features through the full SWE lifecycle to production.",
        ],
      },
    ],
  },
  {
    company: "Version 1",
    companyPeriod: "Sep 2025 \u2013 Jul 2026",
    companyMeta: "Internship \u00b7 11 months",
    location: "Bengaluru, Karnataka, India \u00b7 On-site",
    companySummary:
      "Delivered 9 enterprise applications at Version 1 across the full software development lifecycle. 5 deployed org-wide as internal platforms serving 3,500 or more employees and 3 shipped as client-facing production systems. Internship extended based on performance and impact. Recognised with a Certificate of Recognition for contributions and delivery excellence.",
    roles: [
      {
        title: "Intern",
        period: "Jan 2026 \u2013 Jul 2026 \u00b7 7 months",
        type: "internship",
        summary:
          "<strong>Delivered 3 enterprise platforms</strong> org-wide serving <strong>3,500+ Version 1 employees</strong> \u2014 load-tested at <strong>3,000+ concurrent req/sec</strong> via k6 with zero downtime.",
        description: [],
        projects: [
          {
            name: "OneClickClaim (org-wide)",
            bullets: [
              "Built an AI-powered expense claim web platform using <strong>Django, React (TypeScript), Tailwind CSS, MUI, Azure Document Intelligence OCR</strong> and <strong>Azure OpenAI</strong>, automating receipt extraction, claim validation and reimbursement workflows.",
              "Integrated direct <strong>Kantata (Salesforce) API</strong> submission via <strong>JWT + SOQL</strong>, cutting claim time from <strong>30+ minutes to under 5 minutes</strong> and processing <strong>1,000+ receipts/day</strong>.",
            ],
          },
          {
            name: "Expense Agent (org-wide)",
            bullets: [
              "Built and deployed a Microsoft Teams AI expense automation bot using <strong>TypeScript, Microsoft Teams SDK, Restify</strong> and <strong>Adaptive Cards</strong> with <strong>Azure Document Intelligence OCR, Azure OpenAI</strong> and <strong>Kantata (Salesforce)</strong> integration.",
              "Deployed via <strong>Azure Bot Service, App Services</strong> and <strong>Azure Bicep</strong> with <strong>Managed Identity</strong> based authentication. Successfully rolled out to the complete organisation.",
            ],
          },
          {
            name: "Harness Engineering (org-wide)",
            bullets: [
              "Built internal AI coding agent pipelines using <strong>Claude</strong> and <strong>Harness skill files</strong>, enabling structured multi-agent workflows for engineering productivity across the team.",
            ],
          },
        ],
        infra: [
          "Provisioned all infrastructure via <strong>Terraform, Azure Bicep, Azure App Services, VNets, Private Endpoints</strong> and <strong>Azure Key Vault</strong> across isolated Dev and Prod environments.",
          "Worked extensively with <strong>Git</strong> and <strong>GitLab</strong> including branching, rebasing, merge requests, issue tracking and <strong>CI/CD</strong> pipelines for automated deployments.",
        ],
        tech: [
          "Django",
          "React (TypeScript)",
          "Tailwind CSS",
          "MUI",
          "Azure Document Intelligence",
          "Azure OpenAI",
          "Azure Bot Service",
          "Azure Bicep",
          "Terraform",
          "PostgreSQL",
          "Kantata Salesforce API",
          "Microsoft Teams SDK",
          "TypeScript",
          "Restify",
        ],
        recognition: "Awarded Certificate of Recognition for impact and delivery excellence.",
      },
      {
        title: "IT Intern",
        period: "Sep 2025 \u2013 Jan 2026 \u00b7 5 months",
        type: "internship",
        summary:
          "Delivered 6 enterprise applications, 3 deployed org-wide as internal platforms and 3 shipped as client-facing production systems.",
        description: [],
        projects: [
          {
            name: "ProMatch (internal)",
            bullets: [
              "Built an AI-powered resume matching system using <strong>Gemini API</strong> for semantic keyword expansion and <strong>Qdrant</strong> for vector similarity search, with secure <strong>AWS S3</strong> pre-signed URL based document storage.",
            ],
          },
          {
            name: "ConTracKt v1 (client-facing)",
            bullets: [
              "Built an AI-driven contract intelligence platform for natural-language querying of legal documents using <strong>LLaMA 3</strong> via <strong>AWS Bedrock</strong> and <strong>Amazon Titan v2</strong> for vector embeddings, storing them in <strong>Qdrant</strong> for semantic retrieval with <strong>Redis</strong> caching for performance optimization.",
            ],
          },
          {
            name: "Lumina (org-wide)",
            bullets: [
              "Built a centralized enterprise prompt portal with <strong>RBAC, SSO</strong>, multi-stage approval workflows, <strong>version control</strong> and <strong>PostgreSQL</strong>. Successfully adopted org-wide, improving internal development workflow speed by <strong>~30%</strong>.",
            ],
          },
          {
            name: "Recognition Platform (org-wide)",
            bullets: [
              "Built an employee appreciation platform with <strong>4-role hierarchical RBAC (Employee, Coordinator, Committee, Admin)</strong>, nomination lifecycle, <strong>timeline-locked voting engine</strong> and <strong>analytics dashboard</strong> on <strong>Azure OpenAI</strong> and <strong>PostgreSQL</strong>.",
            ],
          },
          {
            name: "ConTracKt v2 (client-facing)",
            bullets: [
              "Upgraded contract intelligence platform to <strong>GPT-4</strong> via <strong>Azure OpenAI</strong> with <strong>pgvector</strong> inside <strong>PostgreSQL</strong> for native vector search and <strong>Django Ninja</strong> for high-performance type-safe APIs, simplifying the overall architecture.",
            ],
          },
          {
            name: "MDM Mapper (client-facing)",
            bullets: [
              "Built an enterprise data migration platform using <strong>Django Ninja</strong> and <strong>React (TypeScript)</strong> with automated column matching, conflict detection, a learning-based <strong>Memory Rule engine</strong> and full audit trail via <strong>PostgreSQL</strong>.",
            ],
          },
        ],
        infra: [
          "Worked with <strong>Git, GitLab</strong> and <strong>GitHub</strong> for branching, rebasing, merge requests, issue tracking and <strong>CI/CD</strong> based deployment pipelines.",
          "Deployed on <strong>AWS EC2</strong> with <strong>Nginx</strong> and <strong>Gunicorn</strong> reverse proxy, managing secure SSH access via PEM keys on Ubuntu.",
        ],
        tech: [
          "React (TypeScript)",
          "Django / Django Ninja",
          "PostgreSQL",
          "pgvector",
          "Qdrant",
          "Redis",
          "AWS (S3, EC2, Bedrock)",
          "Azure OpenAI",
          "Nginx",
          "Gunicorn",
          "GitLab CI/CD",
        ],
      },
    ],
  },
] as const;
