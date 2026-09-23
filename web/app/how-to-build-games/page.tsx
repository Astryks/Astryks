import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS, COMING_SOON_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "How to build games — coming soon on Astryks";
const DESCRIPTION =
  "Game-building lessons for kids are coming soon on Astryks — not available yet. Meanwhile kids learn art and music and post their work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/how-to-build-games" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/how-to-build-games",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Can kids learn how to build games on Astryks today?",
    a: "No. Game-building / game-development lessons are coming soon and are not live. You cannot buy or watch game-dev courses on Astryks yet.",
  },
  {
    q: "What creative skills are available now?",
    a: "Art and music — expert lesson videos, trailers, and a community where kids post what they make.",
  },
  {
    q: "Will game building be added?",
    a: "It is on the planned subjects list. This page tracks that interest; content is not available yet.",
  },
  {
    q: "Where do we start today?",
    a: "https://astryks.com/signup — learn art or music while game-building is in the works.",
  },
];

export default function HowToBuildGamesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        comingSoon
        comingSoonNote="There is no live game-development or “how to build games” course on Astryks yet. Coming soon only — nothing to purchase for this subject today."
        eyebrow="Coming soon"
        h1="How to build games — coming soon (not available yet)"
        lead="Kids who want to make games are on our radar. Game-building lessons are not in the library today. Art and music are."
        bullets={[
          "No game-dev lessons to unlock in the app right now",
          "Creative skills live today: art and music",
          "Free community posting for kids’ creative work",
          "Same account when new subjects arrive later",
        ]}
        faqs={FAQS}
        related={[
          ...LIVE_HUB_LINKS.slice(0, 4),
          ...COMING_SOON_HUB_LINKS.filter((l) => l.href !== "/how-to-build-games"),
        ]}
      />
    </>
  );
}
