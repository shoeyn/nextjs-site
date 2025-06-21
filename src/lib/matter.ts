import matter from "gray-matter";

const typedMatter = <T = unknown>(markdown: string) => {
  const rawMatter = matter(markdown);

  return {
    ...rawMatter,
    data: rawMatter.data as T,
  };
};

export default typedMatter;
