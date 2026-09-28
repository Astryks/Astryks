import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Learn art — drawing, painting & more";
const DESCRIPTION =
  "Learn art on Astryks: practice real drawing and painting skills with expert lessons, then post your own work. Free to join.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/learn-art" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/learn-art",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What art skills can I learn on Astryks?",
    a: "Astryks teaches real art skills such as portrait drawing, watercolour, and charcoal from life — lessons led by practicing professionals, not just tips.",
  },
  {
    q: "Do beginners need experience?",
    a: "No. Astryks is designed for anyone starting from zero: learn basic techniques, then try recreating work you love or making your own.",
  },
  {
    q: "Can I post the art I make?",
    a: "Yes — posting is optional and free. Share for feedback and community, or keep work private.",
  },
  {
    q: "How do I start learning art?",
    a: "Create a free account at https://astryks.com/signup, try the free preview, then unlock the full art lesson library with a subscription if you want more.",
  },
];

export default function LearnArtHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Learning art"
        h1="Learn art for anyone — real drawing and painting skills"
        lead="From first sketches to finished pieces: Astryks helps you learn art from working professionals and share what you create."
        bullets={[
          "Portrait drawing, watercolour, charcoal, and more in the lesson library",
          "Videos created by practicing artists",
          "Post finished work to the community — optional and free",
          "Works on phone, tablet, or computer",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/learn-art")}
      />
    </>
  );
}
