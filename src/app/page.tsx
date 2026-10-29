'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Send, Download, ViewIcon, View, Grid2X2, Grid3X3, GridIcon, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import ParticlesComponent from './components/Particles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiAmazon,
  SiAmazondynamodb,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiAnthropic,
  SiGooglegemini,
  SiMilvus,
  SiPydantic
} from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize EmailJS
emailjs.init({
  publicKey: 'hzZc8uRBtLlnW2aQ-'
});

const projects = [
  {
    title: "DEXTER — Autonomous Document-Extraction Agent",
    description: "Co-built at Numerize AI. Gemini 3 Pro agent with 13 tools via native function calling, sandboxed Docker execution, DDL-derived Pydantic validators, and procedural-memory RAG. Handles 500+ POS/bank/payout docs/day across Swiggy, Zomato, Petpooja, HDFC, ICICI with 97%+ structural accuracy. Cached scripts cut repeat-run latency ~70% and token cost ~85%.",
    tech: ['Python', 'Gemini 3 Pro', 'google-genai', 'Pydantic', 'Docker', 'Postgres', 'RAG'],
    image: "/recipe.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  },
  {
    title: "Onboarding + Daily Audit Agent",
    description: "Autonomous data-audit agent on Claude Agent SDK (Opus 4.8). Every capability exposed over Model Context Protocol (MCP). Memory-as-files with SHA-256 integrity checks. Propose-only autonomy: the agent plans, investigates, and proposes findings with evidence — a human approves before any production write.",
    tech: ['Python', 'Claude Agent SDK', 'Opus 4.8', 'MCP', 'Cloud Run', 'Postgres'],
    image: "/Screenshot 2024-12-05 191500.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  },
  {
    title: "Friday Concierge — Multi-tenant LLM Chat Platform",
    description: "Contributed to a conversational-AI platform serving 20+ restaurant brands on FastAPI + Gemini with sub-second first-token SSE streaming, per-tenant Kubernetes isolation on GCP (one Service per tenant, RBAC-scoped), JWT tenant isolation, and schema-context injection for natural-language SQL over the frozen friday_mvp warehouse.",
    tech: ['Python', 'FastAPI', 'Gemini', 'SSE', 'GKE', 'Postgres'],
    image: "/Screenshot 2024-12-05 191706.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  },
  {
    title: "WhatsApp Financial Insights Bot",
    description: "FastAPI service with embedding-based retrieval and vector similarity search over restaurant sales + reconciliation data. Delivers context-aware answers to 20+ enterprise restaurant clients over WhatsApp via Periskope with HMAC-signed webhooks.",
    tech: ['Python', 'FastAPI', 'Embeddings', 'Vector Search', 'Webhooks'],
    image: "/recipe.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  },
  {
    title: "ApplyKit — AI Resume Tailor + ATS Scorer",
    description: "Personal side project. Python CLI that scores a candidate profile against a JD, tailors a 1-page resume via Gemini + Jinja + headless Chrome PDF, and orchestrates batched applications. Ships ATS coverage reporting, honesty guardrails (disallow list), and application telemetry in SQLite.",
    tech: ['Python', 'Gemini', 'Jinja', 'SQLite', 'MCP', 'CLI'],
    image: "/Screenshot 2024-12-05 191500.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  }
];

const iconComponents = {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiAmazon,
  SiAmazondynamodb,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiAnthropic,
  SiGooglegemini,
  SiMilvus,
  SiPydantic
};

const skillsData = [
  {
    title: "AI & LLMs",
    skills: [
      { name: "Gemini 3 Pro", icon: "SiGooglegemini" },
      { name: "Claude Opus", icon: "SiAnthropic" },
      { name: "OpenAI GPT", icon: "SiOpenai" },
      { name: "AWS Bedrock", icon: "SiAmazon" },
      { name: "MCP", icon: "SiAnthropic" },
      { name: "HuggingFace", icon: "SiHuggingface" }
    ]
  },
  {
    title: "Agentic AI",
    skills: [
      { name: "Autonomous Agents", icon: "SiPython" },
      { name: "Function Calling", icon: "SiOpenai" },
      { name: "Multi-Agent", icon: "SiAnthropic" },
      { name: "Human-in-Loop", icon: "SiPython" },
      { name: "Agent Eval", icon: "SiPydantic" },
      { name: "Guardrails", icon: "SiPydantic" }
    ]
  },
  {
    title: "RAG & Vector DBs",
    skills: [
      { name: "RAG", icon: "SiPython" },
      { name: "pgvector", icon: "SiPostgresql" },
      { name: "Pinecone", icon: "SiMilvus" },
      { name: "Qdrant", icon: "SiMilvus" },
      { name: "Embeddings", icon: "SiOpenai" },
      { name: "Hybrid Search", icon: "SiPython" }
    ]
  },
  {
    title: "AI Frameworks",
    skills: [
      { name: "LangChain", icon: "SiLangchain" },
      { name: "LangGraph", icon: "SiLangchain" },
      { name: "LlamaIndex", icon: "SiPython" },
      { name: "Claude Agent SDK", icon: "SiAnthropic" },
      { name: "Pydantic AI", icon: "SiPydantic" },
      { name: "google-genai", icon: "SiGooglegemini" }
    ]
  },
  {
    title: "LLMOps & Eval",
    skills: [
      { name: "Langfuse", icon: "SiPython" },
      { name: "Ragas", icon: "SiPython" },
      { name: "LLM-as-Judge", icon: "SiOpenai" },
      { name: "Prompt A/B", icon: "SiPython" },
      { name: "Cost Tracking", icon: "SiPython" },
      { name: "Drift Detection", icon: "SiPython" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Next.js", icon: "SiNextdotjs" }
    ]
  },
  {
    title: "Data & DBs",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "pgvector", icon: "SiPostgresql" },
      { name: "DynamoDB", icon: "SiAmazondynamodb" },
      { name: "Redis", icon: "SiRedis" },
      { name: "MongoDB", icon: "SiMongodb" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "SiAmazon" },
      { name: "GCP", icon: "SiGooglecloud" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "GH Actions", icon: "SiGithubactions" },
      { name: "Git", icon: "SiGit" }
    ]
  },
  {
    title: "AI-Assisted Dev",
    skills: [
      { name: "Claude Code", icon: "SiAnthropic" },
      { name: "Cursor", icon: "SiTypescript" },
      { name: "Codex", icon: "SiOpenai" },
      { name: "Copilot", icon: "SiGit" }
    ]
  }
];

// Add these animation variants before the Home component
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [gridView, setGridView] = useState(2);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [currentGridPage, setCurrentGridPage] = useState(0);
  const projectsPerPage = 4;
  const totalGridPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage(projects.length - 1);
    } else if (newPage >= projects.length) {
      setPage(0);
    } else {
      setPage(newPage);
    }
    setDirection(newDirection);
  };

  useEffect(() => {
    if (gridView !== 1) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [gridView, page]);

  const getGridProjects = () => {
    const start = currentGridPage * projectsPerPage;
    return projects.slice(start, start + projectsPerPage);
  };

  const nextGridPage = () => {
    setSlideDirection(1);
    setCurrentGridPage((prev) =>
      prev === totalGridPages - 1 ? 0 : prev + 1
    );
  };

  const prevGridPage = () => {
    setSlideDirection(-1);
    setCurrentGridPage((prev) =>
      prev === 0 ? totalGridPages - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-dark-300 relative overflow-hidden">
        <ParticlesComponent />
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-2xl text-primary mb-4">Hi There! 👋</h2>
              <h1 className="heading text-4xl md:text-6xl font-bold mb-4 ">
                I&apos;m K Siddeshwar Reddy
              </h1>
              <div className="text-xl md:text-2xl text-primary mb-6 h-[60px]">
                <Typewriter
                  options={{
                    strings: [
                      'AI Engineer',
                      'LLM & Agentic AI Engineer',
                      'RAG + Vector Search Engineer',
                      'Python + FastAPI Backend Engineer'
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-base md:text-lg text-secondary/80 mb-6 max-w-xl">
                Building production LLM applications, autonomous agents, and agentic workflows. 2+ years shipping Python + FastAPI systems with Gemini, Claude, RAG, and MCP.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="mailto:k.siddeshwarreddy@gmail.com"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-dark-300 rounded-full transition-all flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
                <a
                  href="/K-SIDDESHWAR-REDDY-FlowCV-Resume-20241104 (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full transition-all"
                >
                  View Projects
                </a>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/sidhu2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddeshwar-reddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Tilt>
                <div className="relative w-[300px] h-[300px] mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/1721486773846.jpg"
                    alt="K Siddeshwar Reddy"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-dark-100 py-20">
        <div className="section-container">
          <h2 className="heading mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-secondary/80">
              <p>
                I am an AI Engineer with 2+ years in production systems and 1+ year shipping production LLM applications on Gemini, Anthropic Claude, and AWS Bedrock using Python, TypeScript, FastAPI, and AI-assisted development with Claude Code.
              </p>
              <p>
                I co-build autonomous agents with native tool calling, RAG, embeddings, Model Context Protocol (MCP), model-evaluation gates, guardrails, LLMOps telemetry, and human-in-the-loop escalation. I also led a 6-repo AWS migration with CI/CD release gating via GitHub Actions, per-tenant Kubernetes isolation, OAuth2/OIDC + RBAC, TLS/KMS encryption, and audit logging end-to-end.
              </p>
              <p>
                HIPAA-grade compliance background with GDPR working knowledge. Based in Hyderabad, India.
              </p>
              <div className="pt-4">
                <a
                  href="/K-SIDDESHWAR-REDDY-FlowCV-Resume-20241104 (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-dark-300 rounded-full transition-all"
                >
                  <View className="w-5 h-5" />
                  View Resume
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">2+</h3>
                <p className="text-secondary">Years Experience</p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">1,000+</h3>
                <p className="text-secondary">Agent Runs / day</p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
                <p className="text-secondary">Enterprise Tenants</p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">97%+</h3>
                <p className="text-secondary">Extraction Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-dark-300 py-20">
        <div className="section-container">
          <h2 className="heading mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="card group bg-dark-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">AI Engineer</h3>
                  <p className="text-primary">Numerize AI</p>
                </div>
                <span className="text-primary">Nov 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside text-secondary/80 space-y-2">
                <li>Co-built DEXTER, a Gemini 3 Pro-powered autonomous document-extraction agent with 13 tools via native function calling. Writes its own extraction code in a sandboxed Docker container, self-corrects against DDL-derived Pydantic validators, and handles 500+ POS/bank/payout docs/day with 97%+ structural accuracy.</li>
                <li>Shipped procedural-memory RAG: validated extraction scripts cached by (channel, doc_type), retrieved on next run, re-validated in an ephemeral Postgres instance before any production write — cutting repeat-run latency ~70% and token cost ~85%.</li>
                <li>Built the audit agent on Anthropic Claude Agent SDK (Opus 4.8) with every capability exposed over Model Context Protocol (MCP). Propose-only autonomy with human-in-the-loop gates and memory-as-files (SHA-256 integrity checks).</li>
                <li>Engineered the model evaluation + safety layer: circuit breakers at 5 validation failures / 60 LLM turns / 15 stall turns, PII minimization, per-run token/cost/latency telemetry across 1,000+ runs/day, prompt A/B comparisons that cut regressions ~80%.</li>
                <li>End-to-end owner of the AWS replica migration across 6 repos. Chose ECS Fargate over EKS (~40% lower ops surface), shipped the cutover in 5 weeks without disrupting GCP production. OAuth2/OIDC with AWS Cognito (4 pools), HMAC-signed webhooks, TLS/KMS encryption.</li>
              </ul>
            </div>

            <div className="card group bg-dark">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Associate Software Developer</h3>
                  <p className="text-primary">VECTORSOFT</p>
                </div>
                <span className="text-primary">Aug 2024 - Oct 2025</span>
              </div>
              <ul className="list-disc list-inside text-secondary/80 space-y-2">
                <li>Architected a HIPAA-compliant healthcare platform on AWS (Cognito, DynamoDB, EC2, Route53) integrating DoseSpot e-prescribing over OAuth 2.0 + webhooks across 100+ endpoints.</li>
                <li>Deployed AWS Cognito authN for 500+ concurrent users with RBAC and multi-tenant session isolation.</li>
                <li>Executed clinic data migration for 15+ clinics from legacy EHR/EMR with validation pipelines ensuring zero data loss across 50,000+ patient records.</li>
                <li>Shipped 5+ full-stack web/desktop apps on React, Next.js, TypeScript, React Native, and Tauri with Bun/Elysia backends.</li>
              </ul>
            </div>

            <div className="card group bg-dark-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Machine Learning Intern</h3>
                  <p className="text-primary">Research Centre Imarat (RCI)</p>
                </div>
                <span className="text-primary">Oct 2022 - Jan 2023</span>
              </div>
              <ul className="list-disc list-inside text-secondary/80 space-y-2">
                <li>Trained a YOLOv7 image-segmentation model to 85% mAP on 5,000+ annotated images, with GPU-accelerated training on Google Colab.</li>
                <li>Preprocessed 15,000+ images via Roboflow across 10+ augmentation techniques, lifting accuracy by 12%.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-dark-100 py-20">
        <div className="section-container">
          <h2 className="heading mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <Tilt key={category.title}>
                <SkillCard {...category} />
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-dark-300 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300 via-dark-200/50 to-dark-300"></div>
        <div className="absolute inset-0 bg-[radial-gradient-ellipse_at_center,_var(--tw-gradient-stops)] from-primary/5 via-transparent to-transparent"></div>

        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading mb-4">Projects</h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto mb-8">
              Autonomous agents, LLM platforms, and agentic workflows I have built or contributed to
            </p>

            {/* View Filter Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setGridView(1)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  gridView === 1
                    ? 'bg-primary text-dark-300'
                    : 'bg-dark-200 text-secondary hover:bg-dark-100'
                }`}
                title="Single View"
              >
                <GridIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Single View</span>
              </button>
              <button
                onClick={() => setGridView(2)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  gridView === 2
                    ? 'bg-primary text-dark-300'
                    : 'bg-dark-200 text-secondary hover:bg-dark-100'
                }`}
                title="Grid View"
              >
                <Grid2X2 className="w-5 h-5" />
                <span className="hidden sm:inline">Grid View</span>
              </button>
            </div>
          </div>

          {gridView === 1 ? (
            <div className="relative h-[600px] sm:h-[650px] overflow-hidden px-4 sm:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full"
                >
                  <ProjectCard {...projects[page]} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(-1)}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setDirection(index > page ? 1 : -1);
                        setPage(index);
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        page === index
                          ? 'bg-primary w-6'
                          : 'bg-dark-200/80 hover:bg-dark-100'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(1)}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          ) : (
            // Grid View
            <div className="relative px-4 sm:px-6 lg:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGridPage}
                  initial={{ opacity: 0, x: slideDirection > 0 ? 1000 : -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection > 0 ? -1000 : 1000 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="grid gap-6 sm:gap-8"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))'
                  }}
                >
                  {getGridProjects().map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Grid Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSlideDirection(-1);
                    prevGridPage();
                  }}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex gap-2">
                  {Array.from({ length: totalGridPages }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setSlideDirection(index > currentGridPage ? 1 : -1);
                        setCurrentGridPage(index);
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentGridPage === index
                          ? 'bg-primary w-6'
                          : 'bg-dark-200/80 hover:bg-dark-100'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSlideDirection(1);
                    nextGridPage();
                  }}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark-100 py-20">
        <div className="section-container">
          <h2 className="heading mb-8 text-center">Get In Touch</h2>
          <p className="text-xl text-primary mb-12 text-center max-w-2xl mx-auto">
            I'm currently open to AI Engineer / LLM Engineer roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Email</h3>
                  <a href="mailto:k.siddeshwarreddy@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    k.siddeshwarreddy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/siddeshwar-reddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">GitHub</h3>
                  <a
                    href="https://github.com/sidhu2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Check out my repos
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="card group">
      <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-6">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => {
          const Icon = iconComponents[skill.icon as keyof typeof iconComponents];
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-3 rounded-lg bg-dark-200 hover:bg-dark-300 transition-all duration-300 group/skill"
            >
              {Icon ? (
                <Icon className="w-8 h-8 text-primary group-hover/skill:scale-110 transition-transform duration-300" />
              ) : (
                <div className="w-8 h-8" />
              )}
              <span className="text-xs text-secondary/80 group-hover/skill:text-primary transition-colors text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-dark-200 p-1">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent"></div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200"></div>

      <div className="relative bg-dark-200 rounded-lg p-4 h-full flex flex-col transition-transform duration-500 group-hover:scale-[0.99]">
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
          {title}
        </h3>

        <p className="text-secondary/70 group-hover:text-secondary/90 transition-colors duration-300 mb-4 flex-grow">
          {description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-dark-300/50 text-primary rounded-full text-sm border border-primary/20
                         backdrop-blur-sm transition-all duration-300
                         hover:border-primary/50 hover:bg-primary/10"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary/80 hover:text-primary transition-colors duration-300
                       px-4 py-2 rounded-lg bg-dark-300/50 hover:bg-dark-300 border border-primary/10 hover:border-primary/30"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">Code</span>
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary/80 hover:text-primary transition-colors duration-300
                       px-4 py-2 rounded-lg bg-dark-300/50 hover:bg-dark-300 border border-primary/10 hover:border-primary/30"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm">Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_1unyvzl',
        'template_oimkwik',
        formRef.current,
        'hzZc8uRBtLlnW2aQ-'
      );

      console.log('Success:', result.text);
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 w-full">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-secondary mb-1">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          value={formData.from_name}
          onChange={(e) => setFormData(prev => ({ ...prev, from_name: e.target.value }))}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-100 focus:border-primary rounded-lg outline-none transition-colors text-secondary"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-secondary mb-1">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          value={formData.from_email}
          onChange={(e) => setFormData(prev => ({ ...prev, from_email: e.target.value }))}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-100 focus:border-primary rounded-lg outline-none transition-colors text-secondary"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-100 focus:border-primary rounded-lg outline-none transition-colors text-secondary resize-none"
          placeholder="Your message here..."
        />
      </div>
      <input type="hidden" name="to_name" value="K Siddeshwar Reddy" />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-primary text-dark-300 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
