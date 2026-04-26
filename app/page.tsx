"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from "@/components/home/FeatureCard";
import FAQSection from "@/components/home/FAQSection";
import Testimonial from "@/components/home/Testimonial";
import PageLayout from "@/components/layout/PageLayout";
import { NetworkHeroGraphic } from "@/components/home/NetworkHeroGraphic";
import {
  MapPin,
  UserCheck,
  Calendar,
  Building2,
  UsersRound,
  SquareLibrary,
  LineChart,
  Lock,
  Network,
  GitBranch,
  BookOpen,
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const offset = 120;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }, 0);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Location-aware discovery",
      description:
        "Filter by region, specialty, or workplace to find the right people across your network.",
    },
    {
      icon: UserCheck,
      title: "Verified directory",
      description:
        "Find and connect with colleagues and peers you already trust — in one place.",
    },
    {
      icon: Calendar,
      title: "Professional events",
      description:
        "From CMEs and meetings to small gatherings, organise what matters to your work.",
    },
    {
      icon: Building2,
      title: "Communities",
      description:
        "Societies, associations, and groups — structured spaces for real collaboration.",
    },
    {
      icon: UsersRound,
      title: "Groups that follow you",
      description:
        "Keep specialty and interest groups in sync, wherever your career takes you.",
    },
    {
      icon: SquareLibrary,
      title: "Relevant updates",
      description:
        "Signal over noise: follow what’s useful for your practice and your network.",
    },
    {
      icon: LineChart,
      title: "Meaningful engagement",
      description:
        "Clear metrics for professional interaction — not vanity scores.",
    },
    {
      icon: Lock,
      title: "Private by design",
      description:
        "Encrypted messaging and calls, with you in control of what you share.",
    },
  ];

  const pillars = [
    {
      icon: Network,
      title: "Connection",
      description: "A calm space to find the right people — near or far.",
    },
    {
      icon: GitBranch,
      title: "Integration",
      description: "Interests, expertise, and work in one coherent profile.",
    },
    {
      icon: BookOpen,
      title: "Knowledge flow",
      description: "Share and learn in focused threads, not endless feeds.",
    },
  ] as const;

  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans antialiased text-left">
        <Header />

        <section className="relative overflow-hidden border-b border-paxillin-mist/30 bg-paxillin-parchment/50 pb-12 pt-4 sm:pt-8">
          <div className="content-container">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-12 lg:py-8">
              <div className="flex w-full max-w-xl flex-1 flex-col justify-center text-center lg:text-left">
                <p className="text-sm font-medium tracking-wide text-paxillin-ink/60">
                  Professional healthcare network
                </p>
                <h1
                  className="font-heading mt-3 text-4xl font-semibold leading-tight tracking-tight text-paxillin-secondary sm:text-5xl sm:leading-tight"
                >
                  Better care starts with better-connected professionals.
                </h1>
                <div className="mt-4 h-1 w-20 rounded-full bg-paxillin-accent" />
                <p className="mt-6 text-lg leading-relaxed text-paxillin-ink/80">
                  Connect with trusted healthcare professionals. Paxillin is a
                  focused space for meaningful collaboration — not another social
                  feed, and not a place to talk with patients.
                </p>
              </div>
              <div className="w-full flex-1">
                <NetworkHeroGraphic />
              </div>
            </div>
          </div>
        </section>

        <section className="content-container py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-paxillin-secondary sm:text-4xl">
              The product
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paxillin-ink/70">
              Secure networking for doctors and healthcare stakeholders: clear,
              calm, and built for professional trust — with room to breathe.
            </p>
          </div>
        </section>

        <section className="content-container pb-16 sm:pb-20">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-semibold text-paxillin-secondary sm:text-4xl">
              Capabilities
            </h2>
            <p className="mt-3 text-lg text-paxillin-ink/65">
              Tools that support how you work together — not how algorithms
              want you to scroll.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.08}
              />
            ))}
          </div>
        </section>

        <section
          id="our-mission"
          className="border-t border-paxillin-mist/30 bg-paxillin-parchment py-16 sm:py-20"
        >
          <div className="content-container">
            <div className="mb-10 text-center">
              <h2 className="font-heading text-3xl font-semibold text-paxillin-secondary sm:text-4xl">
                How we show up
              </h2>
              <p className="mt-3 text-lg text-paxillin-ink/65">
                Quiet, intentional, and easy to understand.
              </p>
            </div>

            <div className="mx-auto flex max-w-2xl flex-col gap-4">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-paxillin-mist/50 bg-white/90 px-4 py-4 shadow-sm sm:px-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paxillin-mist/60 bg-white">
                    <item.icon
                      className="h-6 w-6 text-paxillin-sage"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-heading text-lg font-semibold text-paxillin-secondary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-paxillin-ink/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-container py-16 sm:py-20">
          <h2 className="text-center font-heading text-3xl font-semibold text-paxillin-secondary sm:text-4xl">
            See Paxillin in context
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-paxillin-ink/65">
            Product preview (placeholder) — a calm surface for your future walkthrough.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-card-lg border border-paxillin-mist/50 bg-white shadow-card">
              <img
                src="/images/fakeVideo.png"
                alt="Product preview placeholder"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <Testimonial />
        <FAQSection />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Index;
