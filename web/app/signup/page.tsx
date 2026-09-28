import type { Metadata } from "next";
import SignupClient from "./SignupClient";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your free Astryks account. 10 minutes of free lesson preview, no card required.",
  alternates: { canonical: "https://astryks.com/signup" },
};

export default function Page() {
  return <SignupClient />;
}
