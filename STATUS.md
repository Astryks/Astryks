# Astryks — Status

_Last updated: 2026-10-06._

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

## Marketing roadmap

_Drafted 2026-10-06 · docs only, no code changed · full playbook kept in private research (off-repo)._

**Source:** private research plus the earlier Astryks growth-research draft. Only the operating logic that fits Astryks is kept; retail budgets, thresholds, platform settings and urgency tactics are not.

**Product truth wins over the research draft:** the public message is aimed at **adults who want to
learn art or music**. Under-18s supervised by a guardian are a secondary, consent-safe path (FAQ,
support, lifecycle) and never the hero message. No "for kids" framing, and no claims about finance,
investing, or game-dev lessons. The paid unit is a **household subscription**.

- Music promise: **"Follow along and create a song from scratch, no experience needed."**
- Art promise: **"Follow along and make a portrait from scratch, no experience needed."**

### Research status

- Private research (kept off-repo) is far enough along to start. Open research does not block Day-1 commercial-truth work.

### Day-1 actions (Sid)

1. Create the shared operating board with these registers: commercial truth, learner evidence,
   route/release, event map/QA, creative, permissions, experiments, channel scorecard, lifecycle,
   and capacity/incident.
2. Fill the commercial truth sheet: initial market, adult buyer, primary subject (**Art or Music, pick
   one**), promise, CTA, current plan as a reference only, max CAC, and capacity limit. This is Gate A.
3. Book the first 5 of 10–15 consented interviews with adult learners and open the evidence log.
4. Decide on analytics and consent. Privacy §9 currently promises **no third-party trackers**, so the
   policy must be updated before any GA4/Pixel/tag ships.
5. Choose the first 4 beliefs or questions for the primary subject and brief the first 4 of 12
   creative assets, with permissions planned before filming.

### Priorities

| P | Action | Owner | Status |
| --- | --- | --- | --- |
| P0 | Approve the audience statement (adults 18+; guardian-supervised under-18 is secondary) and one primary subject | Sid | Open |
| P0 | Page-change manifest for `/learn-music` or `/learn-art` (hero, proof, FAQs, one CTA, mobile QA) | Agent → eng | Ready to draft. Source exists in this repo, so the research draft's "blocked: no source" no longer applies |
| P0 | Event map plus consent spec (`subscription_started` as the only paid conversion) and the Privacy §9 update | Agent → Sid/legal → eng | Open. The policy update has to land before any tracker |
| P1 | 10–15 adult-learner interviews leading to ≤2 buyer hypotheses | Sid + agent | Open |
| P1 | Subject preview/offer page and a full mobile journey test (preview → subscribe → first lesson) | Eng | After Gate A |
| P1 | 12 creative briefs (4 pillars × 3 stages) with a permissions register | Content | After Gate A |
| P1 | Lifecycle flows: welcome, preview-incomplete, checkout-incomplete, activation, at-risk | Lifecycle | Needs an email provider and consent |
| P2 | Narrow adult-intent search test for the primary subject, then Meta only after Gate C | Growth | After Gate B |

### Hard gates

- **A. Offer:** market, adult buyer, subject, promise, CTA, proof, max CAC, and capacity are approved.
- **B. Conversion & safety:** the mobile/desktop journey passes, there is one primary paid event, lesson
  access is immediate, Privacy §9 is updated with consent live, and accessibility and rollback are
  checked.
- **C. Search:** there is a page baseline, 12 assets exist, the scorecard and spend cap are live, and
  activation/refund/capacity thresholds are written down.
- **D. Meta/TikTok:** the first paid route is judged on CAC **and** activation, there's enough fresh
  permissioned creative, and it has a separate budget.
- **E. Scale:** there is a positive base case, cohort data, a 3-case cash model, a loss limit, capacity,
  and a one-change test design.

### 12-week sequence (condensed)

| When | Focus | Exit |
| --- | --- | --- |
| Day 1–3 | Board, DRIs, commercial truth, offer cards | Gate A |
| Wk 1–2 | Interviews, brand/safety brief, scorecard backfill | ≤2 hypotheses, one named constraint |
| Wk 2–3 | Event map, privacy update, journey/checkout/a11y QA | Gate B |
| Wk 3–4 | Primary subject page (outcome, proof, FAQ, one CTA) | Baseline and first experiment |
| Wk 4–5 | 12 creative assets and lifecycle flows | Repeatable proof supply |
| Wk 5–6 | Organic: weekly project video, intent pages on existing hubs, partners, Pinterest pilot, UTMs | Qualified discovery without spend |
| Wk 7–8 | Capped adult-intent search test | Gate C |
| Wk 9–10 | Diagnose in order, fix one thing; Meta brief only if Gate C passes | Repair or continue |
| Wk 11–12 | Cohorts, 3-case model, one bounded scale test or repair; annual and 13-week plan | Gate E or one named constraint |

### Spend discipline and scope

- **Never copy retail course budgets or thresholds** (e.g. the $3.05 revenue-per-visit trigger, example
  daily budgets, budget-change %, 14-day windows). Every number comes from Astryks pricing, costs,
  and cohorts.
- **Treat it like free credits:** verify tracking, consent, and the privacy-policy update before any
  paid spend, even free ad credits. Spend caps equal the approved downside. A channel only "works" if
  it meets CAC **and** activation/refund/capacity guardrails, never on clicks or platform ROAS alone.
- **This PR is docs only.** No Stripe, credits, pricing, tracking, or page code is touched. Each of
  those changes ships as its own reviewed PR.

## Pending (outside git)

- None. Firebase redeploy triggers on push to `main`.
