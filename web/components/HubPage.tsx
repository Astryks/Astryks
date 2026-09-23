import Link from "next/link";

export type HubFaq = { q: string; a: string };
export type HubLink = { href: string; label: string };

type HubPageProps = {
  eyebrow: string;
  h1: string;
  lead: string;
  bullets: string[];
  faqs: HubFaq[];
  related: HubLink[];
  ctaLabel?: string;
  /** When true: coming-soon topic — CTA still goes to signup for live art/music today */
  comingSoon?: boolean;
  comingSoonNote?: string;
};

export function faqJsonLd(faqs: HubFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function HubPage({
  eyebrow,
  h1,
  lead,
  bullets,
  faqs,
  related,
  ctaLabel = "Create a free account →",
  comingSoon = false,
  comingSoonNote,
}: HubPageProps) {
  return (
    <div className="pb-16">
      <div className="px-4 py-12 md:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">{eyebrow}</p>
          {comingSoon && (
            <p className="inline-block mb-4 rounded-full bg-highlight/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
              Coming soon — not a live course yet
            </p>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.15]">
            {h1}
          </h1>
          <p className="text-ink/60 max-w-lg mx-auto mb-6 md:text-lg">{lead}</p>
          {comingSoon && comingSoonNote && (
            <p className="text-ink/70 max-w-lg mx-auto mb-8 text-sm leading-relaxed border border-ink/10 rounded-xl bg-white/70 px-4 py-3">
              {comingSoonNote}
            </p>
          )}
          <Link href="/signup" className="btn-primary inline-flex">
            {comingSoon ? "Learn art & music on Astryks today →" : ctaLabel}
          </Link>
          <p className="text-ink/40 text-xs mt-3">
            {comingSoon
              ? "Art and music lessons are live now · free to join and post · 10 min free preview"
              : "Free to join and post · 10 min free lesson preview · cancel anytime"}
          </p>
        </div>
      </div>

      <div className={`px-4 md:px-10 py-12 md:py-16 ${comingSoon ? "bg-sectionLavender" : "bg-sectionMint"}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            {comingSoon ? "What Astryks offers today" : "What Astryks is"}
          </h2>
          <p className="text-ink/70 mb-6 leading-relaxed">
            Astryks is edtech where kids learn <strong>real art and music</strong> skills from
            practicing professionals, post their own work, and grow together with other kids and
            families. Web app at{" "}
            <Link href="/" className="link-accent">
              astryks.com
            </Link>
            ; mobile apps share the same account.
            {comingSoon && (
              <>
                {" "}
                Investing, share-market, and game-building lessons are <strong>planned — not available to buy or watch yet</strong>.
              </>
            )}
          </p>
          <ul className="space-y-3 text-ink/70">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="text-brand font-bold flex-shrink-0">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/signup" className="btn-primary inline-flex">
              {comingSoon ? "Start with art & music →" : "Get started →"}
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="rounded-2xl bg-white shadow-sm divide-y divide-ink/10 overflow-hidden border border-ink/5">
            {faqs.map((f) => (
              <div key={f.q} className="px-5 py-4">
                <p className="font-display font-bold mb-1">{f.q}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-sectionSky px-4 md:px-10 py-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-xl font-bold mb-4">Explore more</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {related.map((r) => (
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
            <li>
              <Link href="/support" className="link-accent">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 md:px-10 text-center text-xs text-ink/40 pt-6 border-t border-ink/10 max-w-5xl mx-auto">
        <p className="mb-1">© 2026 Astryks. All rights reserved.</p>
        <p>
          <Link href="/privacy" className="hover:text-ink/70 hover:underline">
            Privacy
          </Link>
          {" · "}
          <Link href="/terms" className="hover:text-ink/70 hover:underline">
            Terms
          </Link>
          {" · "}
          <Link href="/support" className="hover:text-ink/70 hover:underline">
            Support
          </Link>
          {" · "}
          <Link href="/edtech" className="hover:text-ink/70 hover:underline">
            Edtech
          </Link>
          {" · "}
          <Link href="/learn-art" className="hover:text-ink/70 hover:underline">
            Learn art
          </Link>
          {" · "}
          <Link href="/learn-music" className="hover:text-ink/70 hover:underline">
            Learn music
          </Link>
        </p>
      </div>
    </div>
  );
}
