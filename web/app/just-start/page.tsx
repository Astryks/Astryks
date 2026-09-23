import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd } from "@/components/HubPage";
import { ESSAY_HUB_LINKS, LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Just start — before you know the rules";
const DESCRIPTION =
  "The best thing you can do is start. Often better if you haven’t done it before — you don’t know your limitations yet. Make art or a song on Astryks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/just-start" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/just-start",
    siteName: "Astryks",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What does “just start” mean on Astryks?",
    a: "Don’t wait until you feel ready or know every rule. Begin a drawing, painting, or song — finish one small piece. Astryks offers art and music lessons for kids and families, plus a place to post work.",
  },
  {
    q: "Is Astryks a film school?",
    a: "No. Astryks is edtech for kids to learn real art and music skills. Film stories on this page are metaphors for creative courage — inspiration, not a filmmaking course.",
  },
  {
    q: "Why mention Orson Welles and Quentin Tarantino?",
    a: "As encouragement: beginners sometimes try things “experts” said couldn’t be done, and many artists start by loving and studying other people’s work before finding their own voice. Astryks is not affiliated with Welles, Tarantino, or their estates.",
  },
  {
    q: "Where do kids begin today?",
    a: "Sign up free at https://astryks.com/signup, or go to https://astryks.com/learn-art and https://astryks.com/learn-music.",
  },
];

export default function JustStartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <article className="pb-16">
        <div className="px-4 py-12 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Essay · Start</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.15]">
              Just start — before you know all the rules
            </h1>
            <p className="text-ink/60 max-w-lg mx-auto mb-8 md:text-lg">
              The best thing you can do is begin. Often it’s better if you haven’t done it before —
              you don’t know your limitations yet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup" className="btn-primary">
                Start on Astryks →
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

        <div className="px-4 md:px-10">
          <div className="max-w-2xl mx-auto space-y-5 text-ink/75 leading-relaxed">
            <p>
              Don’t wait until you’re “ready.” Make a sketch. Hit record on a song idea. Kids and
              families who finish one small thing learn faster than kids who wait for perfect
              conditions. That is the whole idea:{" "}
              <strong>just start</strong>.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink pt-4">
              Not knowing the rules can be an advantage
            </h2>
            <p>
              Filmmaker <strong>Orson Welles</strong>, talking about making{" "}
              <em>Citizen Kane</em> (and retelling the story in interviews including with Dick
              Cavett), described how the technical “bag of movies” can be learned quickly — roughly
              a day and a half if you ask someone who knows — and that it isn’t much harder than
              home movies once the mystery is gone. Cinematographer <strong>Gregg Toland</strong>{" "}
              wanted to work with Welles in part <em>because</em> Welles had never made a picture
              and didn’t know what “cannot be done.” Not knowing fake limits can free you to try.
            </p>
            <p className="text-sm text-ink/55 border border-ink/10 rounded-xl bg-white/70 px-4 py-3">
              Paraphrased from Welles’s own retellings (including the Dick Cavett Show interview)
              about <em>Citizen Kane</em> and working with Toland. Astryks is not affiliated with
              the Welles estate. We’re not a film school — this is encouragement to begin creative
              work without waiting for permission.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink pt-4">
              Study what you love — then make your own
            </h2>
            <p>
              <strong>Quentin Tarantino</strong> has long cited Sergio Leone’s{" "}
              <em>The Good, the Bad and the Ugly</em> (and spaghetti westerns) as formative
              inspiration. Loving and studying other people’s work is how many artists begin —
              then they find their own voice. That is influence and practice, not passing off
              someone else’s finished piece as yours to sell. Same spirit as{" "}
              <Link href="/everyone-should-make-art" className="link-accent">
                learning by copying masters
              </Link>{" "}
              (including traditions like The Met’s copyist programs).
            </p>

            <h2 className="font-display text-2xl font-bold text-ink pt-4">
              Make art. Make a song. Don’t wait.
            </h2>
            <p>
              On Astryks, kids learn real{" "}
              <Link href="/learn-art" className="link-accent">
                art
              </Link>{" "}
              and{" "}
              <Link href="/learn-music" className="link-accent">
                music
              </Link>{" "}
              skills and can post what they make. See also{" "}
              <Link href="/everyone-should-make-music" className="link-accent">
                everyone should make music
              </Link>{" "}
              and{" "}
              <Link href="/inspiration-can-strike-anywhere" className="link-accent">
                inspiration can strike anywhere
              </Link>
              . You don’t need to know every rule first. Start before you’re sure.
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
                Make art essay
              </Link>
              <Link href="/everyone-should-make-music" className="btn-secondary">
                Make music essay
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-sectionLavender px-4 md:px-10 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4">Related</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[
                ...ESSAY_HUB_LINKS.filter((l) => l.href !== "/just-start"),
                ...LIVE_HUB_LINKS.slice(0, 4),
              ].map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="link-accent">
                    {r.label}
                  </Link>
                </li>
              ))}
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
