# Astryks — Marketing roadmap (Ecommerce Equation adaptation)

_Drafted: 2026-10-06 · Status: working draft, docs only · Summary lives in [`STATUS.md`](../STATUS.md#marketing-roadmap-ecommerce-equation)._

This is the full operating playbook behind the STATUS.md section. It adapts the Ecommerce Equation
(EE) Skool course, its weekly-session archive, and its community discussion, together with the
earlier Astryks growth-research draft, into an acquisition and retention system for a
**subscription learning/social app**. EE is a retail/e-commerce course: its *operating logic*
transfers; its retail budgets, thresholds, platform toggles, tax/shipping rules, and urgency
tactics do **not**.

---

## 0. Product truth — this overrides every other line in this document

Taken from `STATUS.md` (2026-09-28) and the live site. Where the original research draft
disagreed, this section wins.

| Topic | Rule |
| --- | --- |
| Live product | [astryks.com](https://astryks.com) — `web/` (Next.js) + `mobile/` (Expo), shared Firebase + Stripe. |
| What it is | Anyone can learn art & music; community posting; subscription learning/social app. |
| Who may use it | Users must be **18+**, or **under 18 accompanied and supervised by a parent/guardian who is 18+** (Terms §2, Privacy §8). |
| Primary public message | **Adults who want to learn art or music** — "anyone who wants to learn real life skills". |
| Secondary path | Guardians who supervise an under-18 learner. A consent-safe, secondary path (FAQ, support content, lifecycle), **never** the homepage/hero framing. |
| Forbidden framing | "For kids" / "for families" as the primary brand message — removed 2026-09-28 because it conflicted with the ToS. Do not restore it on pages, ads, SEO slugs, `llms.txt`, or creative. |
| Forbidden claims | No investing, share-market, finance, or game-building lessons — they don't exist. |
| Music promise | **"Follow along and create a song from scratch, no experience needed."** |
| Art promise | **"Follow along and make a portrait from scratch, no experience needed."** |
| Paid outcome | An active, paying **household subscription** (`subscription_started`), then activation (first lesson → first creation). |
| Tracking today | Privacy §9 says Astryks uses **no third-party analytics or advertising trackers** and will **update the policy first** before adding any (e.g. GA4, Meta Pixel). This is a hard dependency for paid media. |
| Competitions | The cash Creative Prize is **retired** (Hall of Fame has no cash/lottery exposure). Do not revive cash prizes/giveaways without separate legal review. |

**Language conventions used throughout:** "adult learner" (the person learning and usually the
payer), "household subscription" (the paid unit), "guardian" only where an under-18 learner is
involved. Where the research draft said "parent/child", read "adult learner"; parent interviews
and consent gates remain only where an under-18 learner or a learner-proof asset is involved.

---

## 1. Objective

Build an evidence-led acquisition and retention system that grows **retained, activated household
subscriptions within an approved CAC and contribution limit** — not page views, free accounts, or
platform-attributed ROAS. Inputs: EE classroom, weekly sessions, community; Astryks' own data;
adult-learner interviews.

Operating principles (apply to every task):

1. One directly responsible person (DRI), due date, evidence link, and pass/fail per task. "The team" is never an owner.
2. Record the baseline before changing anything.
3. Change one meaningful variable per measurement window.
4. `subscription_started` is the **sole** paid-media business conversion. Everything else is diagnostic.
5. Market to adults. Keep under-18 data out of marketing systems entirely. Any public learner proof needs recorded permission (guardian permission if the learner is under 18).
6. Stop immediately for a payment, access, privacy, safeguarding, compliance, or material tracking defect.
7. **Never copy EE retail budgets, thresholds, platform settings, urgency tactics, or tax/shipping rules.** Use Astryks-specific numbers from pricing, costs, baseline data, and capacity.
8. **Free-credits discipline:** treat every paid dollar (including any free ad credits) as real downside. Verify tracking, consent, and the privacy-policy update *before* any paid spend; spend caps equal the approved downside, not an aspirational budget.

---

## 2. Execution queue (ordered, owned, testable)

The research draft's "P0: blocked — no source" is **resolved**: the source is
[Astryks/Astryks](https://github.com/Astryks/Astryks) (`web/app/learn-art`, `web/app/learn-music`,
`web/app/HomeClient.tsx`, `web/app/signup`, Stripe via `web/functions/`).

| P | Action | Owner | Status / dependency | Acceptance check |
| --- | --- | --- | --- | --- |
| P0 | Approve the one-line audience statement: adult learners (18+) in the initial market; guardian-supervised under-18 path is secondary. | Founder | Product truth already fixes the age policy; market choice still open. | One approved sentence in the commercial truth sheet. |
| P0 | Pick **one** primary acquisition subject for the first test: Art **or** Music. | Founder | No mixed-subject first test. | One promise, preview, CTA, and measurement plan chosen. |
| P0 | Page-change manifest for the primary subject route (`/learn-music` or `/learn-art`): headline, subhead, section order, CTA, FAQs, proof, mobile QA. | Agent-ready → engineering | Source available; implement as a separate PR after approval. | Manifest maps 1:1 to a route and a testable hypothesis. |
| P0 | Analytics/consent spec: event map, consent behaviour, **Privacy §9 update** drafted before any tracker ships. | Agent-ready → founder/legal → engineering | Privacy policy currently promises no third-party trackers. | Test journey fires exactly one `subscription_started` and each diagnostic once; policy updated first. |
| P1 | 10–15 consented adult-learner interviews (plus a few guardians of supervised under-18 learners, if that segment exists). | Founder + agent analysis | Approved contact method and consent. | Evidence log yields ≤2 evidence-labelled buyer hypotheses. |
| P1 | Subject-specific preview/offer page and full mobile journey test. | Engineering + agent | Payment test account, privacy review. **No Stripe/pricing code changes in the docs PR.** | An adult can reach preview → subscribe → open first lesson without ambiguity. |
| P1 | First 12 creative briefs (4 pillars × 3 buyer stages) for the primary subject. | Content/teachers + agent | Permissions process for any learner proof. | Every asset has hook, proof, CTA, destination, consent state, measurement label. |
| P1 | Lifecycle flows: welcome, preview-incomplete, checkout-incomplete, activation, at-risk. | Lifecycle/product + agent | Email provider, consent/legal settings. | Each flow has trigger, exit, frequency cap, owner, consent basis, success metric. |
| P2 | Narrow Art/Music **search** tests; Meta only after Gate C. | Growth + agent | Gate B passed (tracking, policy, consent, spend cap). | Weekly review uses paid starts, first lesson, refund, retention — not clicks. |

---

## 3. Shared operating board (create on Day 1)

One workspace (sheet, Notion, or board). Create each register once and link every task to one.

| Register | Owner | Key fields | Complete when / decision enabled |
| --- | --- | --- | --- |
| **Commercial truth sheet** | Founder + finance | Market; adult buyer; learner age policy; first subject; promise; CTA; plan/price (read-only reference, not changed here); payment & delivery costs; refund & retention assumptions; max CAC; capacity limit; approval date. | One approved audience, offer, and downside limit. **No paid spend before approval.** |
| **Learner evidence log** | Founder / growth | Interview ID + consent; segment; trigger; job; alternative; objection; verbatim words; belief-changing proof; channel; confidence; resulting action. | 10–15 interviews → ≤2 buyer hypotheses. |
| **Route & release register** | Engineering | Route; learner job; baseline; proposed change; copy/media; mobile state; a11y; events; dependencies; QA owner; rollback; release time; review date. | Any page change can be built, tested, released, and reverted without interpretation. |
| **Event map & QA record** | Engineering / growth | Event; trigger; properties; destination system; primary/secondary; consent behaviour; test account; expected vs observed count; verified date. | Every event fires once, carries no unnecessary personal/under-18 data, splits by subject/source. |
| **Creative register** | Content lead | Asset ID; subject; buyer belief; pillar/stage; hook; teacher/project; format; destination; CTA; consent status; launch; spend/reach; preview; paid start; activation; decision. | Creative refreshed from outcomes, not taste or "fatigue". |
| **Content & permissions register** | Content + safeguarding owner | Asset/person; creator/learner (and guardian, if under 18) agreement; placements; paid-use permission; expiry/revocation; storage; approver. | Nothing with a learner's image, name, voice, work, or testimonial is published without permission. |
| **Experiment register** | Growth / product | Hypothesis; one variable; route/audience; primary metric; guardrails; baseline; stop threshold; dates; decision rule; result; next step. | Every test ends keep / iterate / stop / inconclusive. |
| **Channel scorecard** | Growth + finance | Window; channel; subject; spend; qualified sessions; preview; checkout; paid starts; CAC; first lesson; first creation; refund/cancel; contribution; capacity; action. | Weekly keep/fix/stop/scale across channels on comparable quality. |
| **Lifecycle map** | Lifecycle | Segment; consent basis; trigger; purpose; sequence; exit; frequency cap; destination; success & harm metrics. | Messages are useful, permissioned, and drive activation. |
| **Capacity & incident log** | Product / founder | Area (support, moderation, content, payments/access); safe limit; load; warning sign; escalation; workaround; resolved date. | Growth never outruns support, moderation, or safeguarding. |
| **Launch brief & scorecard** | Founder / content | See §9 Phase 7.5. | Every release is reproducible and comparable. |

---

## 4. Targets — set before work starts (no universal benchmarks)

For each: value, window, data source, owner, action if missed.

| Target | How to set it | Used for |
| --- | --- | --- |
| **90-day result** | Founder picks new paid households, activated households, and contribution/cash result the team can support safely. Work back by subject/channel; label assumptions. | The outcome, not activity volume. |
| **Maximum CAC** | Conservative revenue per new household over the payback period, minus payment fees, refunds/chargebacks, variable delivery/support/content cost, and contribution reserve. Finance approves. | Hard ceiling for every acquisition test. |
| **Activation threshold** | First lesson, then first finished creation; floor from historical cohorts or a labelled hypothesis. | Stops cheap-but-inactive starts counting as success. |
| **Refund/cancellation guardrail** | Current cohort data, or a conservative temporary value revisited after the first cohort matures. | Stops poor-fit subscriptions and support load. |
| **Capacity guardrail** | Safe weekly limit for support, moderation, content delivery, payment/access reliability. | Caps launch spend and timing. |
| **Decision window** | From real purchase delay, traffic volume, and time-to-activation — not a course duration. | Prevents premature daily optimisation. |

**Test rule:** a channel/creative is "working" only when it meets the approved CAC **and** its
households meet activation, refund/cancellation, contribution, and capacity guardrails. Cheap
clicks, views, sign-ups, or platform ROAS alone never make a winner. Insufficient data = "inconclusive".

---

## 5. 12-week implementation sequence

Weeks are an order, not permission to skip a gate. If a dependency slips, hold the next row.

| When | DRI | Implement | Deliverable | Outcome / gate |
| --- | --- | --- | --- | --- |
| **Day 1** | Founder | Create the board (§3); name DRIs (founder, engineering, growth, content, lifecycle, finance, safeguarding); list access gaps (analytics, payment-test, email, consent). | Registers exist; P0 queue dated. | Next owner/action visible. No live site or ad changes yet. |
| **Days 1–3** | Founder + finance | Phase 0 / 0.5: market, adult buyer, age policy wording, primary subject, promise, CTA, plan (reference), proof, objections, real risk reversal, unit economics, CAC & capacity limits. | Approved truth sheet; Art + Music offer cards, one marked **primary**. | **Gate A.** |
| **Weeks 1–2** | Founder / growth | Phase 0.75 interviews (activated, preview-only, checkout-abandoner, alternative-user adults); brand/safety brief; Phase 0.9 scorecard backfill. | Evidence log; ≤2 hypotheses; brand kit; first scorecard. | Offer language grounded in learner evidence; one named constraint. |
| **Weeks 2–3** | Engineering + growth | Phase 1, 2.4, 2.5: event map, privacy-policy update, one primary conversion, full journey test, route briefs, integration register, mobile checkout & a11y. Fix blocking payment/access/tracking first. | Event map with test results; release register; checkout/a11y log; rollback plan. | **Gate B.** |
| **Weeks 3–4** | Product / design / content | Phase 2 + 2.6 for the primary subject route: outcome, finished result, teacher proof, preview, price/terms, FAQs (incl. guardian-supervision FAQ), one CTA, mobile-first. | Release-ready brief; approved copy/media/permissions; QA; baseline; first experiment record. | Visitor can state outcome, suitability, price, next step quickly. Second subject stays a separate route. |
| **Weeks 4–5** | Content + lifecycle | Phase 3 + start 6.5: 12 labelled assets (4 pillars × 3 stages); permissions; welcome, preview-incomplete, checkout-incomplete, activation flows. | Creative register (12 ready); permissions register; lifecycle map + test sends. | Repeatable proof supply; every paid household routed to first lesson/creation. |
| **Weeks 5–6** | Content / founder / engineering | Phase 4, 4.5, 4.6: one project-led weekly asset; durable intent pages (build on existing hubs/essays); teacher/partner outreach; referral-after-activation design; 6-week organic pilot; technical SEO/UTM QA. | Content calendar; search pages; partner log; organic scorecard; UTM QA. | Qualified discovery without paid spend. |
| **Weeks 7–8** | Growth + finance | Phase 5: narrow adult-intent **search** for the primary subject, only after Gate B. Matching intent → exact subject page → spend cap → scorecard. Daily safety check; judge only at decision date. | Search brief; account QA; cap approval; live scorecard; dated decision. | **Gate C** before any Meta. |
| **Weeks 9–10** | Growth / product / content | Phase 2.7 diagnosis in order (tracking → payment/access → routing → query quality → creative → checkout). One improvement only. Phase 5.5 only if Gate C passed. | Incident/experiment record; before/after; updated creative register; optional Meta brief. | Clear repair-or-continue decision. |
| **Weeks 11–12** | Founder / growth / finance / product | Phase 5.75 + 6: cohorts, capacity, contribution, downside; at most one bounded scale test (Gate E) or repair the constraint; Phase 7 annual + 13-week plan. | Cohort table; 3-case model; scale or repair plan; six-week priority; 13-week cash/capacity forecast. | Controlled increase on a proven route **or** one evidence-backed constraint to fix. Both valid. |

---

## 6. Hard gates

| Gate | Pass only when all are true | If it fails |
| --- | --- | --- |
| **A. Offer readiness** | Market, adult buyer, age-policy wording, primary subject, promise, CTA, price/terms (as-is), proof, max CAC, capacity guardrail, owner approved. | Interviews/offer work. No ads; no combined Art+Music message. |
| **B. Conversion & safety readiness** | Journey passes on mobile + desktop; one primary paid event; payment and immediate lesson access work; **Privacy §9 updated and consent behaviour live before any tracker/pixel**; a11y, cancellation/refund info, rollback checked. | Fix the blocking route/event/access/policy issue before any traffic. |
| **C. Search learning readiness** | Primary subject page has a baseline; 12 testable assets exist; scorecard and spend cap live; adult-only targeting and current platform settings checked; activation/refund/capacity thresholds written. | Continue organic/content/offer work; no paid Search. |
| **D. Meta/TikTok readiness** | First paid route evaluated on CAC **and** activation; consented warm audiences governed; enough fresh permissioned creative; separate test budget. | Improve the first route. Don't use a new platform to hide weak economics. |
| **E. Scale readiness** | Measured positive base case; activation/retention cohorts; 3-case cash/contribution model; support/moderation/content capacity; pre-approved loss limit; fixed reporting definition; one-change test design. | Repair the named constraint; never increase spend without a bounded downside. |
| **F. New market / release** | Legal/operational review or launch brief, local terms/support, permissions, capacity, spend cap, separate cohort reporting approved. | Stay in the current market/date. |

---

## 7. Weekly operating rhythm

| Cadence | Owner | Do | Output |
| --- | --- | --- | --- |
| Daily, 10–15 min | Growth + ops | Scorecard entry; spend cap, payment, access, consent, support/safeguarding warnings, tracking health. | Dated safe / investigate / stop note. |
| Weekly, 45 min | Founder + DRIs | Funnel and cohorts by subject/source; constraint; experiments; creative; refunds; capacity; cash; learner feedback. Choose **one**: scale, fix, remove bottleneck, or hold. | One decision record (evidence, owner, due, proof metric). |
| Weekly, 30 min | Content + growth | Compare creative *concepts* by hook, preview, paid starts, activation; pick next four assets from observed beliefs/questions. | Updated calendar; retire/iterate/keep. |
| Fortnightly | Lifecycle + product | List growth, deliverability, unsubscribes/complaints, flow exits, activation, feedback. | One lifecycle hypothesis or "hold". |
| Monthly | Founder + finance | Fixed/variable/marketing cost audit; renewals; unit economics; legal changes; capacity; channel contribution. | Updated CAC/guardrails; 13-week cash forecast; expense actions. |
| Every 6 weeks | Founder + team | Re-evaluate binding constraint; ≤3 actions; explicit "not doing" list. | New six-week plan in the calendar. |

### Running any single experiment or campaign

1. Copy the experiment template; write the learner problem in one sentence.
2. Hypothesis: "For [adult audience] on [route], changing [one variable] will improve [primary metric] because [mechanism], without worsening [guardrails]."
3. Record the before-state (dates, source mix, sessions, funnel counts, offer, known changes).
4. Set CAC, activation/refund/capacity guardrails, max spend, decision date, stop condition — before publishing.
5. QA the full journey: tagged URL → page/CTA → mobile → consent → events → payment → confirmation → lesson access → current platform settings.
6. Run without unrelated changes; log necessary exceptions.
7. On the review date classify keep/expand, iterate one variable, stop, or inconclusive — citing the scorecard, not a platform screenshot.

---

## 8. Funnel and event map (Phase 1 reference)

Funnel: visit → preview started → preview completed → account → checkout → **paid household
subscription** → first lesson → first creation posted → renewal.

| Event | Role | Notes |
| --- | --- | --- |
| `landing_view` | diagnostic | subject, variant, UTM source/medium/campaign |
| `preview_start`, `preview_10min_complete` | diagnostic | per subject |
| `signup_complete` | diagnostic | no age/DOB or under-18 data in marketing systems |
| `checkout_start` | diagnostic | plan type only |
| `subscription_started` | **primary** (only paid-media conversion) | server-side/first-party from Stripe webhook path; dedupe |
| `lesson_started`, `lesson_completed` | activation | product analytics only |
| `first_creation_posted` | activation | posting is optional; never required |
| `subscription_renewed`, `subscription_cancelled` | retention | cohort reporting |

Properties: subject, landing variant, source/medium/campaign, plan type, country where lawful.
Implementation is a **separate engineering PR** after the Privacy §9 update; this docs PR changes no
Stripe, credits, pricing, or tracking code.

---

## 9. Phases 0–7 — key points

### Phase 0 — Commercial truth (founder)
- Primary buyer = adult learner (18+) who pays for a household subscription; define market(s). Guardian-supervised under-18 learners are a secondary segment covered by FAQ/support, not targeting.
- One primary subject for the first test; the other stays a separate route.
- One-line promise + evidence + CTA per subject (Music/Art promises in §0).
- Paid outcome = active paying household subscription.
- Unit-economics sheet: price (current plans as reference only), payment fees, content/support cost, retention, refunds, max CAC.
- **Done when** each subject has one buyer, outcome, proof point, CTA; max CAC derives from retained revenue.

### Phase 0.5 — Offer construction (founder/product)
- Offer card per subject: desired outcome, problem, status shift (how it feels to finish a first song/portrait), specific promise, proof (teacher, preview, real work, learner feedback), risk reversal (free preview, clear cancellation, transparent refund terms), friction removal (one CTA, simple signup, clear billing, immediate access).
- Objection workshop with on-page answers: experience needed, devices/tools, time, quality of instruction, price, cancellation, whether posting is public/optional, privacy, and "Can a teenager use this?" → guardian-supervision answer matching Terms §2.
- Scarcity only if true (e.g. a finite live session); never on the ongoing subscription.

### Phase 0.75 — Evidence over personas (founder/growth)
- 10–15 short adult-learner interviews across activated, preview-only, checkout-abandoner, and alternative-user groups. Consent, verbatim capture. Interview guardians only where a supervised under-18 learner is involved; never interview minors for marketing without approved guardian consent.
- Questions: trigger; creative goal; past attempts; alternative; time/context; decision-maker; concerns (price, tools, time, quality, privacy); phrase that made Astryks feel relevant; what would make them recommend it.
- ≤2 hero-customer hypotheses (job, outcome, objections, alternative, language, proof, channel, exclusion), labelled unvalidated until supported.
- Brand brief + guideline kit: one promise, three proof types, approved claims, voice, visual/teacher conventions, a11y, safety/consent boundaries, **banned framing list** ("for kids", finance/investing/game-dev).
- Restricted internal AI brand workspace only after the brief is approved; no personal data, recordings, or private feedback uploaded; named human verifies claims before publishing.

### Phase 0.9 — Daily profit & constraint routine (founder/finance/growth)
- Daily scorecard: revenue (agreed accounting treatment), refunds/chargebacks, new & active paid households, ad spend by channel, payment fees, creator/affiliate costs, support/content costs, fixed costs allocated consistently. Backfill 1–2 months; decide on rolling 7-day views.
- Leading quality signals alongside profit: subject, source, preview completion, checkout→paid, first lesson, first creation, early cancellation.
- Weekly name the constraint — **Throughput** (too few qualified visitors), **Efficiency** (conversion/CAC/price/refund/renewal economics), **Bandwidth** (team/product can't produce, support, moderate safely) — and pick one response.
- Monthly fixed / variable / marketing expense audit with owner and retain/renegotiate/remove decision.
- Repair order when several are weak: marketing efficiency & measurement → variable costs → only then profitable volume to dilute fixed cost.

### Phase 1 — Instrument the funnel (engineering)
- See §8. **Prerequisite:** Privacy §9 update + consent behaviour. One primary conversion, no duplicates; weekly funnel dashboard by subject/source; full test-account journey.

### Phase 2 — Subject conversion pages (product/design/content)
- Build on existing `/learn-art` and `/learn-music` (currently "Learn art for anyone…" / "Learn music for anyone…"). Hero: concrete first-project promise, finished result, teacher identity, beginner reassurance, free-preview CTA, price/cancel reassurance.
- Short result video under the hero (finished song/portrait in the first seconds) → 3-step "watch → follow along → make/share" → proof (teacher, real learner work with permission, learner comments) → sales FAQs (experience, devices, optional posting, preview contents, cancellation/refund, what's included, guardian supervision for under-18s) → one CTA (`Watch the free Art preview` / `Create your first song free`).
- Mobile is the reference layout. Paid/search traffic never lands on a generic mixed page by default.

### Phase 2.4 — Change control (engineering)
- Living build brief per changed route; integration register (cost, value, performance/privacy/a11y, data shared, consent basis, removal path, owner); staging validation; one coherent change per release with rollback and review date.
- Project browse: simple Art/Music entry points and outcome groups before any complex filters.

### Phase 2.5 — Checkout & accessibility (engineering)
- Mobile-first test of current plans: selection → account → payment → confirmation → immediate lesson access. Repeat price, cadence, cancellation, refund before payment. Keyboard, focus, headings, alt text, contrast, readable errors. Dated log. **Read-only review of Stripe flow in this phase; changes go through their own PR.**

### Phase 2.6 — Experiment backlog (growth/product)
Ordered: generic hero → concrete first project; static hero vs finished-result video; teacher proof vs learner proof; `Watch the free preview` vs `Create your first song free`; price/refund reassurance beside CTA vs lower; community proof vs generic features. One hypothesis at a time; primary = paid subscription; keep losers in the log.

### Phase 2.7 — Diagnose before redesigning (growth/product)
- Rolling baseline per subject and step. Incident record for any material decline.
- Check order: tracking duplication → payment/access errors → recent site/redirect/consent changes → landing routing → source mix → page speed → behaviour evidence → offer/page/creative.
- UTM governance on every link Astryks controls; preserve parameters through redirects.
- Don't chase zero "unknown" traffic; investigate sudden or poor-quality spikes.
- Behaviour-analysis tools only with consent/privacy approval (and policy update), masked fields, acquisition/checkout pages only.

### Phase 3 — Content engine (content/teachers)
- 12 project-led assets per primary subject before scaling ads, using EE's **12 Conversations**: four pillars × three stages (aware / considering / ready).
  - **Share education:** one beginner insight (how a beat becomes a song; face proportions).
  - **Show proof:** real first-project result, teacher demo, permissioned learner work.
  - **Fears & desires:** real adult-learner concerns ("I have no talent", "I'll get stuck", "I don't have time") answered with the actual product experience.
  - **Speak opinion:** defensible teacher/founder view (finishing a small project beats endless tutorials; "just start" — ties to existing essays).
- Formats: result → surprising step → CTA; teacher fixes a beginner obstacle → result → CTA; learner story → creation → CTA. Shoot vertical/square/horizontal from one session.
- Refresh from evidence weekly (hook hold, preview, paid starts, first lesson), not fatigue guesses.

### Phase 4 — Organic discovery (founder/content)
- One project-led video per subject weekly where adult learners search for creative hobbies.
- Durable search pages using accurate, **adult/general** language — e.g. "learn to draw portraits online", "beginner drawing lessons", "how to make a song from scratch", "GarageBand lessons for beginners", "learn music production for beginners". **Never** "…for kids" slugs. Build on the existing hubs (`/learn-art`, `/learn-music`, `/art-and-music`, `/creative-learning`, `/videos`) and essays rather than creating thin duplicates.
- Teacher and project pages with previews, materials lists, one next step.
- Partner list: artists, musicians, adult-learning/hobby newsletters, maker/creative communities, podcasts.
- Referral loop only after activation works: share a finished creation / invitation; simple ethical reward.
- 6-week organic Pinterest pilot per live project page (outcome pin, how-to pin, materials pin → exact page with UTM); keep topics that produce previews/paid starts.
- Earned-proof pipeline: 3 useful story pitches/month to adult-audience outlets; reuse coverage only with rights and fact-check.

### Phase 4.5 — Build the audience before asking for the sale (growth)
- Two periods per launch: 4–8 weeks of audience-building (qualified preview viewers, email leads, engaged viewers), then conversion.
- Defined, consented retargeting pools with windows and exclusions (exclude paid households from acquisition).
- One lead asset that proves the product (free first project) and leads straight into the subject preview.
- Collaboration order: complementary adult-audience brands/newsletters → credible artists/musicians/educators who can demo a real first project → creative communities (written guidelines).
- Partner brief: audience, outcome, landing page, disclosure, tracking link, success metric (paid starts + activation, not views).
- Competitions only with legal review, rules, adult-only entry, data notice, relevant prize — and noting the cash prize was retired.
- TOF video only after preview + tracking funnel work.

### Phase 4.6 — Durable search discovery (content/engineering)
- Intent map before publishing: query, stage, subject, page, proof, CTA, "can we honestly satisfy it?".
- Small high-intent set: Art offer, Music offer, first-song project, beginner portrait project, materials/device guide, FAQ, teacher pages.
- On-site checklist: unique title, one H1, meta description, internal links, alt text, captions/transcripts, fast media, canonical (already fixed per-page metadata on 2026-09-28 — keep it that way).
- Technical: sitemap, indexability, redirects, no accidental noindex, honest structured data (no fabricated ratings/course schema), Search Console + Bing (already verified; IndexNow live).
- AI search (`llms.txt` exists): keep pages factual, specific, teacher-authored; monitor referrals, don't promise chatbot rankings.

### Phase 5 — Paid search (growth) — after Gate B
- Three campaigns: Brand, Art intent, Music intent (start with the primary subject only).
- Tight ad groups → matching page: portrait/drawing, painting, song-making/GarageBand, singing.
- Ad formula: outcome → beginner reassurance → expert proof → free-preview CTA.
- Weekly search-term review; negatives for jobs, free downloads, degrees/certifications, unrelated topics, and kids/children terms (to stay consistent with brand positioning).
- No Performance Max / broad video until paid-subscription conversion is measured and one subject/message has proven demand.

### Phase 5.5 — Meta (growth) — after Gate C/D
- Adults only; no under-18 data; consented first-party audiences only; paid households excluded by default. Audience library with name, source, rule, duration, consent basis.
- Test budget derived from max CAC × paid starts needed to learn; if unaffordable, fix conversion/organic first.
- One acquisition campaign → one subject page. Warm campaign only once pools are large enough, delivering proof not repeats.
- Broad adult delivery + a few defensible interests; lookalikes only once enough activated households exist.
- Standard naming (subject, belief, pillar, hook, format, destination, date); one saved reporting preset swapping retail metrics for paid subscription, cost per subscription, refund/cancel, first lesson/creation.
- Three-horizon review (month vs prior; MTD/week/days vs plan) → stance: defensive / neutral / offensive. New accounts stay neutral.
- Controlled reallocation; bounded, logged budget changes; confirm current Meta rules rather than copying course percentages. Spend limits set in-account equal to approved exposure.
- Exclusion windows (EE's 14/30-day examples) are hypotheses, not rules. No cost-cap/high-budget structures at launch. Paused creative library for staging, if the current platform supports it.

### Phase 5.6 — TikTok (later)
- Teacher/founder-led organic discovery first. Paid only after Gate D, optimised to paid subscription; retail events (view content, add to cart) are diagnostics only. Spark/creator formats only with written agreements. Same creative register as Meta.

### Phase 5.75 — Bounded scale challenge (founder/growth/finance) — Gate E
- Six green-light checks adapted from EE: unit economics & cash forecast, traffic mix, timing, account setup, creative capacity, pre-approved loss tolerance — plus product capacity (content, support, moderation, payments/access).
- Base / planned / downside models; written stop threshold. **Never** EE's example budgets or "burn the spend".
- One dated, capped test; one scaling mechanism at a time.
- Verdict: inside CAC? did households activate? did the model stay inside the downside? If failed, diagnose delivery/measurement → creative/message match → offer/checkout → capacity; repair, retest once, then consider a new angle/channel.

### Phase 6 — Activation & retention (product/community)
- First lesson → finished creation fast. Supportive reminders after preview, signup, first lesson, incomplete project. Celebrate first creation; posting optional with clear visibility controls (Hall of Fame is the existing recognition mechanic). Weekly cohort table: source → paid start → first lesson → first creation → renewal. Expand only where retained subscribers justify it.

### Phase 6.5 — Lifecycle communication (lifecycle/product)
- Contact policy: marketing goes to adult account holders only; no promotional messages to under-18 learners; explicit consent with stored source/time; easy unsubscribe.
- One subject-matched signup form after the preview shows value; truthful benefit (first-project guide, materials checklist).
- Five flows: **Welcome** (what you get, free first project, posting/privacy choices); **Preview incomplete** (one reminder + different proof); **Checkout incomplete** (price, plan, cancellation, device, first-result answers — no fake urgency); **Activation** (first lesson → first creation → celebrate; the key flow); **At-risk** (only once data finds the trigger; help before save offers).
- Segments: prospect by subject; preview-complete not paid; paid; activated; inactive; highly engaged. Fortnightly newsletter to start. SMS/WhatsApp later, explicit opt-in only. Judge form/incentive tests on paid/activated households.

### Phase 7 — Planned year + one six-week priority (founder)
- Annual target on retained subscription revenue and contribution; work back to households, paid starts, churn, CAC, content capacity, budget.
- Rolling 13-week cash forecast reforecast weekly.
- Marketing calendar on genuine moments (new projects/courses, teacher collaborations, New Year "learn a skill" intent, holiday creative projects, real live events). No sale just to rescue a weak week.
- One six-week plan at a time: constraint, one leading + one lagging metric, ≤3 actions, owner, paused distractions.
- Founder time (EE Productivity Boost): 15-min weekly planning block, 25/45-min single-task sprints, batched messages, three-question interruption screen (what's the problem in one sentence / am I the right person / is it needed now → deny, delegate, defer), short recapped meetings, two-week time audit.

### Phase 7.25 — Second market (gate F)
- One country at a time with demand evidence, price/currency, current legal/tax/consumer/privacy/payment/cancellation/ad-policy advice, support and access checks, separate cohort reporting, adult-only capped test. Never broaden to "worldwide" without passing.

### Phase 7.5 — Launches as a repeatable system
- Event worksheet: paid-start and contribution targets, offer, authentic mid-event reason, transparent terms, timing/market, proof, conservative + stretch target, spend by channel, capacity cover.
- Only substantial projects/teacher collaborations/pathways/live sessions get a launch.
- Five-day pre-launch: D5 reveal outcome + optional waitlist; D4 teacher/behind the scenes; D3 beginner step + answer one concern; D2 concrete proof; D1 when/where + next step.
- Runbook rehearsed with a test account; calm daily review during the event; phase-planned creative (anticipation, opening, middle, close) using only truthful reasons to act now; scorecard within five working days comparing launch vs normal cohorts.

---

## 10. Transferable EE lessons → Astryks

| EE collection | Transferable principle | Astryks adaptation | Do **not** transfer |
| --- | --- | --- | --- |
| Ecommerce Equation (core) | Daily smoothed P&L; diagnose throughput / efficiency / bandwidth before scaling. | Daily subscription scorecard + weekly constraint (Phase 0.9). | Retail MER/FCR/VCR thresholds. |
| Equation Evaluation | Diagnose fixed vs variable vs marketing cost; repair marketing efficiency → variable → volume. | Monthly expense audit; repair order. | Retail benchmark values. |
| Strategy Suite | Pre-planned year, rolling cash forecast, six-week single-constraint plan, full-year calendar. | Phase 7. | Stock-cover/demand snapshot (→ capacity view instead). |
| High Conversion Website | Offer page = landing page; answer why/problem/compare/when/proof; one CTA; mobile; a11y; A/B one change at a time; living dev brief; app governance; conversion-drop investigation; UTM governance. | Phases 2–2.7. | $3.05 revenue-per-visit rebuild trigger; Shopify-specific settings. |
| Irresistible Offer | Sharpen promise → stack belief → real scarcity only → reverse risk → make yes easy. | Offer cards, objection FAQ, transparent cancellation (Phase 0.5). | Manufactured urgency. |
| Performance Creative Uplift | Creative-first; hero customer; 12 Conversations (4 pillars × 3 stages). | Phase 3 creative system. | — |
| Brand Bootcamp | Brand Key → avatars → guidelines → pillars → comms; AI only after the brief. | Brand brief, banned-framing list, restricted AI workspace. | Uploading customer data to AI tools. |
| SEO Bootcamp | Intent-led, multi-platform search; on-site checklist; technical SEO; AI search as discipline. | Phase 4.6, building on existing hubs/`llms.txt`/IndexNow. | Thin keyword pages; mass AI content. |
| Audience Growth Engine | Fill MOF/BOF before the conversion event. | Phase 4.5 two-period launches. | Serial-entrant giveaways. |
| Customer Nurture Playbook | Consented list, welcome/abandon/post-purchase flows, deliverability, form tests. | Phase 6.5 five flows. | Spin-to-win; SMS before email works. |
| $100M Meta Ad Framework / Meta Refresh | Audience library; naming matrix; saved column preset; three-horizon review + stance; controlled reallocation; spend caps. | Phase 5.5. | Course budget-change %, live toggles without verification. |
| Scale Challenge | Green-light checks; 3-case model; failure tree; batch creative testing; warm ≠ cold proof; exclusion windows. | Phase 5.75. | Example budgets; 14-day window by default; "burn the spend". |
| 7 Figure Sale Strategy / Promotional Rhythm | Event worksheet; anticipation phase; phase-planned creative; calm daily review; cross-event scorecard; product-drop lever. | Phase 7.5 launches. | Discount mechanics, liquidation, FOMO hooks. |
| TikTok Bootcamp / Jumpstart | Readiness first; objective vs measurement; diagnose before changing. | Phase 5.6 later test. | Add-to-cart/catalogue optimisation; budgets. |
| Pinterest Bootcamp | Organic + paid Pinterest system (captionless). | Conservative 6-week organic pilot. | Unexposed tactics. |
| Productivity Boost | Protect founder deep work; interruption screen; 6-week gameplan. | Phase 7 founder rhythm. | — |
| International Expansion | New market as an investment system with separate reporting. | Gate F / Phase 7.25. | Tax, shipping, Shopify/Meta configs. |
| Hot Seat Sessions | Content quality + volume, workflows, PR for proof, differentiated value before price changes, remove bottlenecks before growth. | Earned-proof pipeline; capacity log. | Capital raises, retail mechanics. |
| Google Ads Onramp / community | One governed primary conversion; consent-attribution gaps; feed/offer clarity as targeting input; advanced bidding later. | Phase 1 + 5. | PMax / target-ROAS at launch. |

Evidence standard: lessons whose players expose no captions/outcomes are logged as
**captionless/metadata-only** and not treated as reviewed word-for-word; no tactics are inferred
from unexposed spoken content.

---

## 11. Research status and open Skool gaps

**Reviewed (lesson pages opened, text-backed outcomes captured where exposed):** High Conversion
Website; Irresistible Offer; Audience Growth Engine; Customer Nurture Playbook; Performance Creative
Uplift; SEO Bootcamp (all 8); Brand Bootcamp (all 8); $100M Meta Ad Framework; Ecommerce Equation
core; Strategy Suite; Promotional Rhythm; Meta Ads Refresh System (all 11); Scale Challenge (all
29); Equation Evaluation (all 9); TikTok Ad Jumpstart (all 16); TikTok Bootcamp (all 19);
Pinterest Bootcamp (all 4, captionless); Productivity Boost (all 12); Roadshow 2026 (2,
captionless); Hot Seat Sessions (all 22). Google Ads Onramp outcomes (Shopify→Google, keyword
research, PMax build) and the current Google community page reviewed. Live Astryks homepage and
Art/Music pages audited (pre-2026-09-28 framing; re-audit against current copy).

**Still open:**

- [ ] 7 Figure Sale Strategy — later archived sale-event sections, Meta campaign-layout, case-study/jam archives.
- [ ] International Expansion — 2025 archive and long case study.
- [ ] Private EU-members course (catalogued only).
- [ ] Every remaining accessible core lesson page and resource (less-direct collections).
- [ ] Weekly-session archive — each entry's practical takeaways.
- [ ] Community feed (~12,879 posts / 430 pages at last check; Google category 169 posts) — themes, questions, wins.
- [ ] Merge the classroom inventory from `/workspace/reports/ecommerce-equation-classroom-inventory.md` (not present as of 2026-10-06) into this section.
- [ ] Re-audit live `/learn-art`, `/learn-music`, homepage against this plan (copy changed 2026-09-28).

Open research must not delay the no-regret foundations (Day-1 board, Gate A, interviews, event map).
New findings go through the same commercial, consent, measurement, and gate filters.

---

## 12. Dependencies and non-goals

- **This document changes no code.** No Stripe, credits, pricing, analytics, or page changes ship in the docs PR; each follows as its own reviewed PR.
- Any tracker/pixel requires the Privacy §9 update first.
- Any community, referral, testimonial, competition, or ad activity involving under-18 learners needs privacy, consent, moderation, and guardian-permission review.
- Never restore "for kids/families" primary framing or claim finance/investing/game-dev lessons.
