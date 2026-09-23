import type { MetadataRoute } from "next";

const disallow = ["/admin", "/home", "/learn", "/messages", "/me", "/prizes", "/post", "/user"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      // Explicit allow for common AI crawlers (same public paths)
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "anthropic-ai", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
    ],
    sitemap: "https://astryks.com/sitemap.xml",
  };
}
