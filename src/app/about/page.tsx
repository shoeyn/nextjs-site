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
          <span className="from-accent-primary to-accent-secondary bg-gradient-to-r bg-clip-text text-transparent">
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
            My engineering journey began with a curiosity for how systems
            communicate. Over the past decade, that curiosity has grown into a
            career focused on architecting robust distributed platforms,
            high-security services, and modern API infrastructures.
          </p>
          <p>
            Throughout my career, I've worked across diverse industries, from
            staging high-scale financial platforms to my current role at the
            **DVLA (Driver and Vehicle Licensing Agency)**. Working in public
            service, I've had the unique opportunity to build technology that
            impacts millions of citizens daily. My focus has been on mobile
            security standards—specifically working with partner agencies to
            build the core libraries (`mdoc-builder`) powering secure digital
            identity mechanisms.
          </p>
          <p>
            I specialize in serverless, event-driven backends, and full-stack
            development, with active competencies in **Ruby on Rails, Go, Java,
            and TypeScript**. I believe in selecting the right tool for the job,
            rather than adhering dogmatically to a single framework.
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
                <strong>Security by Design:</strong> Especially critical in
                government applications. Cryptographic integrity and privacy
                must be foundational, not retrofitted.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent-primary font-bold">✓</span>
              <span>
                <strong>Design Simplicity:</strong> Senior engineering is about
                removing complexity, not introducing it. Simple code is
                readable, testable, and maintainable.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent-primary font-bold">✓</span>
              <span>
                <strong>Mentorship & Culture:</strong> Building a healthy
                engineering culture is just as important as writing software. I
                prioritize mentoring junior colleagues.
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
        <div className="relative flex justify-center md:col-span-2">
          <div className="group relative max-w-xs md:max-w-none">
            {/* Glow effect on hover in dark mode */}
            <div className="from-accent-primary to-accent-secondary absolute inset-0 rounded-2xl bg-gradient-to-r opacity-25 blur-lg transition-opacity duration-500 group-hover:opacity-40" />
            <Image
              src={profilePic}
              alt="Nathan Shoemark and child"
              className="relative z-10 aspect-5/4 w-full rounded-2xl border border-slate-200 object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.01] dark:border-zinc-800"
              priority
            />
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
              When I'm not tracing API endpoints or aligning cryptographic
              digests, my time belongs to my family. As a husband and father,
              parenting is a core pillar of who I am.
            </p>
            <p>
              Parenthood has had a profound impact on my approach to engineering
              leadership. Explaining complex tech concepts to a child is the
              ultimate test of understanding, a skill that translates directly
              to distilling technical architecture to non-technical business
              leaders.
            </p>
            <p>
              Parenthood requires patience, continuous learning, and thinking 10
              years ahead rather than just for tomorrow. I bring these same
              qualities to work every day: designing stable long-term software
              architecture, supporting teams, and writing systems that stand the
              test of time.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="mailto:n.shoemark@gmail.com"
              className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold transition-all hover:bg-slate-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
