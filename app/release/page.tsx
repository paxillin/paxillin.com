"use client";

import { CheckCircle, Calendar, Users, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const statusChipClasses: Record<string, string> = {
  completed: "bg-green-50 text-pax-green",
  upcoming: "bg-pax-sky text-pax-cyan",
  planned: "bg-pax-mist text-pax-slate",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  upcoming: "Upcoming",
  planned: "Planned",
};

const Release = () => {
  const timelinePhases = [
    {
      phase: "alpha",
      title: "Alpha Testing Phase",
      period: "Q1 2027",
      status: "upcoming",
      participants: "100 healthcare professionals",
      duration: "3 months",
      features: [
        "Core networking functionality",
        "Basic and relevant matching",
        "Secure messaging system",
        "Professional and social profile setup",
        "Direct feedback channel with developers",
        "Early access to core features",
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
      period: "Q2 2027",
      status: "planned",
      participants: "1,000 healthcare professionals",
      duration: "4 months",
      features: [
        "Complete feature suite",
        "Advanced algorithms",
        "Professional and social communities",
        "Event management system",
        "Analytics dashboard",
        "Mobile app optimization",
        "Video consultation features",
        "Professional verification system",
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
      period: "Q3 2027",
      status: "planned",
      participants: "Open to all Healthcare professionals",
      duration: "Ongoing",
      features: [
        "Complete platform access",
        "All premium features included",
        "Flawless fusion of every feature",
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
      date: "Q1 2027",
      title: "Alpha Launch",
      description: "Limited release to 100 selected healthcare professionals.",
      icon: Users,
    },
    {
      date: "Q2 2027",
      title: "Beta Launch",
      description: "Expanded access to 1,000 medical professionals nationwide.",
      icon: Globe,
    },
    {
      date: "Q3 2027",
      title: "Public Launch",
      description:
        "Full platform availability for all healthcare professionals.",
      icon: CheckCircle,
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans">
        <Header />

        {/* Hero Section */}
        <section className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <span className="pax-chip mb-5">Release Roadmap 2027</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-pax-navy tracking-tight leading-[1.1] mb-6">
              Paxillin Release Timeline
            </h1>
            <p className="text-lg md:text-xl text-pax-slate max-w-3xl mx-auto leading-relaxed">
              Follow our journey from exclusive alpha testing to a nationwide
              public launch. Be part of the revolution in professional and
              social healthcare networking.
            </p>
          </div>
        </section>

        {/* Timeline Milestones */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="pax-section-title mb-3">Development Milestones</h2>
              <p className="pax-section-sub">
                Key dates and achievements in our release journey
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-pax-line"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.date}
                  className="relative pl-10 md:pl-0 mb-10 last:mb-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-pax-cyan ring-4 ring-pax-sky z-10"></div>

                  <div
                    className={`md:w-[calc(50%-2.5rem)] ${
                      index % 2 === 1 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className="pax-card p-6 text-left">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-pax-sky flex items-center justify-center shrink-0">
                          <milestone.icon className="h-6 w-6 text-pax-cyan" />
                        </div>
                        <div>
                          <span className="pax-chip mb-1">{milestone.date}</span>
                          <h3 className="text-lg font-bold text-pax-ink">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-pax-slate leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Phase Information */}
        <section className="py-16 md:py-20 px-4 bg-pax-cloud">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="pax-section-title mb-3">Testing Phase Details</h2>
              <p className="pax-section-sub max-w-3xl mx-auto">
                A closer look at each phase of the Paxillin rollout
              </p>
            </div>

            <div className="space-y-8">
              {timelinePhases.map((phase, index) => (
                <div
                  key={phase.phase}
                  className="pax-card overflow-hidden animate-fade-in transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(25,63,99,0.10)]"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Phase Header */}
                    <div className="p-8 bg-pax-navy text-white">
                      <div className="flex items-center gap-2 flex-wrap mb-4">
                        <span className="inline-flex items-center rounded-full bg-white/15 text-white font-medium px-3 py-1 text-xs">
                          {phase.period}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full font-medium px-3 py-1 text-xs ${
                            statusChipClasses[phase.status] ??
                            statusChipClasses.planned
                          }`}
                        >
                          {statusLabels[phase.status] ?? phase.status}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-2xl font-bold tracking-tight mb-4">
                        {phase.title}
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-left text-white/90">
                            {phase.participants}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/90">
                            Starting {phase.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features & Goals */}
                    <div className="p-8 col-span-2 grid md:grid-cols-2 gap-8 w-full">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-pax-ink">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {phase.features.slice(0, 4).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-start text-left text-sm text-pax-slate"
                            >
                              <CheckCircle className="h-4 w-4 text-pax-green mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-pax-ink">
                          Phase Goals
                        </h4>
                        <ul className="space-y-2">
                          {phase.goals.map((goal, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-start text-left text-sm text-pax-slate"
                            >
                              <div className="w-2 h-2 bg-pax-cyan rounded-full mr-3 flex-shrink-0"></div>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Release;
