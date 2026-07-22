import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "fs";
import { getSortedPostsData, getPostData, getPaginatedPosts } from "./posts";

vi.mock("fs", async () => {
  const actual = await vi.importActual<typeof import("fs")>("fs");
  const mockReaddirSync = vi.fn();
  const mockReadFileSync = vi.fn();
  const mockReadFile = vi.fn();

  const mockFs = {
    ...actual,
    readdirSync: mockReaddirSync,
    readFileSync: mockReadFileSync,
    promises: {
      ...actual.promises,
      readFile: mockReadFile,
    },
  };

  return {
    ...mockFs,
    default: mockFs,
  };
});

describe("posts lib", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe("getSortedPostsData", () => {
    it("should return sorted posts by date", () => {
      const mockFiles = ["2023-01-01_post-one.md", "2023-01-02_post-two.md"];
      const mockContents: Record<string, string> = {
        "2023-01-01_post-one.md": `---
title: Post One
date: '2023-01-01'
categories: [tech]
---
Content one`,
        "2023-01-02_post-two.md": `---
title: Post Two
date: '2023-01-02'
categories: [lifestyle]
---
Content two`,
      };

      vi.mocked(fs.readdirSync).mockReturnValue(mockFiles as any);
      vi.mocked(fs.readFileSync).mockImplementation((path) => {
        const fileName = (path as string).split("/").pop() || "";
        return mockContents[fileName];
      });

      const posts = getSortedPostsData();

      expect(posts).toHaveLength(2);
      // Sorted descending by date
      expect(posts[0].slug).toBe("2023-01-02/post-two");
      expect(posts[0].title).toBe("Post Two");
      expect(posts[1].slug).toBe("2023-01-01/post-one");
      expect(posts[1].title).toBe("Post One");
    });
  });

  describe("getPostData", () => {
    it("should return processed post data with html content", async () => {
      const fileContent = `---
title: Specific Post
date: '2023-05-05'
categories: [news]
---
# Hello World
This is markdown.`;

      vi.mocked(fs.promises.readFile).mockResolvedValue(fileContent);

      const postData = await getPostData(["2023-05-05", "specific-post"]);

      expect(postData).toEqual({
        id: ["2023-05-05", "specific-post"],
        title: "Specific Post",
        date: "2023-05-05",
        categories: ["news"],
        contentHtml: expect.stringContaining("<h1>Specific Post</h1>"),
      });
      expect(postData.contentHtml).toContain("<h1>Hello World</h1>");
    });
  });

  describe("getPaginatedPosts", () => {
    it("should return sliced posts according to pagination params", () => {
      const mockFiles = [
        "2023-01-01_post-one.md",
        "2023-01-02_post-two.md",
        "2023-01-03_post-three.md",
      ];
      const mockContents: Record<string, string> = {
        "2023-01-01_post-one.md": `---
title: Post One
date: '2023-01-01'
categories: []
---`,
        "2023-01-02_post-two.md": `---
title: Post Two
date: '2023-01-02'
categories: []
---`,
        "2023-01-03_post-three.md": `---
title: Post Three
date: '2023-01-03'
categories: []
---`,
      };

      vi.mocked(fs.readdirSync).mockReturnValue(mockFiles as any);
      vi.mocked(fs.readFileSync).mockImplementation((path) => {
        const fileName = (path as string).split("/").pop() || "";
        return mockContents[fileName];
      });

      // Page 1, limit 2
      const result = getPaginatedPosts({ page: 1, limit: 2 });
      expect(result.posts).toHaveLength(2);
      expect(result.total).toBe(3);
      expect(result.posts[0].slug).toBe("2023-01-03/post-three");
      expect(result.posts[1].slug).toBe("2023-01-02/post-two");

      // Page 2, limit 2
      const result2 = getPaginatedPosts({ page: 2, limit: 2 });
      expect(result2.posts).toHaveLength(1);
      expect(result2.posts[0].slug).toBe("2023-01-01/post-one");
    });
  });
});
