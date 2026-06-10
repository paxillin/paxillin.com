"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BadgeCheck, Lock, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from "@/components/home/FeatureCard";
import FAQSection from "@/components/home/FAQSection";
import Testimonial from "@/components/home/Testimonial";
import AppPreview from "@/components/home/AppPreview";
import PageLayout from "@/components/layout/PageLayout";

const features = [
  {
    icon: "/icons/geoLocation.png",
    title: "Geographic Toggling",
    description:
      "Select location, speciality, or workplace and connect with professionals across the nation",
  },
  {
    icon: "/icons/members.png",
    title: "Verified Directory",
    description:
      "Discover and connect with friends, peers, or colleagues from a nationwide list",
  },
  {
    icon: "/icons/event.png",
    title: "Events",
    description:
      "Easily organise events, whether professional (conferences, CMEs, workshops, meetings, lectures, classes) or social (gatherings, celebrations, activities)",
  },
  {
    icon: "/icons/community.png",
    title: "Create Community",
    description:
      "Create a society, association, committee, or community to collaborate seamlessly",
  },
  {
    icon: "/icons/group.png",
    title: "Create Group",
    description:
      "Stay connected with your inbox groups, no matter where they are or what they specialise in",
  },
  {
    icon: "/icons/content.png",
    title: "Relevant Content & Feed",
    description:
      "View doctors' updates, explore trends, and build your network",
  },
  {
    icon: "/icons/analytics.png",
    title: "Impact Score Analytics",
    description:
      "Proprietary engagement metrics that measure meaningful professional & social interactions",
  },
  {
    icon: "/icons/encrypted.png",
    title: "Encrypted Messages & Calls",
    description:
      "End-to-end encryption ensures that only the sender and recipient can access messages and calls.",
  },
];

const ourMission = [
  {
    icon: "/images/connection.svg",
    title: "Connection",
    description: "Near or Far: connect wherever you are",
  },
  {
    icon: "/images/integration.svg",
    title: "Integration",
    description: "Share interests, expertise, & collaborate effortlessly",
  },
  {
    icon: "/images/movement.svg",
    title: "Movement",
    description: "Grow your medical network. Join the movement",
  },
];

const trustStrip = [
  {
    icon: BadgeCheck,
    title: "Verified Doctors Only",
    sub: "Strict medical registration checks",
  },
  {
    icon: Lock,
    title: "Encrypted by Default",
    sub: "End-to-end encrypted messages & calls",
  },
  {
    icon: MapPin,
    title: "India-First Network",
    sub: "Built for how healthcare works here",
  },
];

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
          window.scrollTo({
            top: elementRect - bodyRect - offset,
            behavior: "smooth",
          });
        }
      }
    }, 0);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden bg-pax-cloud">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-fade-in">
                <span className="pax-chip mb-5">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Exclusive to Verified Medical Professionals
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-pax-navy tracking-tight leading-[1.1] mb-5">
                  Doctors United
                </h1>
                <p className="text-lg md:text-xl text-pax-slate leading-relaxed mb-8 max-w-lg">
                  A platform where healthcare professionals connect with each
                  other, not with patients. Connect with peers, share knowledge
                  securely, and grow your professional network.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="pax-btn-primary !text-base !px-8">
                    Join Early Access <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/features" className="pax-btn-outline !text-base !px-8">
                    Explore Features
                  </Link>
                </div>
                <p className="text-xs text-pax-slate mt-6">
                  Trusted by doctors and healthcare organizations across India
                </p>
              </div>

              <div className="animate-fade-in-delay-2">
                <AppPreview />
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="bg-pax-mist border-y border-pax-line">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-pax-line">
              {trustStrip.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 md:justify-center text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-pax-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pax-ink">
                      {item.title}
                    </p>
                    <p className="text-xs text-pax-slate">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="pax-section-title mb-3">
                A Network Built for Healthcare Professionals
              </h2>
              <p className="pax-section-sub max-w-2xl mx-auto">
                A Secure Platform for Doctors and Healthcare Stakeholders to
                Connect, Collaborate, and Grow — Built for Professionals, not
                Patients
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Goal */}
        <section id="our-mission" className="py-20 bg-pax-cloud">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="pax-section-title mb-3">Our Goal</h2>
              <p className="pax-section-sub">
                Uniting Healthcare Professionals into One Ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ourMission.map((mission) => (
                <div key={mission.title} className="pax-card p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-pax-sky flex items-center justify-center mx-auto mb-4">
                    <img
                      src={mission.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-pax-ink mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-sm text-pax-slate">{mission.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* See in action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="pax-section-title mb-10">See Paxillin in Action</h2>
            <div className="flex items-center justify-center">
              <img
                src="/images/fakeVideo.png"
                alt="Paxillin in action preview"
                className="w-full max-w-md rounded-2xl border border-pax-line shadow-[0_16px_40px_rgba(25,63,99,0.12)]"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-pax-cloud">
          <Testimonial />
        </section>

        <FAQSection />

        {/* CTA band */}
        <section className="bg-pax-navy">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Join India&apos;s most trusted
              <br className="hidden md:block" /> medical network
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-9">
              Take control of your professional identity. Connect, collaborate,
              and grow your practice with verified peers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-pax-navy font-bold px-9 py-4 text-base transition-transform hover:scale-105"
            >
              Join Early Access <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-white/50 text-xs mt-6">
              Registration requires valid medical registration credentials.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Index;
