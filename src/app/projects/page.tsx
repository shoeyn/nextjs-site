import { MdocFlow } from "@/components/mdoc-flow";

export const metadata = {
  title: "Projects",
  description:
    "Technical case studies and open-source contributions for Nathan Shoemark, including mdoc-builder (ISO/IEC 18013-5 compliant Mobile Driving Licence tools).",
};

export default function ProjectsPage() {
  const otherProjects = [
    {
      title: "Transactional Serverless Broker",
      tech: ["Go", "AWS Lambda", "Kinesis", "DynamoDB", "Terraform"],
      description:
        "Designed and implemented a serverless message broker to ingest and validate transactional event streams for high-throughput enterprise applications. Built with Go for sub-millisecond execution times and cost efficiency.",
      impact:
        "Handled peak loads of 15,000 requests/sec, reduced cloud operational costs by 60% compared to ECS-based container alternatives, and guaranteed at-least-once message delivery protocols.",
    },
    {
      title: "Modular Rails CMS Core",
      tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Tailwind CSS"],
      description:
        "An open-source core module for Rails applications that automates server-side accessibility checks (WCAG 2.1 compliance) and provides dynamic responsive image pipelines with instant WebP conversions.",
      impact:
        "Deployed across multiple corporate marketing environments, decreasing initial load times by 35% and improving lighthouse accessibility scores to a perfect 100/100.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="max-w-3xl space-y-4">
        <span className="badge-pastel border-accent-info/20 text-accent-info bg-accent-info/5 px-3 py-1 text-[10px] tracking-widest uppercase">
          Engineering Showcase
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-50">
          Technical Projects & <br />
          <span className="from-accent-primary to-accent-info bg-gradient-to-r bg-clip-text text-transparent">
            Case Studies
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-medium text-slate-600 dark:text-zinc-400">
          Detailed breakdowns of systems I have designed, built, and optimized.
        </p>
      </section>

      {/* Case Study: mdoc-builder */}
      <section className="space-y-6">
        <div className="glass-card space-y-6 rounded-2xl border border-slate-200/60 p-6 md:p-8 dark:border-zinc-800/60">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-accent-primary/10 text-accent-primary border-accent-primary/10 rounded-md border px-2 py-0.5 text-[10px] font-bold">
                  DVLA Government Project
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-zinc-500">
                  ISO/IEC 18013-5
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-zinc-50">
                mdoc-builder (Mobile Driving Licence)
              </h2>
            </div>

            <a
              href="https://github.com/dvla/mdoc-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold transition-all hover:bg-slate-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {/* GitHub logo */}
              <svg className="fill-currentColor h-4 w-4" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 text-sm lg:grid-cols-3">
            <div className="space-y-4 leading-relaxed text-slate-600 lg:col-span-2 dark:text-zinc-400">
              <p>
                The `mdoc-builder` is an open-source library built in
                collaboration with key government departments. It provides the
                core cryptographic mechanisms to package, structure, and issue
                Mobile Driving Licences (mDL) that adhere strictly to the
                **ISO/IEC 18013-5** international standard.
              </p>
              <p>
                In digital identity, privacy is paramount. By utilizing CBOR
                (Concise Binary Object Representation) namespaces and COSE (CBOR
                Object Signing and Encryption) cryptography, this library allows
                driver attributes (e.g. name, date of birth, license categories)
                to be divided into individual digests. When presenting the
                driving licence, holders can choose to share only specific
                attributes (e.g. proving they are over 18 without disclosing
                their full name or exact birthdate). This is known as
                **Selective Disclosure**.
              </p>
              <h4 className="font-bold text-slate-800 dark:text-zinc-200">
                Key Engineering Contributions:
              </h4>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Designed compliance validation helpers to check structure
                  sizes for low-bandwidth NFC/Bluetooth LE exchanges.
                </li>
                <li>
                  Created helper interfaces to cryptographically bind driving
                  licences to device hardware-backed keys, preventing credential
                  clone cloning.
                </li>
                <li>
                  Developed automated test suites checking MSO signature
                  verifications against multiple root certificate structures.
                </li>
              </ul>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200/50 bg-slate-100/50 p-5 dark:border-zinc-800/50 dark:bg-zinc-900/50">
              <h3 className="text-sm font-bold tracking-wider text-slate-800 uppercase dark:text-zinc-200">
                Project Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Go",
                  "TypeScript",
                  "CBOR",
                  "COSE/RFC8152",
                  "ECDSA P-256",
                  "OIDC4VCI",
                  "Node.js",
                ].map((t) => (
                  <span
                    key={t}
                    className="border-accent-primary/20 text-accent-primary bg-accent-primary/5 rounded-md border px-2 py-1 text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="border-t border-slate-200 pt-3 dark:border-zinc-800">
                <span className="mb-1 block text-[11px] font-bold text-slate-500 dark:text-zinc-400">
                  SECURITY COMPLIANCE
                </span>
                <span className="text-xs text-slate-600 dark:text-zinc-400">
                  ISO/IEC 18013-5 Personal Identification — Mobile Driving
                  Licence (mDL) standard.
                </span>
              </div>
            </div>
          </div>

          {/* Embedded Flow Diagram */}
          <div className="border-t border-slate-200/50 pt-6 dark:border-zinc-800/50">
            <h3 className="font-display mb-4 text-lg font-bold text-slate-800 dark:text-zinc-200">
              How It Works: Interactive Flow
            </h3>
            <MdocFlow />
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/50 pb-3 dark:border-zinc-800/50">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-50">
            Other Systems I've Built
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
            Enterprise integrations and open source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {otherProjects.map((p, idx) => (
            <div
              key={idx}
              className="glass-card space-y-4 rounded-xl border border-slate-200/60 p-6 dark:border-zinc-800/60"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-accent-secondary/5 border-accent-secondary/20 text-accent-secondary rounded-md border px-2 py-0.5 text-[10px] font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-zinc-100">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                {p.description}
              </p>
              <div className="border-t border-slate-100 pt-3 dark:border-zinc-900">
                <span className="text-accent-primary mb-0.5 block text-[10px] font-bold tracking-wider uppercase">
                  Impact / Outcome
                </span>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  {p.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
