import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/lib/posts";

export default function Home() {
  const { posts, total } = getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <>
      <Posts posts={posts} />
      <Pagination
        baseUrl="/blog/page"
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </>
  );
}
