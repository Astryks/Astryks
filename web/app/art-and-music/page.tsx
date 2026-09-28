import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Art and music — learn & create on Astryks";
const DESCRIPTION =
  "Art and music on Astryks: expert lessons, free community posting, and creative growth for anyone who wants to make things.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/art-and-music" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/art-and-music",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Does Astryks teach both art and music?",
    a: "Yes. Live subjects today are art and music, with new lessons added regularly under one subscription.",
  },
  {
    q: "Can one account do both?",
    a: "Yes — full access to Music and Art is included when you subscribe. Posting and community features are free with an account.",
  },
  {
    q: "Are there other subjects?",
    a: "Art and music are live today, with more subjects planned as the library grows.",
  },
  {
    q: "Where do I start?",
    a: "https://astryks.com/signup — then try the free lesson preview.",
  },
];

export default function ArtAndMusicHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Art & music"
        h1="Art and music for anyone, in one place"
        lead="Draw, paint, sing, and make songs — Astryks combines expert lessons with a community for sharing work."
        bullets={[
          "Both art and music under one learning product",
          "Expert-led videos and trailers",
          "Free to create an account and post work",
          "10-minute free preview of lessons before you subscribe",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/art-and-music")}
      />
    </>
  );
}
