import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Nathan Shoemark's engineering and personal development blog. Exploring React, Next.js, Ruby on Rails, and software architecture.",
};

// Helper to provide a clean subtitle/teaser depending on categories/title
function getPostTeaser(title: string, categories: string[]) {
  const catString = categories.join(", ").toLowerCase();
  if (catString.includes("react") || catString.includes("next")) {
    return "Exploring modern frontend features, App Router static builds, and optimization workflows for production.";
  }
  if (catString.includes("rails") || catString.includes("ruby")) {
    return "A technical dive into MVC patterns, Active Record database optimization, and high-velocity development pipelines.";
  }
  return "Thoughts, architectural patterns, and lessons learned from my engineering and personal development journey.";
}

export default function BlogIndexPage() {
  const posts = getSortedPostsData();

  return (
    <div className="mt-2 w-full space-y-12 md:mt-4">
      {/* Header matching other pages */}
      <section className="max-w-3xl space-y-6">
        <span className="badge-pastel border-accent-primary/20 text-accent-primary bg-accent-primary/5 px-3 py-1 text-[10px] tracking-widest uppercase">
          Developer Blog
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-50">
          Articles & <br />
          <span className="from-accent-primary to-accent-secondary bg-gradient-to-r bg-clip-text text-transparent">
            Insights
          </span>
        </h1>
        <p className="text-lg font-medium text-slate-600 dark:text-zinc-400">
          Sharing architectural strategies, technical reviews, and engineering
          experiences.
        </p>
      </section>

      {/* Posts Bento Grid */}
      <section className="w-full">
        {posts.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-zinc-400">
            No posts found. Check back later!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <article
                key={post.slug}
                className={`glass-card flex min-h-[300px] flex-col justify-between rounded-2xl border border-slate-200/60 p-6 transition-all duration-300 hover:scale-[1.02] md:p-8 dark:border-zinc-800/60 ${
                  idx === 0
                    ? "from-accent-primary/5 via-accent-secondary/5 bg-linear-to-br to-transparent md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-slate-300 select-none dark:text-zinc-700">
                      •
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          className="bg-accent-secondary/5 border-accent-secondary/15 text-accent-secondary rounded-md border px-2 py-0.5 text-[10px] font-bold"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-display hover:text-accent-primary dark:hover:text-accent-primary text-xl leading-snug font-bold text-slate-950 transition-colors sm:text-2xl dark:text-zinc-50">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Teaser */}
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                    {getPostTeaser(post.title, post.categories)}
                  </p>
                </div>

                {/* Read Link bottom-aligned */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-200/50 pt-6 dark:border-zinc-800/50">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Technical Review
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-accent-primary hover:text-accent-secondary inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                  >
                    Read Post
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
