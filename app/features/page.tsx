"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  BadgeCheck,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  Compass,
  FileCheck,
  Globe2,
  Heart,
  LineChart,
  Link2,
  Lock,
  MapPin,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Newspaper,
  Phone,
  Rss,
  Share2,
  Shield,
  Sparkles,
  UserSearch,
  Users,
  UsersRound,
  Video,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import {
  FeatureDetailCard,
  type FeatureDefinition,
} from "@/components/features/FeatureDetailCard";
import {
  FeaturePhoneMockup,
  FeaturePhoneShell,
  FeaturePhoneScreenContent,
} from "@/components/features/FeaturePhoneMockup";

const FEATURES: FeatureDefinition[] = [
  {
    icon: "/icons/geoLocation.png",
    title: "Geographic Toggling",
    headline: "One toggle. Local focus or national reach.",
    subtext:
      "Move between regional discovery and nationwide networking without switching apps—built for how clinicians actually work.",
    highlights: [
      { Icon: MapPin, text: "Switch between local and national modes instantly" },
      { Icon: Globe2, text: "Discover peers across regions and states" },
      { Icon: Compass, text: "Grow your network beyond your immediate geography" },
      { Icon: Users, text: "Surface events and initiatives that match your scope" },
    ],
    mockupFeature: "Interactive location-switch interface",
  },
  {
    icon: "/icons/members.png",
    title: "Verified Directory",
    headline: "Find the right colleague, faster.",
    subtext:
      "A nationwide directory of verified healthcare professionals—searchable, filterable, and designed for trusted reconnections.",
    highlights: [
      { Icon: UserSearch, text: "Search verified doctors and clinicians in one place" },
      { Icon: BadgeCheck, text: "Reconnect with former colleagues with confidence" },
      { Icon: Building2, text: "Filter by specialty, location, or institution" },
      { Icon: Users, text: "Strengthen professional and social ties over time" },
    ],
    mockupFeature: "Searchable doctor directory UI",
  },
  {
    icon: "/icons/event.png",
    title: "Events",
    headline: "Host CMEs, workshops, or gatherings—without the friction.",
    subtext:
      "Create professional or social events, set time and place, share a link, and invite the right people in a few minutes.",
    highlights: [
      { Icon: Calendar, text: "Simple creation and sharing for any event format" },
      { Icon: Video, text: "Support virtual, hybrid, or in-person sessions" },
      { Icon: Link2, text: "Share invites with a single secure link" },
      { Icon: Megaphone, text: "Target promotion by specialty or geography" },
    ],
    mockupFeature: "Event creation flow and invite system",
  },
  {
    icon: "/icons/community.png",
    title: "Create Community",
    headline: "Spaces for shared interests—not generic feeds.",
    subtext:
      "Launch professional or social communities at city, state, or national scale, then invite others with a clear, calm onboarding path.",
    highlights: [
      { Icon: UsersRound, text: "Spin up a community in minutes" },
      { Icon: MapPin, text: "Control visibility: local, regional, or nationwide" },
      { Icon: Share2, text: "Public or private links for trusted growth" },
      { Icon: MessageCircle, text: "Keep collaboration focused on shared goals" },
    ],
    mockupFeature: "Community setup interface",
  },
  {
    icon: "/icons/group.png",
    title: "Create Group",
    headline: "Small groups. One thread. Less noise.",
    subtext:
      "Give peer circles a dedicated home for coordination—across sites, shifts, and subspecialties—without splitting across apps.",
    highlights: [
      { Icon: MessagesSquare, text: "Create groups for cases, projects, or teams" },
      { Icon: Bell, text: "Central notifications for everyone who matters" },
      { Icon: Users, text: "Coordinate topics without losing context" },
      { Icon: Rss, text: "Persistent chat and activity for ongoing work" },
    ],
    mockupFeature: "Group chat and dashboard UI",
  },
  {
    icon: "/icons/content.png",
    title: "Relevant Content & Feed",
    headline: "Signal over scroll.",
    subtext:
      "Follow what peers and institutions publish, spot trends that matter to your practice, and engage without drowning in noise.",
    highlights: [
      { Icon: Newspaper, text: "Personalized updates aligned to your interests" },
      { Icon: Rss, text: "Follow people, places, and communities you trust" },
      { Icon: Sparkles, text: "Stay current on advances relevant to your field" },
      { Icon: Heart, text: "Thoughtful reactions and comments—not vanity metrics" },
    ],
    mockupFeature: "Curated content feed UI",
  },
  {
    icon: "/icons/analytics.png",
    title: "Impact Score Analytics",
    headline: "Measure meaningful engagement, not vanity.",
    subtext:
      "Proprietary metrics surface the quality and reach of your professional presence—so you can grow your network with intention.",
    highlights: [
      { Icon: LineChart, text: "See reach and depth of your activity over time" },
      { Icon: BarChart3, text: "Compare influence across specialties and regions" },
      { Icon: Sparkles, text: "Improve visibility through consistent, valuable actions" },
      { Icon: Users, text: "Understand how your network expands and compounds" },
    ],
    mockupFeature: "Analytics dashboard visualization",
  },
  {
    icon: "/icons/encrypted.png",
    title: "Encrypted Messages & Calls",
    headline: "Private by design—for sensitive clinical conversations.",
    subtext:
      "End-to-end encryption helps ensure only intended participants can access messages and calls, with a calm interface that feels clinical, not consumer-chatty.",
    highlights: [
      { Icon: Shield, text: "Confidential channels for peer-to-peer discussion" },
      { Icon: Lock, text: "Encrypted messaging and voice with modern protocols" },
      { Icon: FileCheck, text: "Built with healthcare-grade expectations in mind" },
      { Icon: Phone, text: "Voice that stays between you and your colleague" },
    ],
    mockupFeature: "Encrypted chat and call interface",
    visualAccent: "security",
  },
];

const IO_THRESHOLDS = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const;
const IO_ROOT_MARGIN = "-35% 0px -35% 0px";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratiosRef = useRef<Map<number, number>>(new Map());

  const setCardRef = useCallback((index: number, el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const lgMq = window.matchMedia("(min-width: 1024px)");
    let observer: IntersectionObserver | null = null;

    const pickActiveFromRatios = () => {
      let bestIdx = 0;
      let bestRatio = -1;
      ratiosRef.current.forEach((ratio, idx) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIdx = idx;
        }
      });
      if (bestRatio < 0) return;
      setActiveIndex((prev) => (prev !== bestIdx ? bestIdx : prev));
    };

    const attach = () => {
      observer?.disconnect();
      observer = null;
      ratiosRef.current.clear();

      if (!lgMq.matches) return;

      const elements = cardRefs.current.filter(
        (n): n is HTMLDivElement => n != null
      );
      if (elements.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const target = entry.target;
            if (!(target instanceof HTMLElement)) continue;
            const idx = Number.parseInt(target.dataset.featureIndex ?? "", 10);
            if (!Number.isFinite(idx)) continue;
            ratiosRef.current.set(idx, entry.intersectionRatio);
          }
          pickActiveFromRatios();
        },
        {
          root: null,
          rootMargin: IO_ROOT_MARGIN,
          threshold: [...IO_THRESHOLDS],
        }
      );

      const obs = observer;
      elements.forEach((el, i) => {
        el.dataset.featureIndex = String(i);
        obs.observe(el);
      });
    };

    const scheduleAttach = () => {
      queueMicrotask(() => {
        requestAnimationFrame(attach);
      });
    };

    const onLgChange = () => {
      scheduleAttach();
      if (!lgMq.matches) {
        setActiveIndex(0);
      }
    };

    scheduleAttach();
    lgMq.addEventListener("change", onLgChange);
    window.addEventListener("resize", scheduleAttach);

    return () => {
      lgMq.removeEventListener("change", onLgChange);
      window.removeEventListener("resize", scheduleAttach);
      observer?.disconnect();
    };
  }, []);

  const active = FEATURES[activeIndex] ?? FEATURES[0];

  const phoneScreen = (
    <div className="flex min-h-0 flex-1 flex-col">
      {reduceMotion ? (
        <FeaturePhoneScreenContent
          key={active.title}
          icon={active.icon}
          title={active.title}
          mockupFeature={active.mockupFeature}
        />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.title}
            className="flex min-h-0 flex-1 flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FeaturePhoneScreenContent
              icon={active.icon}
              title={active.title}
              mockupFeature={active.mockupFeature}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );

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
              Complete feature overview
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:mb-8 md:text-6xl md:leading-[1.08]">
              Powerful features for
              <span className="mt-1 block text-paxillin-secondary md:mt-2">
                healthcare professionals
              </span>
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base font-normal leading-relaxed text-paxillin-ink/65 md:text-lg">
              Paxillin delivers tools tailored for healthcare professionals to
              connect, collaborate, and share across the ecosystem—clearly and
              calmly.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="container mx-auto">
            {/* Desktop: sticky phone + scrolling cards */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <FeaturePhoneShell>{phoneScreen}</FeaturePhoneShell>
              </div>
              <div className="space-y-24">
                {FEATURES.map((feature, index) => (
                  <div
                    key={feature.title}
                    ref={(el) => setCardRef(index, el)}
                    className="scroll-mt-28"
                  >
                    <FeatureDetailCard feature={feature} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: phone + card per feature */}
            <div className="space-y-24 lg:hidden">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-fade-in flex flex-col items-center gap-12 text-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <FeaturePhoneMockup
                    icon={feature.icon}
                    title={feature.title}
                    mockupFeature={feature.mockupFeature}
                  />
                  <div className="w-full">
                    <FeatureDetailCard feature={feature} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paxillin-secondary px-4 py-24">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to Transform Your Medical Network?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-white/75 md:text-xl">
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
