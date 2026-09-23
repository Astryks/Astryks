import type { MetadataRoute } from "next";

// Served automatically at /sitemap.xml. Only the public, unauthenticated pages — the logged-in
// app screens require an account and shouldn't be indexed (see robots.ts).
// Bump this whenever one of the routes below meaningfully changes — a fixed date here (rather
// than computing "now" at build time on every deploy) avoids every URL looking freshly updated
// on every single rebuild, which search engines discount as a signal.
const LAST_MODIFIED = new Date("2026-09-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://astryks.com";
  // /prize-rules dropped — it now just redirects to / (Creative Prize retired, see functions/
  // index.js) and a defunct sweepstakes-rules page has no reason to stay indexed.
  const core = ["", "/login", "/signup", "/terms", "/privacy", "/support"];
  const liveHubs = [
    "/edtech",
    "/learn-art",
    "/learn-music",
    "/videos-for-kids",
    "/creative-learning-for-kids",
    "/art-and-music-for-kids",
  ];
  const comingSoonHubs = [
    "/investing-for-kids",
    "/finance-for-kids",
    "/how-to-invest-in-the-share-market",
    "/how-to-build-games",
    "/game-building-for-kids",
  ];
  const routes = [...core, ...liveHubs, ...comingSoonHubs];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : liveHubs.includes(route) ? 0.7 : 0.5,
  }));
}
