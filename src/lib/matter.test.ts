import { describe, it, expect } from "vitest";
import typedMatter from "./matter";

describe("typedMatter", () => {
  it("should parse markdown content and return typed frontmatter data", () => {
    interface TestData {
      title: string;
      tags: string[];
    }

    const markdown = `---
title: Test Title
tags: [one, two]
---
# Content Header`;

    const result = typedMatter<TestData>(markdown);

    expect(result.data).toEqual({
      title: "Test Title",
      tags: ["one", "two"],
    });
    expect(result.content.trim()).toBe("# Content Header");
  });
});
