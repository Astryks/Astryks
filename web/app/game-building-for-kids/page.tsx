import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS, COMING_SOON_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Game building for kids — coming soon on Astryks";
const DESCRIPTION =
  "Game building for kids is coming soon on Astryks — not a live course. Kids can learn art and music on Astryks today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/game-building-for-kids" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/game-building-for-kids",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Is there a game-building course for kids on Astryks?",
    a: "Not yet. Game building for kids is coming soon and is not available to buy or watch.",
  },
  {
    q: "What can kids learn instead?",
    a: "Real art and music skills with expert lessons, plus posting their own creative work.",
  },
  {
    q: "Should parents expect game-dev content in the subscription today?",
    a: "No. Subscriptions unlock the live art and music lesson library. Game building is not included because it is not live.",
  },
  {
    q: "How do we join?",
    a: "Sign up free at https://astryks.com/signup.",
  },
];

export default function GameBuildingForKidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        comingSoon
        comingSoonNote="Game building for kids is not available on Astryks yet. Do not expect game-dev lessons in the app or in your subscription today."
        eyebrow="Coming soon"
        h1="Game building for kids — coming soon (not a live course)"
        lead="We may teach kids to build games in the future. Today Astryks is for learning art and music and sharing creative work."
        bullets={[
          "Planned subject only — not in the lesson library",
          "Live now: art and music edtech for kids",
          "Free to join and post creative projects",
          "CTA sends you to signup for what is actually available today",
        ]}
        faqs={FAQS}
        related={[
          ...LIVE_HUB_LINKS.slice(0, 4),
          ...COMING_SOON_HUB_LINKS.filter((l) => l.href !== "/game-building-for-kids"),
        ]}
      />
    </>
  );
}
