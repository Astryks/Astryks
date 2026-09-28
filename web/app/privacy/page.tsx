import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The privacy policy for Astryks — what data we collect and how it's used.",
  alternates: { canonical: "https://astryks.com/privacy" },
};

export default function Page() {
  return <PrivacyClient />;
}
