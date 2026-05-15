import type { Metadata } from "next";
import { DoctorsDesktopFeed } from "@/components/doctors-feed/DoctorsDesktopFeed";

export const metadata: Metadata = {
  title: "Professional feed — Paxillin",
  description:
    "Prototype desktop feed: network navigation, clinical discussions, and discovery — aligned with the Linked-in-for-Doctors design exploration.",
};

export default function LinkedInForDoctorsPage() {
  return <DoctorsDesktopFeed />;
}
