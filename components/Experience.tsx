"use client";
import { containerVariants, itemVariants } from "@/lib/animations";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Briefcase, Calendar } from "lucide-react";

interface ExperienceProject {
  name: string;
  bullets: string[];
}

interface ExperienceRole {
  title: string;
  period: string;
  type: "internship" | "fulltime";
  location?: string;
  summary?: string;
  description: string[];
  projects?: ExperienceProject[];
  infra?: string[];
  tech?: string[];
  recognition?: string;
}

interface ExperienceItem {
  company: string;
  companyPeriod?: string;
  location?: string;
  companyMeta?: string;
  companySummary?: string;
  roles: ExperienceRole[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Albertsons Companies India",
    companyMeta: "Full-time",
    location: "Bengaluru, Karnataka, India · On-site",
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2026 – Present",
        type: "fulltime",
        description: [
          "Engineered production microservices for the Cart & Checkout domain across all banners using Spring Boot (WebFlux + MVC), contributing directly to the core transactional flow serving millions of live users.",
          "Developing high-concurrency, low-latency distributed backend systems using reactive programming (Spring WebFlux, Project Reactor), Kafka, and Resilience4j — building, testing across QA environments, and deploying features through the full SWE lifecycle to production.",
        ],
      },
    ],
  },
  {
    company: "Version 1",
    companyPeriod: "Sep 2025 – Jul 2026",
    companyMeta: "Internship · 11 months",
    location: "Bengaluru, Karnataka, India · On-site",
    companySummary: "Delivered 9 enterprise applications at Version 1 across the full software development lifecycle. 5 deployed org-wide as internal platforms serving 3,500 or more employees and 3 shipped as client-facing production systems. Internship extended based on performance and impact. Recognised with a Certificate of Recognition for contributions and delivery excellence.",
    roles: [
      {
        title: "Intern",
        period: "Jan 2026 – Jul 2026 · 7 months",
        type: "internship",
        summary:
          "<strong>Delivered 3 enterprise platforms</strong> org-wide serving <strong>3,500+ Version 1 employees</strong> — load-tested at <strong>3,000+ concurrent req/sec</strong> via k6 with zero downtime.",
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
        recognition:
          "Awarded Certificate of Recognition for impact and delivery excellence.",
      },
      {
        title: "IT Intern",
        period: "Sep 2025 – Jan 2026 · 5 months",
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
];

function TypeChip({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <motion.span
      className={`${compact ? "ml-2 px-2 py-0.5 text-[10px]" : "ml-3 px-3 py-1 text-xs"} exp-chip bg-gradient-to-r from-purple-500 to-cyan-500 !text-white rounded-md font-medium`}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
    >
      {label}
    </motion.span>
  );
}

function DateChip({
  period,
  compact = false,
}: {
  period: string;
  compact?: boolean;
}) {
  return (
    <motion.div
      className="flex items-center mt-2 md:mt-0 shrink-0"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.div
        whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
        whileTap={{ rotate: 360, transition: { duration: 0.5 } }}
      >
        <Calendar className="text-cyan-400 mr-2" size={compact ? 14 : 18} />
      </motion.div>
      <motion.span
        className={`${compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"} exp-chip bg-gradient-to-r from-purple-500 to-cyan-500 !text-white rounded-md font-medium`}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        {period}
      </motion.span>
    </motion.div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.5 }}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
          whileTap={{ x: 5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-start space-x-3">
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"
              whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 1.5, transition: { duration: 0.2 } }}
            />
            <motion.p
              className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
              whileTap={{ x: 3, transition: { duration: 0.2 } }}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TechChips({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tech.map((item) => (
        <motion.span
          key={item}
          className="exp-tech-chip text-xs font-medium px-2.5 py-1 rounded-md border border-purple-400/50 bg-gray-100 text-gray-800 dark:bg-white/10 dark:!text-gray-200 dark:border-cyan-400/40"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

function RoleBody({ role }: { role: ExperienceRole }) {
  return (
    <div className="space-y-5 mt-4">
      {role.summary && (
        <motion.p
          className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-semibold"
          whileHover={{ x: 3, transition: { duration: 0.2 } }}
          whileTap={{ x: 3, transition: { duration: 0.2 } }}
          dangerouslySetInnerHTML={{ __html: role.summary }}
        />
      )}

      {role.description.length > 0 && <BulletList items={role.description} />}

      {role.projects && role.projects.length > 0 && (
        <div>
          <motion.h4
            className="text-sm md:text-base font-bold uppercase tracking-wide text-purple-600 dark:!text-purple-300 mb-3"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            Key Engineering Projects
          </motion.h4>
          <div className="space-y-4">
            {role.projects.map((project) => (
              <div key={project.name}>
                <div className="flex items-start gap-2 mb-2">
                  <motion.span
                    className="mt-1.5 w-1.5 h-1.5 rotate-45 bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0"
                    whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 1.5, transition: { duration: 0.2 } }}
                  />
                  <motion.h5
                    className="text-sm md:text-base font-bold text-gray-900 dark:text-white"
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    whileTap={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    {project.name}
                  </motion.h5>
                </div>
                <div className="pl-4">
                  <BulletList items={project.bullets} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {role.infra && role.infra.length > 0 && (
        <div>
          <motion.h4
            className="text-sm md:text-base font-bold uppercase tracking-wide text-cyan-600 dark:!text-cyan-300 mb-3"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            Infrastructure & Deployment
          </motion.h4>
          <BulletList items={role.infra} />
        </div>
      )}

      {role.tech && role.tech.length > 0 && (
        <div>
          <motion.h4
            className="text-sm md:text-base font-bold uppercase tracking-wide text-purple-600 dark:!text-purple-300 mb-3"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            Tech Stack
          </motion.h4>
          <TechChips tech={role.tech} />
        </div>
      )}

      {role.recognition && (
        <div className="flex items-start gap-2 pt-1">
          <motion.div
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            whileTap={{ rotate: 360, transition: { duration: 0.5 } }}
          >
            <Award className="text-purple-400 mt-0.5 flex-shrink-0" size={16} />
          </motion.div>
          <motion.p
            className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-semibold"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            {role.recognition}
          </motion.p>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto max-w-6xl experience-section">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Work Experience
          </motion.h2>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp) => {
            const isMultiRole = exp.roles.length > 1;
            const singleRole = exp.roles[0];

            return (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500" />

                  {!isMultiRole && singleRole ? (
                    <>
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <div className="flex flex-wrap items-center mb-2">
                            <motion.h3
                              className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                              whileTap={{ x: 5, transition: { duration: 0.2 } }}
                            >
                              {exp.company}
                            </motion.h3>
                            {exp.companyMeta && (
                              <TypeChip label={exp.companyMeta.toUpperCase()} />
                            )}
                          </div>
                          <motion.div
                            className="flex items-center mt-2"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            whileTap={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                                rotate: 360,
                                transition: { duration: 0.5 },
                              }}
                              whileTap={{
                                scale: 1.1,
                                rotate: 360,
                                transition: { duration: 0.5 },
                              }}
                            >
                              <Briefcase
                                className="text-purple-400 mr-2"
                                size={18}
                              />
                            </motion.div>
                            <motion.p
                              className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 cursor-default"
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {singleRole.title}
                            </motion.p>
                          </motion.div>
                          {exp.location && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-7">
                              {exp.location}
                            </p>
                          )}
                        </div>
                        <DateChip period={singleRole.period} />
                      </div>
                      <div className="mt-6">
                        <RoleBody role={singleRole} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row justify-between mb-6">
                        <div>
                          <div className="flex flex-wrap items-center mb-2">
                            <motion.h3
                              className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {exp.company}
                            </motion.h3>
                            {exp.companyMeta && (
                              <TypeChip label="INTERNSHIP" />
                            )}
                          </div>
                          <motion.div
                            className="flex items-center mt-2"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            whileTap={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                                rotate: 360,
                                transition: { duration: 0.5 },
                              }}
                              whileTap={{
                                scale: 1.1,
                                rotate: 360,
                                transition: { duration: 0.5 },
                              }}
                            >
                              <Briefcase
                                className="text-purple-400 mr-2"
                                size={18}
                              />
                            </motion.div>
                            <p className="text-gray-700 dark:text-gray-200 font-medium">
                              {exp.companyMeta}
                            </p>
                          </motion.div>
                          {exp.location && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-7">
                              {exp.location}
                            </p>
                          )}
                        </div>
                        {exp.companyPeriod && (
                          <DateChip period={exp.companyPeriod} />
                        )}
                      </div>

                      {exp.companySummary && (
                        <motion.div
                          className="mb-6 p-4 rounded-lg border border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5"
                          whileHover={{ x: 3, transition: { duration: 0.2 } }}
                          whileTap={{ x: 3, transition: { duration: 0.2 } }}
                        >
                          <motion.h4
                            className="text-sm md:text-base font-bold uppercase tracking-wide text-purple-600 dark:!text-purple-300 mb-2"
                            whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            whileTap={{ x: 3, transition: { duration: 0.2 } }}
                          >
                            Professional Summary
                          </motion.h4>
                          <motion.p
                            className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed"
                            whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            whileTap={{ x: 3, transition: { duration: 0.2 } }}
                          >
                            {exp.companySummary}
                          </motion.p>
                        </motion.div>
                      )}

                      <div className="relative ml-1 md:ml-2 space-y-5">
                        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-purple-500 to-cyan-500" />

                        {exp.roles.map((role) => (
                          <motion.div
                            key={role.title}
                            className="relative pl-7"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            whileTap={{ x: 3, transition: { duration: 0.2 } }}
                          >
                            <motion.span
                              className="absolute left-0 top-4 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-white dark:ring-[#1e1e3c]"
                              whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                              whileTap={{ scale: 1.5, transition: { duration: 0.2 } }}
                            />
                            <div className="rounded-lg border border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-4 md:p-5">
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                                <div className="flex flex-wrap items-center">
                                  <motion.h4
                                    className="text-xl font-semibold text-gray-900 dark:text-white"
                                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                                    whileTap={{ x: 3, transition: { duration: 0.2 } }}
                                  >
                                    {role.title}
                                  </motion.h4>
                                  <TypeChip
                                    label={role.type.toUpperCase()}
                                    compact
                                  />
                                </div>
                                <DateChip period={role.period} compact />
                              </div>
                              <RoleBody role={role} />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
