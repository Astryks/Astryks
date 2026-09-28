import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms of service for using Astryks.",
  alternates: { canonical: "https://astryks.com/terms" },
};

export default function Page() {
  return <TermsClient />;
}
