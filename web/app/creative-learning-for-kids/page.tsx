import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Creative learning for kids — art, music & making";
const DESCRIPTION =
  "Creative learning for kids on Astryks: practice art and music, post your work, grow with a community built for families.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/creative-learning-for-kids" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/creative-learning-for-kids",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What is creative learning on Astryks?",
    a: "Kids learn by doing: expert art and music lessons plus space to make and share their own work with other kids and families.",
  },
  {
    q: "Is Astryks just watching videos?",
    a: "No. Lessons teach techniques so kids can create — draw, paint, record songs — and optionally post finished work.",
  },
  {
    q: "Who is it for?",
    a: "Kids and families who want structured creative practice and a supportive place to share, not endless social scrolling.",
  },
  {
    q: "How do we start?",
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
        h1="Creative learning for kids — make art, make music, grow together"
        lead="Astryks is where kids practice real creative skills with expert guidance and a community that celebrates making things."
        bullets={[
          "Art and music lessons from professionals",
          "Posting and Hall of Fame recognition for great work",
          "Free to join the community; subscribe for the full lesson library",
          "Built for kids and families on web and mobile",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/creative-learning-for-kids")}
      />
    </>
  );
}
