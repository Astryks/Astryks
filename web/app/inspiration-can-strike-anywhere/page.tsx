import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd } from "@/components/HubPage";
import { ESSAY_HUB_LINKS, LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Inspiration can strike anywhere — give art and music a go";
const DESCRIPTION =
  "Inspiration can strike anywhere. Don’t wait for a perfect setup — try and create something. Learn art and music on Astryks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/inspiration-can-strike-anywhere" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/inspiration-can-strike-anywhere",
    siteName: "Astryks",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Where does inspiration come from?",
    a: "Anywhere — a walk, a song on the radio, a colour outside the window, a museum visit, a boring afternoon. You don’t need a perfect studio for a first sketch or a first song idea.",
  },
  {
    q: "What should kids do when inspiration hits?",
    a: "Capture it quickly: a quick sketch, a voice memo, a few notes. Then finish one small piece. Starting and finishing matter more than waiting for the “perfect” idea.",
  },
  {
    q: "How can Astryks help?",
    a: "Astryks gives kids structured art and music lessons plus a place to post work. Sign up free at https://astryks.com/signup.",
  },
];

export default function InspirationCanStrikeAnywherePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <article className="pb-16">
        <div className="px-4 py-12 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Essay · Creating</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.15]">
              Inspiration can strike anywhere
            </h1>
            <p className="text-ink/60 max-w-lg mx-auto mb-8 md:text-lg">
              Give art and music a go — try and create something. Your first piece or song matters more than a perfect setup.
            </p>
            <Link href="/signup" className="btn-primary inline-flex">
              Start on Astryks →
            </Link>
          </div>
        </div>

        <div className="px-4 md:px-10">
          <div className="max-w-2xl mx-auto space-y-5 text-ink/75 leading-relaxed">
            <p>
              Inspiration can strike anywhere — on the bus, in the kitchen, halfway through homework,
              walking the dog. Everyday moments are sparks. You don’t have to wait for a studio,
              new gear, or “enough time.” A phone photo to draw from, a hummed melody, five quiet
              minutes: that’s enough to begin.
            </p>
            <p>
              Don’t wait for perfect. The first piece of art and the first song teach more than a
              year of waiting. Finish something small. Then another.{" "}
              <Link href="/everyone-should-make-art" className="link-accent">
                Everyone should make art
              </Link>
              .{" "}
              <Link href="/everyone-should-make-music" className="link-accent">
                Everyone should make music
              </Link>
              . Give both a real go.
            </p>
            <p>
              When you’re ready for structure,{" "}
              <Link href="/learn-art" className="link-accent">
                learn art
              </Link>{" "}
              and{" "}
              <Link href="/learn-music" className="link-accent">
                learn music
              </Link>{" "}
              on Astryks — expert lessons for kids and families, and a community where you can post
              what you make.
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
              <Link href="/learn-art" className="btn-secondary">
                Learn art
              </Link>
              <Link href="/learn-music" className="btn-secondary">
                Learn music
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-sectionMint px-4 md:px-10 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4">Related</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[...ESSAY_HUB_LINKS.filter((l) => l.href !== "/inspiration-can-strike-anywhere"), ...LIVE_HUB_LINKS.slice(0, 4)].map(
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
