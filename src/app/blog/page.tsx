import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Nathan Shoemark's engineering and personal development blog. Exploring React, Next.js, Ruby on Rails, and software architecture.",
};

export default function BlogIndexPage() {
  const posts = getSortedPostsData();

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <span className="badge-pastel border-accent-primary/20 text-accent-primary bg-accent-primary/5 px-3 py-1 text-[10px] tracking-widest uppercase">
          Developer Blog
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-50">
          Articles & Insights
        </h1>
        <p className="text-lg font-medium text-slate-600 dark:text-zinc-400">
          Sharing my learnings, technical reviews, and engineering experiences.
        </p>
      </section>

      {/* Posts List */}
      <section className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-zinc-400">
            No posts found. Check back later!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass-card flex flex-col justify-between gap-4 rounded-xl border border-slate-200/60 p-6 transition-all duration-300 md:flex-row md:items-center dark:border-zinc-800/60"
              >
                <div className="flex-1 space-y-3">
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

                  <h2 className="font-display hover:text-accent-primary dark:hover:text-accent-primary text-xl font-bold text-slate-950 transition-colors dark:text-zinc-50">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent-primary hover:text-accent-secondary inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                >
                  Read Article
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
