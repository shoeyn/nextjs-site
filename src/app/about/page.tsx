import Image from "next/image";
import Link from "next/link";
import profilePic from "@/images/self.webp";

export const metadata = {
  title: "About Me",
  description:
    "About Nathan Shoemark: Senior Software Engineer, father, and developer. Read about my career, engineering philosophy, and values.",
};

export default function AboutPage() {
  return (
    <div className="mt-2 space-y-12 md:mt-4">
      {/* Intro Hero Section */}
      <section className="max-w-3xl space-y-6">
        <span className="badge-pastel border-accent-secondary/20 text-accent-secondary bg-accent-secondary/5 px-3 py-1 text-[10px] tracking-widest uppercase">
          My Story & Values
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-50">
          Crafting Software, <br />
          <span className="from-accent-primary to-accent-secondary bg-linear-to-r bg-clip-text text-transparent">
            Leading with Purpose
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-medium text-slate-600 dark:text-zinc-400">
          I am a senior engineer who believes that software is as much about
          people, standards, and empathy as it is about clean code.
        </p>
      </section>

      {/* Grid: Bio and Core Values */}
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        {/* Narrative bio */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-600 md:text-base lg:col-span-2 dark:text-zinc-400">
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-zinc-100">
            Professional Narrative
          </h2>
          <p>
            My engineering journey began with a curiosity for systems
            integration. Over the past decade, that curiosity has grown into a
            career focused on architecting secure, high-performance platforms
            and modern API infrastructures.
          </p>
          <p>
            For twelve years (2012–2024), I worked at **Cyber Freakz**—initially
            as a System Administrator managing critical Windows/Linux server
            infrastructures and VPS environments, and progressing to a Lead Web
            Application Developer. In these roles, I maintained complete
            lifecycle responsibility (from initial business discovery to
            deployment and operations) for custom application suites, designing
            and building over 20 mission-critical applications. In late 2024, I
            transitioned to public service as a **Senior Software Engineer at
            the DVLA**. Collaborating closely with partner agencies (such as
            GDS), I've designed and built the core cryptography and security
            libraries (`mdoc-builder`) powering secure digital identity
            mechanisms for citizens.
          </p>
          <p>
            Currently, I specialize in Java-based systems—ranging from
            lightweight, zero-dependency utility packages to Spring Boot web
            applications. I remain active across multiple programming languages,
            regularly contributing to **Ruby on Rails, Go, and
            TypeScript/Next.js** codebases.
          </p>
        </div>

        {/* Core Principles card */}
        <div className="glass-card space-y-4 rounded-xl border border-slate-200/60 p-6 dark:border-zinc-800/60">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-zinc-100">
            Engineering Principles
          </h3>
          <ul className="space-y-3 text-xs text-slate-600 md:text-sm dark:text-zinc-400">
            <li className="flex gap-2">
              <span className="text-accent-primary font-bold">✓</span>
              <span>
                <strong>Quality Gates & Security:</strong> Enforcing checkstyle,
                SonarQube, and automated dependency upgrades (Renovate/Tenable)
                inside pipelines to guarantee secure delivery.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent-primary font-bold">✓</span>
              <span>
                <strong>Technical Judgement:</strong> Prioritizing
                minimal-dependency, clean libraries over bloated integrations,
                ensuring high readability and compliance.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent-primary font-bold">✓</span>
              <span>
                <strong>User & BA Alignment:</strong> Collaborating closely with
                Business Analysts and Product leads to map system designs
                against actual user behaviors.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Humanity & Family Section */}
      <section
        id="humanity"
        className="grid grid-cols-1 items-center gap-8 border-t border-slate-200/60 pt-8 md:grid-cols-5 dark:border-zinc-800/60"
      >
        {/* Family image */}
        <div className="md:col-span-2">
          <div className="group relative">
            {/* Glow effect on hover */}
            <div className="from-accent-primary to-accent-secondary absolute inset-0 rounded-2xl bg-linear-to-r opacity-25 blur-lg transition-opacity duration-500 group-hover:opacity-40" />
            {/* Explicit aspect-ratio container — required for fill-mode Image */}
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-zinc-800">
              <Image
                src={profilePic}
                alt="Nathan Shoemark"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Fatherhood Narrative */}
        <div className="space-y-4 md:col-span-3">
          <span className="badge-pastel border-accent-success/20 text-accent-success bg-accent-success/5 px-2 py-0.5 text-[9px] tracking-widest uppercase">
            Life Outside of Code
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-50">
            Fatherhood, Balance & Humanity
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-slate-600 md:text-base dark:text-zinc-400">
            <p>
              When I'm not writing Java APIs or aligning cryptographic
              envelopes, my time belongs to my family. As a husband, father to
              an active toddler, and owner of an equally energetic border
              collie, family life is a core pillar of who I am. I believe the
              values required to raise a family—patience, continuous learning,
              and thinking 10 years ahead—are the exact same traits that define
              senior engineering leadership.
            </p>
            <p>
              In squad leadership, I focus heavily on mentoring and fostering a
              strong growth mindset. A notable milestone was working closely
              with a junior developer on my team, coaching them through complex
              architectures and code reviews, and watching their technical
              confidence flourish. I helped guide them along their path, and
              they eventually progressed to a Senior Software Engineer who now
              continuously contributes key libraries back to the organisation.
            </p>
            <p>
              This philosophy of understanding extends to modern toolsets: I
              maintain a responsible balance with AI. I leverage AI agents for
              boilerplate and fast exploration, but advocate for complete,
              self-reliant technical comprehension of any code committed to
              production.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="mailto:n.shoemark@gmail.com"
              className="btn btn-outline btn-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
