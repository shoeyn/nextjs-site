import { Bento } from "@/components/bento";
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
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const post = await getPostData(params.slug);

  return (
    <Bento>
      <div
        className="prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <Link href="/" className="button">
        Back to Home
      </Link>
    </Bento>
  );
}
