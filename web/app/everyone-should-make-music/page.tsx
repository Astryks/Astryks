import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd } from "@/components/HubPage";
import { ESSAY_HUB_LINKS, LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Everyone should make music — try making a song";
const DESCRIPTION =
  "Everyone should make music — everyone should try making a song. Start free with Apple’s GarageBand; learn music skills on Astryks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/everyone-should-make-music" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/everyone-should-make-music",
    siteName: "Astryks",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Do I need instruments to start making music?",
    a: "Not necessarily. Many kids start with a laptop or iPad and free software. A microphone helps for singing, but you can begin with loops, keys on screen, and curiosity.",
  },
  {
    q: "What is GarageBand, and does Astryks own it?",
    a: "GarageBand is Apple’s music-creation app — free on Mac and iOS. Astryks does not own GarageBand. GarageBand is a trademark of Apple Inc. Astryks teaches music skills and has lessons that can include creating a song from scratch using tools like GarageBand.",
  },
  {
    q: "Why should everyone try making a song?",
    a: "Finishing one song — even a short one — teaches structure, listening, and finishing. You don’t need to release an album. One track you made yourself is enough to start.",
  },
  {
    q: "How does Astryks fit in?",
    a: "Astryks offers expert-led music lessons for kids and families, including practical song-making, plus a place to post work. Sign up at https://astryks.com/signup or see https://astryks.com/learn-music.",
  },
];

export default function EveryoneShouldMakeMusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <article className="pb-16">
        <div className="px-4 py-12 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Essay · Music</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.15]">
              Everyone should make music — try making a song
            </h1>
            <p className="text-ink/60 max-w-lg mx-auto mb-8 md:text-lg">
              You don’t need a studio. You need one idea, a little time, and permission to sound like a beginner.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup" className="btn-primary">
                Start learning music on Astryks →
              </Link>
              <Link href="/learn-music" className="btn-secondary">
                Learn music hub
              </Link>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-10">
          <div className="max-w-2xl mx-auto space-y-5 text-ink/75 leading-relaxed">
            <p>
              Everyone should make music. Everyone should try making a song — not for fame, just to
              finish something that came from you. Kids especially benefit from hearing their own
              ideas turn into sound.
            </p>
            <p>
              It’s free to start on <strong>Apple’s GarageBand</strong> (free on Mac and iOS).
              Astryks does <strong>not</strong> own GarageBand; GarageBand is a trademark of Apple
              Inc. We mention it because it’s a practical, beginner-friendly way to open a project
              and press record — drums, keys, vocals, loops — without buying a full studio.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink pt-4">One song is enough</h2>
            <p>
              Start small: a four-bar loop, a hummed melody, a simple beat. Layer one idea at a
              time. Learn by listening to songs you love and recreating parts — then change them
              until they feel like yours. The goal isn’t perfection on day one; it’s finishing a
              first track.
            </p>
            <p>
              On{" "}
              <Link href="/learn-music" className="link-accent">
                Astryks
              </Link>
              , kids learn real music skills from practicing professionals — including creating a
              song from scratch (GarageBand-friendly masterclass style) and singing basics — then
              can{" "}
              <Link href="/signup" className="link-accent">
                post what they make
              </Link>{" "}
              if they want feedback from a kids-and-families community.
            </p>
            <p className="text-sm text-ink/55 border border-ink/10 rounded-xl bg-white/70 px-4 py-3">
              Astryks is not affiliated with Apple. GarageBand® is a trademark of Apple Inc. Use
              whatever tools you have — GarageBand, another DAW, or a phone voice memo — and give
              making a song a real try.
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
              <Link href="/everyone-should-make-art" className="btn-secondary">
                Everyone should make art
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-sectionRose px-4 md:px-10 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4">Keep going</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[...ESSAY_HUB_LINKS.filter((l) => l.href !== "/everyone-should-make-music"), ...LIVE_HUB_LINKS.slice(0, 4)].map(
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
