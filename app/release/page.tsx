"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Calendar,
  Users,
  Globe,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const timelinePhases = [
  {
    phase: "alpha",
    title: "Alpha Testing Phase",
    period: "Q1 2026",
    participants: "100 healthcare professionals",
    features: [
      "Core networking functionality",
      "Basic and relevant matching",
      "Secure messaging system",
      "Professional and social profile setup",
    ],
    goals: [
      "Test core platform stability",
      "Gather initial user feedback",
      "Validate professional and social networking concepts",
      "Identify critical improvements",
    ],
  },
  {
    phase: "beta",
    title: "Beta Testing Phase",
    period: "Q2 2026",
    participants: "1,000 healthcare professionals",
    features: [
      "Complete feature suite",
      "Advanced algorithms",
      "Professional and social communities",
      "Event management system",
    ],
    goals: [
      "Scale testing across specialties",
      "Refine recommendations",
      "Test community engagement features",
      "Optimize mobile user experience",
    ],
  },
  {
    phase: "public",
    title: "Public Release",
    period: "Q3 2026",
    participants: "Open to all healthcare professionals",
    features: [
      "Complete platform access",
      "All premium features included",
      "Streamlined user experience",
    ],
    goals: [
      "Scale to 10,000+ active users",
      "Nationwide launch for healthcare professionals",
      "Enable seamless collaboration among healthcare professionals",
      "Establish the healthcare ecosystem",
    ],
  },
];

const milestones = [
  {
    date: "Q1 2026",
    title: "Alpha Launch",
    description:
      "Limited release to selected healthcare professionals.",
    icon: Users,
    color: "bg-paxillin-secondary",
  },
  {
    date: "Q2 2026",
    title: "Beta Launch",
    description:
      "Expanded access to more medical professionals nationwide.",
    icon: Globe,
    color: "bg-paxillin-sage",
  },
  {
    date: "Q3 2026",
    title: "Public Launch",
    description:
      "Full platform availability for healthcare professionals.",
    icon: CheckCircle,
    color: "bg-paxillin-teal",
  },
];

const Release = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />

        <section className="px-4 pb-12 pt-16">
          <div className="container mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 border border-paxillin-mist/50 bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-paxillin-ink/55"
            >
              Release roadmap 2026
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:mb-8 md:text-6xl md:leading-[1.08]">
              Paxillin release
              <span className="mt-1 block text-paxillin-secondary md:mt-2">timeline</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-paxillin-ink/65 md:text-lg">
              From focused alpha testing to a nationwide public launch—follow how
              the product rolls out for healthcare networking.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-semibold text-paxillin-secondary md:text-4xl">
                Development milestones
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-paxillin-ink/65">
                Key phases in our release journey.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.date}
                  className="relative mb-12 flex flex-col gap-4 last:mb-0 sm:flex-row sm:items-start"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center gap-3 sm:block sm:w-28 sm:shrink-0 sm:text-right sm:pr-8">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${milestone.color} shadow-md sm:hidden`}
                    >
                      <milestone.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-paxillin-ink/50">
                      {milestone.date}
                    </span>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${milestone.color} shadow-md`}
                    >
                      <milestone.icon className="h-6 w-6 text-white" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="mt-2 hidden h-24 w-0.5 bg-paxillin-mist sm:block" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 sm:pt-1">
                    <h3 className="font-heading text-xl font-semibold text-paxillin-secondary">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-paxillin-ink/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-paxillin-mist/40 bg-paxillin-parchment/25 px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-semibold text-paxillin-secondary md:text-4xl">
                Testing phase details
              </h2>
            </div>

            <div className="mx-auto max-w-5xl space-y-10">
              {timelinePhases.map((phase, index) => (
                <Card
                  key={phase.phase}
                  className="overflow-hidden rounded-2xl border border-paxillin-mist/50 bg-white shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="bg-paxillin-secondary p-8 text-white">
                        <Badge
                          variant="secondary"
                          className="mb-4 border-0 bg-white/15 text-white"
                        >
                          {phase.period}
                        </Badge>
                        <h3 className="font-heading text-xl font-semibold md:text-2xl">
                          {phase.title}
                        </h3>
                        <div className="mt-6 space-y-3 text-sm text-white/75">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 shrink-0" />
                            <span className="text-left">{phase.participants}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 shrink-0" />
                            <span>Starting {phase.period}</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 grid gap-8 p-8 md:grid-cols-2">
                        <div>
                          <h4 className="mb-4 font-heading text-lg font-semibold text-paxillin-secondary">
                            Key features
                          </h4>
                          <ul className="space-y-2">
                            {phase.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-left text-sm text-paxillin-ink/70"
                              >
                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-paxillin-sage" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-4 font-heading text-lg font-semibold text-paxillin-secondary">
                            Phase goals
                          </h4>
                          <ul className="space-y-2">
                            {phase.goals.map((goal, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-left text-sm text-paxillin-ink/70"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-paxillin-sage" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paxillin-secondary px-4 py-24">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Request early access
            </h2>
            <p className="mx-auto max-w-3xl text-white/75 md:text-xl">
              Use the button on this page to join the waitlist—we will reach out as
              new phases open.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Release;
