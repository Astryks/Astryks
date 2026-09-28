import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Creative learning — art, music & making";
const DESCRIPTION =
  "Creative learning on Astryks: practice art and music, post your work, and grow with a community built for anyone who wants to make things.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/creative-learning" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/creative-learning",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What is creative learning on Astryks?",
    a: "Learning by doing: expert art and music lessons plus space to make and share your own work with the community.",
  },
  {
    q: "Is Astryks just watching videos?",
    a: "No. Lessons teach techniques so you can create — draw, paint, record songs — and optionally post finished work.",
  },
  {
    q: "Who is it for?",
    a: "Anyone who wants structured creative practice and a supportive place to share, not endless social scrolling.",
  },
  {
    q: "How do I start?",
    a: "Sign up free at https://astryks.com/signup.",
  },
];

export default function CreativeLearningHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Creative skills"
        h1="Creative learning for anyone — make art, make music, grow together"
        lead="Astryks is where you practice real creative skills with expert guidance and a community that celebrates making things."
        bullets={[
          "Art and music lessons from professionals",
          "Posting and Hall of Fame recognition for great work",
          "Free to join the community; subscribe for the full lesson library",
          "Open to anyone, on web and mobile",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/creative-learning")}
      />
    </>
  );
}
