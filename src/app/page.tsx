import Link from "next/link";
import { MdocFlow } from "@/components/mdoc-flow";

export default function Home() {
  const skills = [
    {
      category: "Languages",
      items: ["Ruby", "Go", "Java", "TypeScript", "SQL", "HTML/CSS"],
      color: "border-accent-primary/20 text-accent-primary bg-accent-primary/5",
    },
    {
      category: "Frameworks & Tech",
      items: [
        "Ruby on Rails",
        "Spring Boot",
        "Next.js",
        "React",
        "Serverless",
        "Node.js",
      ],
      color:
        "border-accent-secondary/20 text-accent-secondary bg-accent-secondary/5",
    },
    {
      category: "Cloud & Architecture",
      items: [
        "AWS (Lambda, ECS, RDS)",
        "Docker",
        "CI/CD (Actions)",
        "Microservices",
        "REST/GraphQL",
        "gRPC",
      ],
      color: "border-accent-success/20 text-accent-success bg-accent-success/5",
    },
    {
      category: "Security & Standards",
      items: [
        "ISO/IEC 18013-5 (mDL)",
        "PKI & Certificate Signing",
        "COSE / CBOR",
        "OAuth2 / OIDC",
        "Cryptography",
      ],
      color: "border-accent-info/20 text-accent-info bg-accent-info/5",
    },
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "DVLA (Driver and Vehicle Licensing Agency)",
      period: "2022 - Present",
      description:
        "Lead developer on core digital identity systems. Heavily involved in the architecture and development of the open-source mdoc-builder ecosystem in partnership with other government departments. Built compliance pipelines for ISO/IEC 18013-5 mobile driving licence security mechanisms.",
      achievements: [
        "Implemented high-security certificate signing, verification, and binding mechanisms for mobile wallets (mDL).",
        "Designed serverless, highly-available APIs using TypeScript and Go to sign driver credentials at enterprise scale.",
        "Collaborated on national digital identity standards, ensuring strict privacy and cryptographic integrity protocols.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Enterprise Financial Platforms (Staging)",
      period: "2019 - 2022",
      description:
        "Led a distributed team of engineers to build and migrate legacy transactional databases to event-driven microservices. Utilized Ruby on Rails and Go for high-throughput messaging structures.",
      achievements: [
        "Reduced database locking and query latencies by 45% through optimized index architectures and cache-aside patterns.",
        "Introduced containerized local development structures with Docker, cutting onboarding time for junior engineers by half.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Scalable Web Solutions",
      period: "2016 - 2019",
      description:
        "Developed full-stack web solutions using Ruby on Rails, Java, and modern React frontends. Implemented secure OAuth2 single sign-on flows.",
      achievements: [
        "Built responsive, accessible interfaces (WCAG compliant) that served over 1M monthly active users.",
        "Refactored Spring Boot backend APIs to improve throughput and response times (p99 from 300ms down to 80ms).",
      ],
    },
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="max-w-4xl space-y-6">
        <span className="badge-pastel border-accent-primary/20 text-accent-primary bg-accent-primary/5 px-3 py-1 text-[10px] tracking-widest uppercase">
          Executive Portfolio
        </span>
        <h1 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
          Engineering Secure, <br />
          <span className="from-accent-primary via-accent-secondary to-accent-info bg-gradient-to-r bg-clip-text text-transparent">
            Enterprise Platforms
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-medium text-slate-600 md:text-xl dark:text-zinc-400">
          I am a senior software engineer specializing in building
          high-performance, cryptographically secure backends and serverless
          architectures. Currently shaping mobile driving licence standards at
          the DVLA.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Explore Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold transition-all hover:bg-slate-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            About Me & Story
          </Link>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/50 pb-3 dark:border-zinc-800/50">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-50">
            Technical Competencies
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
            Active toolsets and engineering standards deployed on enterprise
            platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl border border-slate-200/60 p-5 dark:border-zinc-800/60"
            >
              <h3 className="mb-3 text-sm font-bold tracking-wider text-slate-800 uppercase dark:text-zinc-200">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${skillGroup.color}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured DVLA Showcase */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/50 pb-3 dark:border-zinc-800/50">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-50">
            Highlight: Mobile Driving Licences (mDL)
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
            Deep-dive into my work building ISO/IEC 18013-5 certificate
            provisioning tools.
          </p>
        </div>
        <MdocFlow />
      </section>

      {/* Experience / Timeline */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/50 pb-3 dark:border-zinc-800/50">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-50">
            Professional Track Record
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
            A history of architectural leadership and product delivery.
          </p>
        </div>
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-[2px] before:bg-slate-200 dark:before:bg-zinc-800">
          {experience.map((exp, idx) => (
            <div key={idx} className="group relative pl-10">
              {/* Timeline marker */}
              <span className="group-hover:border-accent-primary group-hover:bg-accent-primary absolute top-1.5 left-2.5 h-3.5 w-3.5 rounded-full border-2 border-slate-100 bg-slate-300 transition-all duration-300 dark:border-zinc-950 dark:bg-zinc-700" />
              <div className="glass-card space-y-3 rounded-xl border border-slate-200/60 p-6 dark:border-zinc-800/60">
                <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-accent-primary text-sm font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="self-start rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500 sm:self-center dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  {exp.description}
                </p>
                <ul className="space-y-1.5 pt-1 text-sm text-slate-600 dark:text-zinc-400">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-0.5 font-bold select-none">
                        •
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Humanity Link Card */}
      <section className="glass-card from-accent-primary/5 via-accent-secondary/5 rounded-2xl border border-slate-200/60 bg-linear-to-r to-transparent p-6 md:p-8 dark:border-zinc-800/60">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <span className="badge-pastel border-accent-secondary/20 text-accent-secondary bg-accent-secondary/5 px-2 py-0.5 text-[9px] tracking-widest uppercase">
              Humanity & Life Values
            </span>
            <h3 className="font-display text-xl font-bold text-slate-950 dark:text-zinc-50">
              Parenthood & Engineering Leadership
            </h3>
            <p className="max-w-2xl text-sm text-slate-600 dark:text-zinc-400">
              I balance my senior engineering tasks with my family life as a
              father. I find that mentoring junior developers, teaching my
              children, and driving enterprise architecture all root from the
              same core principles of patience, transparency, and building for
              future generations.
            </p>
          </div>
          <Link
            href="/about#humanity"
            className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold whitespace-nowrap shadow-xs transition-all hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            Read My Story
          </Link>
        </div>
      </section>
    </div>
  );
}
