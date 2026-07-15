import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const post = await getPostData(params.slug);

  return {
    title: post.title,
    description: `Read Nathan Shoemark's thoughts on ${post.title}`,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const post = await getPostData(params.slug);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="hover:text-accent-primary dark:hover:text-accent-primary group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors dark:text-zinc-400"
        >
          <svg
            className="h-4 w-4 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Articles
        </Link>
      </div>

      {/* Post container */}
      <article className="glass-card space-y-6 rounded-2xl border border-slate-200/60 p-6 md:p-10 dark:border-zinc-800/60">
        {/* Article header info */}
        <div className="space-y-4 border-b border-slate-200/50 pb-6 dark:border-zinc-800/50">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-slate-500 dark:text-zinc-400">
              Published:{" "}
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
                  className="bg-accent-secondary/5 border-accent-secondary/15 text-accent-secondary rounded-md border px-2.5 py-0.5 text-xs font-semibold"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-zinc-50">
            {post.title}
          </h1>
        </div>

        {/* Article content */}
        <div
          className="prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800 prose-pre:text-zinc-300 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
