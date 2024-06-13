import { type Post } from '@/lib/posts';
import Link from 'next/link';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol>
      {posts.map(({ slug, title, date, categories }) => (
        <li key={slug}>
          <h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{' '}
            {new Date(date).toLocaleDateString()}{' '}
            <strong>Categories:</strong>{' '}
            {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
          </p>
        </li>
      ))}
    </ol>
  );
}