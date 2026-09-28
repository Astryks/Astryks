import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Learn music — create songs & sing";
const DESCRIPTION =
  "Learn music on Astryks: practice real music skills with expert lessons, create songs, and post your work. Free to join.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/learn-music" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/learn-music",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What music skills can I learn on Astryks?",
    a: "You can learn to create songs (including with tools like GarageBand), basics of singing, and other practical music skills taught by professionals who make music for a living.",
  },
  {
    q: "Is this for complete beginners?",
    a: "Yes. Start with zero experience — learn techniques, listen to work you admire, and make your first song or vocal piece at your own pace.",
  },
  {
    q: "Can I share the music I make?",
    a: "Yes. Posting is free and optional. Share for feedback or keep experiments private.",
  },
  {
    q: "How do I start learning music?",
    a: "Sign up free at https://astryks.com/signup, use the 10-minute free preview, then subscribe if you want full access to the music lesson library.",
  },
];

export default function LearnMusicHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Learning music"
        h1="Learn music for anyone — make real songs and grow your ear"
        lead="Astryks teaches practical music skills from working musicians — then gives you a place to post what you make."
        bullets={[
          "Create songs from scratch and learn singing basics",
          "Lessons from practicing music professionals",
          "Post tracks and progress to the community when you're ready",
          "Free account to join and post; subscription for the full lesson library",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/learn-music")}
      />
    </>
  );
}
