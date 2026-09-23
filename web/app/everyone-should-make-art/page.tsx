import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd } from "@/components/HubPage";
import { ESSAY_HUB_LINKS, LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Everyone should make art — at least one piece";
const DESCRIPTION =
  "Everybody should make art — at least one piece. It’s OK to copy masters to learn your own style. Try structured art learning on Astryks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/everyone-should-make-art" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/everyone-should-make-art",
    siteName: "Astryks",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Does everyone really need to make art?",
    a: "You don’t need to become a professional. Making at least one piece — a drawing, painting, or sketch — helps kids (and adults) practice looking, patience, and finishing something that is theirs.",
  },
  {
    q: "Is it OK for kids to copy other artists’ work?",
    a: "Yes, as a learning practice — studying and copying masters the way art students have for centuries. That is different from selling or claiming someone else’s finished work as your original for sale. Copy to learn; then make your own.",
  },
  {
    q: "What is The Met’s Copyist Program?",
    a: "The Metropolitan Museum of Art in New York has run a Copyist Program since 1872, where artists learn by copying works in The Met’s collection. Astryks is not affiliated with The Met — we share the link because copying to learn is a real, respected tradition.",
  },
  {
    q: "How does Astryks help?",
    a: "Astryks offers expert-led art lessons for kids and families, plus a place to post your own work. Start free at https://astryks.com/signup or explore https://astryks.com/learn-art.",
  },
];

export default function EveryoneShouldMakeArtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <article className="pb-16">
        <div className="px-4 py-12 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Essay · Art</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.15]">
              Everyone should make art — at least one piece
            </h1>
            <p className="text-ink/60 max-w-lg mx-auto mb-8 md:text-lg">
              Not a career pitch. Just an invitation: finish one drawing or painting that is yours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup" className="btn-primary">
                Start learning art on Astryks →
              </Link>
              <Link href="/learn-art" className="btn-secondary">
                Learn art hub
              </Link>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-10">
          <div className="max-w-2xl mx-auto space-y-5 text-ink/75 leading-relaxed">
            <p>
              Everybody should make art — at least one piece. Kids especially. You don’t need fancy
              materials or a “talent” label. You need a blank page, a little time, and permission to
              be a beginner.
            </p>
            <p>
              It’s OK — and often smart — to <strong>copy what others have done</strong> until you
              figure out your own style. Artists have always studied by looking closely and
              remaking what they admire. Copying as practice is how you train your eye and hand.
              Passing off someone else’s finished work as yours to sell is different — that’s not
              what we mean.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink pt-4">
              Museums still teach this way
            </h2>
            <p>
              The <strong>Metropolitan Museum of Art</strong> in New York has run a{" "}
              <a
                href="https://www.metmuseum.org/hubs/copyist-program"
                className="link-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copyist Program
              </a>{" "}
              since 1872 — artists learn by copying works in The Met’s collection. They also offer
              teen copyist / studio programs (ages and dates change; see The Met’s listings), for
              example{" "}
              <a
                href="https://engage.metmuseum.org/events/education/workshops-and-classes/teens/teen-studio-ages-15-18/fy25/teen-copyists-ages-15-18/"
                className="link-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teen Copyists (ages 15–18)
              </a>
              . Session details change over time — check{" "}
              <a
                href="https://www.metmuseum.org/learn/teens"
                className="link-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Met Teen Programs
              </a>{" "}
              for what’s current.
            </p>
            <p className="text-sm text-ink/55 border border-ink/10 rounded-xl bg-white/70 px-4 py-3">
              Astryks is <strong>not affiliated</strong> with The Metropolitan Museum of Art. We
              point to these programs because they show that learning by careful copying is a
              serious tradition. If you can’t get to New York, sketch at a local gallery or museum
              near you — same idea, closer to home.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink pt-4">Then make it yours</h2>
            <p>
              Copy a portrait you love. Recreate a still life. Then change one thing — colour,
              medium, subject — until the piece feels like you. Finish it. That finished piece
              matters more than a perfect one you never start.
            </p>
            <p>
              On{" "}
              <Link href="/learn-art" className="link-accent">
                Astryks
              </Link>
              , kids can learn real art skills from practicing professionals and{" "}
              <Link href="/signup" className="link-accent">
                post their own work
              </Link>{" "}
              when they’re ready. Structured lessons plus a place to share — without pretending
              inspiration only happens in a museum.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-10 py-12 md:py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6">Frequently asked questions</h2>
            <div className="rounded-2xl bg-white shadow-sm divide-y divide-ink/10 overflow-hidden border border-ink/5">
              {FAQS.map((f) => (
                <div key={f.q} className="px-5 py-4">
                  <p className="font-display font-bold mb-1">{f.q}</p>
                  <p className="text-sm text-ink/60 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup" className="btn-primary">
                Create a free account →
              </Link>
              <Link href="/everyone-should-make-music" className="btn-secondary">
                Everyone should make music
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-sectionSky px-4 md:px-10 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4">Keep going</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[...ESSAY_HUB_LINKS.filter((l) => l.href !== "/everyone-should-make-art"), ...LIVE_HUB_LINKS.slice(0, 4)].map(
                (r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="link-accent">
                      {r.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link href="/signup" className="link-accent">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
