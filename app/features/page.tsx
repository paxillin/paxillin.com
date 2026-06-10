"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

type Feature = {
  icon: string;
  title: string;
  problem: string;
  description: string;
  benefits: string[];
  mockupFeature: string;
};

/* Phone mockup — chrome stays static, the feature block crossfades softly */
const PhoneMockup = ({
  feature,
  swapKey,
}: {
  feature: Feature;
  swapKey?: number;
}) => (
  <div className="w-72 sm:w-80 h-[600px] sm:h-[640px] bg-pax-navy rounded-[3rem] p-2 shadow-[0_16px_40px_rgba(25,63,99,0.18)]">
    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
      <div className="absolute inset-0 bg-pax-cloud p-6 flex flex-col">
        {/* Status Bar (static) */}
        <div className="flex justify-between items-center text-xs text-pax-slate mb-4">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-pax-green rounded-sm"></div>
            <span>100%</span>
          </div>
        </div>

        {/* App Header (static) */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/lovable-uploads/883ae812-41b7-4f12-8dc5-599b1c93a623.png"
            alt="paxillin"
            className="w-8 h-8"
          />
          <span className="text-lg font-bold text-pax-navy">Paxillin</span>
        </div>

        {/* Feature block (crossfades on swapKey change) */}
        <div
          key={swapKey}
          className="flex-1 flex flex-col animate-pax-soft-in"
        >
          {/* Feature Icon */}
          <div className="w-16 h-16 rounded-2xl bg-pax-sky flex items-center justify-center mb-4 mx-auto">
            <img src={feature.icon} alt={feature.title} className="h-8 w-8" />
          </div>

          {/* Feature Title */}
          <h3 className="text-center text-lg font-bold text-pax-ink mb-2">
            {feature.title}
          </h3>

          {/* Mockup Feature Description */}
          <p className="text-center text-sm text-pax-slate mb-4">
            {feature.mockupFeature}
          </p>

          {/* Mock Interface Elements */}
          <div className="flex-1 space-y-3">
            <div className="bg-white rounded-xl p-3 border border-pax-line shadow-[0_1px_3px_rgba(15,30,46,0.06)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pax-sky rounded-full flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-pax-mist rounded mb-2"></div>
                  <div className="h-2 bg-pax-cloud rounded w-2/3"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-pax-line shadow-[0_1px_3px_rgba(15,30,46,0.06)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pax-sky rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-pax-cyan" />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-pax-mist rounded mb-2"></div>
                  <div className="h-2 bg-pax-cloud rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation (static) */}
        <div className="flex justify-around pt-4 border-t border-pax-line">
          <div className="w-6 h-6 bg-pax-sky rounded"></div>
          <div className="w-6 h-6 bg-pax-mist rounded"></div>
          <div className="w-6 h-6 bg-pax-mist rounded"></div>
          <div className="w-6 h-6 bg-pax-mist rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

/* Detail card — redesigned problem / solution / benefits */
const FeatureDetails = ({
  feature,
  index,
  total,
}: {
  feature: Feature;
  index: number;
  total: number;
}) => (
  <div className="pax-card p-6 md:p-8">
    {/* Header */}
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-pax-sky flex items-center justify-center shrink-0">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-6 h-6 object-contain"
        />
      </div>
      <h3 className="flex-1 text-2xl font-bold text-pax-navy tracking-tight">
        {feature.title}
      </h3>
      <span className="text-xs font-semibold text-pax-slate tabular-nums shrink-0">
        {String(index + 1).padStart(2, "0")}
        <span className="text-pax-line"> / {String(total).padStart(2, "0")}</span>
      </span>
    </div>

    {/* Problem — clean labeled text, no heavy gray box */}
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-pax-slate">
          The Challenge
        </span>
        <div className="h-px flex-1 bg-pax-line"></div>
      </div>
      <p className="text-sm md:text-base text-pax-slate leading-relaxed">
        {feature.problem}
      </p>
    </div>

    {/* Solution — highlighted, on-brand */}
    <div className="mb-6 rounded-2xl bg-gradient-to-br from-pax-sky/70 to-pax-ice/40 border border-pax-ice p-5">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-pax-cyan" />
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-pax-cyan">
          Our Solution
        </span>
      </div>
      <p className="text-sm md:text-base text-pax-ink leading-relaxed">
        {feature.description}
      </p>
    </div>

    {/* Key Benefits */}
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-pax-green">
          Key Benefits
        </span>
        <div className="h-px flex-1 bg-pax-line"></div>
      </div>
      <ul className="space-y-3">
        {feature.benefits.map((benefit, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-pax-slate"
          >
            <CheckCircle className="w-5 h-5 text-pax-green mr-3 mt-0.5 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Features = () => {
  const features: Feature[] = [
    {
      icon: "/icons/geoLocation.png",
      title: "Geographic Toggling",
      problem:
        "Healthcare professionals often face limitations in discovering and connecting with peers beyond their immediate location.",
      description:
        "Switch locations and connect locally or nationally with a single toggle - exclusive to Paxillin.",
      benefits: [
        "Effortlessly toggle between local and national networking modes",
        "Discover professionals in other regions and states",
        "Expand your network beyond geographic boundaries",
        "Promote or participate in regional events and initiatives",
      ],
      mockupFeature: "Interactive location-switch interface",
    },
    {
      icon: "/icons/members.png",
      title: "Verified Directory",
      problem:
        "Finding and connecting with known colleagues and peers across institutions is often cumbersome.",
      description:
        "Discover and connect with friends, peers, and colleagues through a nationwide directory.",
      benefits: [
        "Searchable directory of verified doctors and healthcare professionals",
        "Easily reconnect with former colleagues",
        "Build a stronger and more connected professional and social network",
        "Filter by specialty, location, or institution",
      ],
      mockupFeature: "Searchable doctor directory UI",
    },
    {
      icon: "/icons/event.png",
      title: "Events",
      problem:
        "Organizing and promoting professional  or social  events often lacks a streamlined, integrated system.",
      description:
        "Easily create professional (conferences, CMEs, workshops, meetings, lectures, classes) or social (gatherings, celebrations, activities) events - set the time and location, share a link, and invite others to join.",
      benefits: [
        "Simple event creation and sharing",
        "Host virtual or in-person events",
        "Track engagement",
        "Promote events within specific specialties or geographic regions",
      ],
      mockupFeature: "Event creation flow and invite system",
    },
    {
      icon: "/icons/community.png",
      title: "Create Community",
      problem:
        "There is a lack of a unified platform for dedicated, interest-based communities where healthcare professionals can collaborate and network effectively.",
      description:
        "Create a professional or social community by city, state, or nationwide  and share a link for others to join and collaborate.",
      benefits: [
        "Launch your own community in minutes",
        "Customize visibility by region (local, regional, or national)",
        "Collaborate on shared goals and interests",
        "Invite members via public or private links",
      ],
      mockupFeature: "Community setup interface",
    },
    {
      icon: "/icons/group.png",
      title: "Create Group",
      problem:
        "Maintaining communication within smaller peer groups is often fragmented across multiple platforms.",
      description:
        "Stay connected and collaborate effortlessly, no matter where members are located or what they specialise in.",
      benefits: [
        "Easily create groups of your choice",
        "Centralized communication for all group members",
        "Coordinate on specific topics, cases, or initiatives",
        "Persistent chat and activity feed for ongoing engagement",
      ],
      mockupFeature: "Group chat and dashboard UI",
    },
    {
      icon: "/icons/content.png",
      title: "Relevant Content & Feed",
      problem:
        "Healthcare professionals often miss important updates and trends due to information overload.",
      description:
        "Stay updated with doctors' posts, explore key trends, and expand your network through a curated content feed.",
      benefits: [
        "Personalized news and content tailored to your interests",
        "Follow updates from peers, institutions, and communities",
        "Stay informed about the latest medical advancements",
        "Engage with posts through comments and reactions",
      ],
      mockupFeature: "Curated content feed UI",
    },
    {
      icon: "/icons/analytics.png",
      title: "Impact Score Analytics",
      problem:
        "There's currently no effective way to measure the quality of professional and social interactions within healthcare networks.",
      description:
        "Paxillin's proprietary engagement metrics quantify meaningful professional and social interactions across the platform.",
      benefits: [
        "Track the quality and reach of your engagement",
        "Visualize influence across specialties and regions",
        "Boost profile visibility through consistent activity",
        "Understand network growth over time",
      ],
      mockupFeature: "Analytics dashboard visualization",
    },
    {
      icon: "/icons/encrypted.png",
      title: "Encrypted Messages & Calls",
      problem:
        "Privacy concerns often hinder open and secure communication among healthcare professionals.",
      description:
        "End-to-end encryption ensures that only the sender and recipient have access to messages and calls.",
      benefits: [
        "Confidential and private communication",
        "Secure peer-to-peer calls and messaging",
        "Compliance with healthcare data protection standards",
        "Peace of mind for sensitive discussions",
      ],
      mockupFeature: "Encrypted chat and call interface",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });

      setActiveIndex((prev) => (prev === closest ? prev : closest));
    };

    // throttle scroll work to one calc per animation frame
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans">
        <Header />

        {/* Hero Section */}
        <section className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <span className="pax-chip mb-5">Complete Feature Overview</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-pax-navy tracking-tight leading-[1.1] mb-6">
              Powerful Features for
              <span className="block">Healthcare Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-pax-slate max-w-3xl mx-auto leading-relaxed">
              Paxillin delivers powerful features tailored for healthcare
              professionals, making it easier to connect, collaborate, and share
              across the healthcare ecosystem.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
              {/* Sticky phone — desktop only, content swaps softly */}
              <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                <div className="flex justify-center">
                  <PhoneMockup
                    feature={features[activeIndex]}
                    swapKey={activeIndex}
                  />
                </div>

                {/* Progress dots */}
                <div className="flex justify-center items-center gap-2 mt-8">
                  {features.map((feature, i) => (
                    <button
                      key={feature.title}
                      type="button"
                      aria-label={`Go to ${feature.title}`}
                      onClick={() =>
                        cardRefs.current[i]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-pax-cyan"
                          : "w-2 bg-pax-line hover:bg-pax-slate/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Scrolling feature cards */}
              <div className="space-y-16 md:space-y-20 lg:space-y-28">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="scroll-mt-24 animate-fade-in"
                  >
                    {/* Inline phone on mobile (single column — no jump) */}
                    <div className="lg:hidden mb-8 flex justify-center">
                      <PhoneMockup feature={feature} />
                    </div>

                    <FeatureDetails
                      feature={feature}
                      index={index}
                      total={features.length}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-pax-navy">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Transform Your Medical Network?
            </h2>
            <p className="md:text-xl text-white/70 mb-2 max-w-3xl mx-auto">
              Join thousands of healthcare professionals and organization who are
              transforming healthcare networking with Paxillin.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Features;
