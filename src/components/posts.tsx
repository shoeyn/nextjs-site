import { type Post } from "@/lib/posts";
import Link from "next/link";
import { Bento } from "./bento";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
      {posts.map(({ slug, title, date, categories }) => (
        <Bento key={slug}>
          <h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong> {new Date(date).toLocaleDateString()}{" "}
            <strong>Categories:</strong>{" "}
            {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
          </p>
        </Bento>
      ))}
    </div>
  );
}
