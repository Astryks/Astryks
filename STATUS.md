# Astryks — Status

_Last updated: 2026-09-28._

**Live:** [astryks.com](https://astryks.com) — Firebase App Hosting `apphosting:astryks-web`, project `astryks-5f31c`
**Repo:** [Astryks/Astryks](https://github.com/Astryks/Astryks) · default branch `main`

## 2026-09-28 — removed "kids" framing, fixed per-page metadata

A prior push (2026-09-23, PRs #2–#11) added genuinely useful SEO infrastructure — Google/Bing
site verification, IndexNow, `llms.txt`, a sitemap, and a set of organic "hub" pages — but wrote
nearly all of it framed around Astryks being an edtech product **for kids and families**, and
added several speculative "coming soon" pages for subjects Astryks doesn't teach (investing,
finance, game-building). That directly conflicted with Astryks' own Terms of Service and Privacy
Policy, which require users to be 18+. Reconciled as follows:

- **Removed all "for kids" / "families" framing** from every page, the shared `HubPage`
  component, `layout.tsx`'s FAQ JSON-LD, `llms.txt`/`llms-full.txt`, and this README — reworded
  to "anyone" / "anyone who wants to learn real life skills", matching the homepage's own tagline.
- **Removed 5 off-topic "coming soon" pages** (`/investing-for-kids`, `/finance-for-kids`,
  `/how-to-invest-in-the-share-market`, `/how-to-build-games`, `/game-building-for-kids`) —
  these promoted subjects with no roadmap commitment, purely to capture unrelated search terms.
- **Renamed the remaining "-for-kids" hub routes** to drop the suffix now that the framing is
  general: `/videos-for-kids` → `/videos`, `/creative-learning-for-kids` → `/creative-learning`,
  `/art-and-music-for-kids` → `/art-and-music`. `/edtech`, `/learn-art`, `/learn-music` kept their
  URLs (already generic) with kids-only copy reworded.
- **Updated the age policy**: Terms §2 and Privacy §8 now allow use by anyone 18+, or by someone
  under 18 together with, and supervised by, a parent/guardian who is 18+ (previously stated flatly
  "not directed at, and not intended for use by, anyone under 18").
- **Fixed the same client-component metadata bug this session already found**: `/`, `/login`,
  `/signup`, `/support`, `/terms`, `/privacy` were still all client components sharing one
  generic title — split each into a server-component `page.tsx` (metadata + canonical) wrapping
  the existing UI (renamed to e.g. `HomeClient.tsx`), no behavior change.
- Kept: Google/Bing verification, IndexNow key, sitemap/robots infrastructure, the four essay
  pages (`/everyone-should-make-art`, `/everyone-should-make-music`,
  `/inspiration-can-strike-anywhere`, `/just-start`) with their factual external citations
  (Met Copyist Program, GarageBand trademark disclaimer, Welles/Tarantino) intact.

Verified with `next build` and a production `next start` — all pages build, FAQ accordions and
hub pages render correctly, no remaining "kids"/"family" references anywhere in `web/`.

## Product truth

- Anyone can learn art & music; community posting; subscription learning/social app (`web/` + `mobile/`).
- Users must be 18+, or under 18 accompanied by a parent/guardian who is 18+.
- No claims that investing, share-market, finance, or game-dev lessons exist — they don't.

## Pending (outside git)

- None. Firebase redeploy triggers on push to `main`.
