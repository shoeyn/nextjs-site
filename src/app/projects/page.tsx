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
      title: "Cyber Freakz Enterprise Suite",
      tech: ["PHP", "JavaScript", "Node.js", "Electron", "PostgreSQL"],
      description:
        "Maintained complete end-to-end lifecycle ownership of cross-platform desktop suites and web applications for medium-sized business clients. Designed and built internal tools using Electron to automate business discovery workflows.",
      impact:
        "Successfully turned client business use cases into production-ready portals, automating internal document ingestion pipelines and cutting manual workflow processing delays by 40%.",
    },
  ];

  return (
    <div className="mt-2 space-y-12 md:mt-4">
      {/* Page Header */}
      <section className="max-w-3xl space-y-6">
        <span className="badge-pastel border-accent-info/20 text-accent-info bg-accent-info/5 px-3 py-1 text-[10px] tracking-widest uppercase">
          Engineering Showcase
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-50">
          Technical Projects & <br />
          <span className="from-accent-primary to-accent-info bg-linear-to-r bg-clip-text text-transparent">
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
                The `mdoc-builder` is an open-source Java library built in
                collaboration with GDS and key government departments. It
                provides the core cryptographic mechanisms to package, sign, and
                issue compliant Mobile Driving Licences (mDL) that adhere
                strictly to the **ISO/IEC 18013-5** international standard.
              </p>
              <p>
                Applying strong technical judgement to match both DVLA and GDS
                needs against a rapidly evolving ISO standard, I chose to design
                this library from scratch with minimal external dependencies.
                This avoided hacky integrations of incomplete third-party
                packages, producing a lightweight, secure, and easily extendable
                core. To ensure maintenance standards, I personally configured
                SonarQube, Checkstyle, and security vulnerability checks inside
                CI/CD deployment pipelines.
              </p>
              <p>
                In digital identity, privacy is paramount. Using CBOR (Concise
                Binary Object Representation) namespaces and COSE (CBOR Object
                Signing and Encryption) cryptography, this library allows driver
                attributes to be divided into individual digests, enabling
                **Selective Disclosure** (proving you are over 18 without
                disclosing your full name or exact birthdate).
              </p>
              <h4 className="font-bold text-slate-800 dark:text-zinc-200">
                Key Engineering Contributions:
              </h4>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Personally designed and developed the core mdoc-builder Java
                  library from scratch.
                </li>
                <li>
                  Created cryptographic signing interfaces to securely bind
                  driving credentials to mobile device hardware keys.
                </li>
                <li>
                  Integrated SonarQube, Checkstyle, and Tenable vulnerability
                  checks within CI/CD pipelines to guarantee code compliance.
                </li>
                <li>
                  Built local containerized Kubernetes replica environments
                  using Docker for simplified squad testing.
                </li>
              </ul>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200/50 bg-slate-100/50 p-5 dark:border-zinc-800/50 dark:bg-zinc-900/50">
              <h3 className="text-sm font-bold tracking-wider text-slate-800 uppercase dark:text-zinc-200">
                Project Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "OpenAPI",
                  "CBOR / COSE",
                  "ISO/IEC 18013-5",
                  "SonarQube / Checkstyle",
                  "Docker / K8s",
                  "Tenable / Renovate",
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

      {/* ISO/IEC 18013-5 Spec Deep Dive */}
      <section className="space-y-8 border-t border-slate-200/50 pt-12 dark:border-zinc-800/50">
        <div className="max-w-3xl space-y-4">
          <span className="badge-pastel border-accent-secondary/20 text-accent-secondary bg-accent-secondary/5 px-3 py-1 text-[10px] tracking-widest uppercase">
            Standards & Protocol Deep-Dive
          </span>
          <h2 className="font-display text-2xl leading-tight font-bold text-slate-900 sm:text-3xl dark:text-zinc-50">
            Inside the ISO/IEC 18013-5 Spec
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base dark:text-zinc-400">
            Mobile driving licences (mDLs) are not simply digital images or
            signed PDFs. They are highly structured, cryptographically
            verifiable data envelopes designed to protect user privacy and
            establish undeniable authenticity. Here is how the data structures
            inside `mdoc-builder` are composed.
          </p>
        </div>

        {/* Bento Grid layout for Spec Breakdown */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Document Structure (IssuerSigned vs DeviceSigned) */}
          <div className="glass-card flex flex-col justify-between rounded-xl border border-slate-200/60 p-6 lg:col-span-2 dark:border-zinc-800/60">
            <div className="space-y-3">
              <h3 className="font-display flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-zinc-100">
                <span className="text-accent-primary font-mono text-sm">
                  [01]
                </span>
                Dual Envelope Architecture
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
                An mdoc contains two distinct cryptographic envelopes that
                separate the Authority's claim signature from the Holder's
                device authentication.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
                <div className="space-y-1.5 rounded-lg border border-slate-200/40 bg-slate-100/50 p-4 dark:border-zinc-800/40 dark:bg-zinc-900/50">
                  <span className="text-accent-primary text-[10px] font-bold tracking-wider uppercase">
                    IssuerSigned
                  </span>
                  <p className="text-xs text-slate-600 dark:text-zinc-400">
                    Contains raw user claims (e.g. given name, portrait) grouped
                    by namespace. Each claim is encoded as an individual{" "}
                    <strong>IssuerSignedItem</strong> along with a salt. Hashes
                    of these items are stored in a signed Mobile Security Object
                    (MSO).
                  </p>
                </div>
                <div className="space-y-1.5 rounded-lg border border-slate-200/40 bg-slate-100/50 p-4 dark:border-zinc-800/40 dark:bg-zinc-900/50">
                  <span className="text-accent-secondary text-[10px] font-bold tracking-wider uppercase">
                    DeviceSigned
                  </span>
                  <p className="text-xs text-slate-600 dark:text-zinc-400">
                    Contains a dynamic signature generated on-device using a
                    private key locked in the hardware's Secure Enclave. This
                    proves that the person presenting the mDL is the actual
                    holder, preventing clone attacks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Entropy Salting & Anti-Correlation */}
          <div className="glass-card flex flex-col justify-between rounded-xl border border-slate-200/60 p-6 dark:border-zinc-800/60">
            <div className="space-y-3">
              <h3 className="font-display flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-zinc-100">
                <span className="text-accent-secondary font-mono text-sm">
                  [02]
                </span>
                Anti-Correlation
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                To guarantee user privacy, the spec enforces safeguards against
                correlation (tracking a user across multiple verifiers) and
                dictionary attacks:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400">
                <li className="flex gap-1.5">
                  <span className="text-accent-secondary font-bold">•</span>
                  <span>
                    <strong>16-Byte Random Salt:</strong> Every claim includes a
                    minimum 16-byte random salt. Without it, public fields
                    (e.g., given_name = "Joe") could be resolved by verifiers
                    running offline hash tables.
                  </span>
                </li>
                <li className="flex gap-1.5">
                  <span className="text-accent-secondary font-bold">•</span>
                  <span>
                    <strong>Digest ID Shuffling:</strong> Claims are assigned
                    unique `digestID` integers. In `mdoc-builder`, we generate
                    and randomly shuffle these IDs to eliminate any coding
                    sequence correlation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Standard Namespaces Table */}
          <div className="glass-card flex flex-col justify-between rounded-xl border border-slate-200/60 p-6 dark:border-zinc-800/60">
            <div className="space-y-3">
              <h3 className="font-display flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-zinc-100">
                <span className="text-accent-success font-mono text-sm">
                  [03]
                </span>
                Namespace Mapping
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Attributes are organized in namespaces to isolate standard data
                fields from regional or regional authority extensions:
              </p>
              <div className="space-y-3 pt-1">
                <div className="space-y-1">
                  <span className="text-accent-success bg-accent-success/5 border-accent-success/15 rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold">
                    org.iso.18013.5.1
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400">
                    Standard mDL attributes: given_name, family_name,
                    birth_date, portrait, issuing_authority, document_number,
                    un_distinguishing_sign.
                  </p>
                </div>
                <div className="space-y-1 border-t border-slate-100 pt-2 dark:border-zinc-900">
                  <span className="text-accent-info bg-accent-info/5 border-accent-info/15 rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold">
                    org.iso.18013.5.1.GB
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400">
                    British DVLA extensions: provisional_driving_privileges,
                    title, welsh_licence (bilingual flag).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Verification Lifecycle */}
          <div className="glass-card flex flex-col justify-between rounded-xl border border-slate-200/60 p-6 lg:col-span-2 dark:border-zinc-800/60">
            <div className="space-y-3">
              <h3 className="font-display flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-zinc-100">
                <span className="text-accent-info font-mono text-sm">[04]</span>
                Verification Loop (Selective Disclosure)
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
                The verification process requires no connection back to the
                issuing authority, protecting offline privacy:
              </p>
              <div className="grid grid-cols-1 gap-3 pt-1 text-[11px] sm:grid-cols-3">
                <div className="space-y-1 rounded-lg border border-slate-200/40 bg-slate-100/50 p-3 dark:border-zinc-800/40 dark:bg-zinc-900/50">
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    1. Selective Present
                  </span>
                  <p className="text-slate-500 dark:text-zinc-400">
                    The mobile wallet sends only the requested elements (e.g.,
                    portrait, age_over_18) and hides the rest.
                  </p>
                </div>
                <div className="space-y-1 rounded-lg border border-slate-200/40 bg-slate-100/50 p-3 dark:border-zinc-800/40 dark:bg-zinc-900/50">
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    2. Hash Matching
                  </span>
                  <p className="text-slate-500 dark:text-zinc-400">
                    The verifier hashes the received items. If they match the
                    digests stored in the MSO, data integrity is proven.
                  </p>
                </div>
                <div className="space-y-1 rounded-lg border border-slate-200/40 bg-slate-100/50 p-3 dark:border-zinc-800/40 dark:bg-zinc-900/50">
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    3. Authentication
                  </span>
                  <p className="text-slate-500 dark:text-zinc-400">
                    The verifier validates the Issuer's signature on the MSO,
                    and the Device's signature using the MSO's public key.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
