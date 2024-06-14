import { Bento } from "@/components/bento";
import { getPostData, getSortedPostsData } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  return (
    <Bento>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </Bento>
  );
}