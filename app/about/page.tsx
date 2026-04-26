"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

const milestones = [
  {
    year: "2025",
    title: "Paxillin Founded",
    description:
      "Started with a vision to revolutionize professional and social healthcare networking.",
  },
  {
    year: "Q1 2026",
    title: "Alpha Development",
    description:
      "Core features developed with input from leading healthcare professionals and early adopters.",
  },
  {
    year: "Q2 2026",
    title: "Beta Testing Launch",
    description:
      "Expanded testing with verified medical professionals and community users.",
  },
  {
    year: "Q3 2026",
    title: "Public Release",
    description:
      "Full platform launch with comprehensive, compliant, enterprise-grade security.",
  },
];

const About = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />

        <section className="px-4 pb-16 pt-16">
          <div className="container mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 border border-paxillin-mist/50 bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-paxillin-ink/55"
            >
              About Paxillin
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:mb-8 md:text-6xl md:leading-[1.08]">
              Networking built for
              <span className="mt-1 block text-paxillin-secondary md:mt-2">
                healthcare professionals
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-paxillin-ink/65 md:text-lg">
              Paxillin is India&apos;s networking platform for doctors—social and
              professional connections, communities, tailored groups, and event
              tools—built so healthcare professionals can collaborate with clarity.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="rounded-2xl border border-paxillin-mist/50 bg-paxillin-parchment/40 shadow-none">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex items-center text-left">
                    <Target className="mr-4 h-12 w-12 shrink-0 text-paxillin-secondary" />
                    <h2 className="font-heading text-2xl font-semibold text-paxillin-secondary md:text-3xl">
                      Our mission
                    </h2>
                  </div>
                  <p className="text-left text-base leading-relaxed text-paxillin-ink/70 md:text-lg">
                    Paxillin empowers India&apos;s doctors to forge seamless connections
                    and share expertise, laying the foundation for a doctor-led
                    healthcare ecosystem—uniting medical professionals nationwide so
                    every healthcare professional can thrive in a dynamic network.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-paxillin-mist/50 bg-paxillin-parchment/40 shadow-none">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex items-center text-left">
                    <Award className="mr-4 h-12 w-12 shrink-0 text-paxillin-sage" />
                    <h2 className="font-heading text-2xl font-semibold text-paxillin-secondary md:text-3xl">
                      Our vision
                    </h2>
                  </div>
                  <p className="text-left text-base leading-relaxed text-paxillin-ink/70 md:text-lg">
                    To be India&apos;s leading platform for doctors—transforming how
                    medical professionals connect, collaborate, and innovate—with a
                    unified network that drives excellence and shapes the future of
                    healthcare collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-paxillin-parchment/30 px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-semibold text-paxillin-secondary md:text-4xl">
                Our journey
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-paxillin-ink/65">
                From concept to a focused professional network.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="mb-12 flex flex-col items-start last:mb-0 md:flex-row"
                >
                  <div className="mb-4 w-full shrink-0 text-center md:mb-0 md:w-28 md:text-right md:pr-8">
                    <span className="font-heading text-xl font-semibold text-paxillin-secondary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="hidden shrink-0 md:block">
                    <div className="relative mt-2 h-4 w-4 rounded-full bg-paxillin-secondary">
                      {index < milestones.length - 1 && (
                        <div className="absolute left-1/2 top-4 h-24 w-0.5 -translate-x-1/2 bg-paxillin-mist" />
                      )}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 pl-0 md:pl-0">
                    <h3 className="font-heading text-xl font-semibold text-paxillin-secondary md:text-2xl">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-base text-paxillin-ink/70">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paxillin-secondary px-4 py-24">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Join the future of healthcare networking
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-white/75 md:text-xl">
              Built for healthcare professionals and organizations—with clarity and
              trust at the center.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-paxillin-secondary hover:bg-white/90">
                <Link href="/features">Explore features</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/release">Release timeline</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default About;
