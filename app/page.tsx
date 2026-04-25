"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from "@/components/home/FeatureCard";
import FAQSection from "@/components/home/FAQSection";
import Testimonial from "@/components/home/Testimonial";
import PageLayout from "@/components/layout/PageLayout";
import { useSearchParams } from "next/navigation";

const leftFeaturesArr = [
  "Achievements",
  "Publications",
  "Milestones",
  "Academics",
  "Expertise",
  "Passion",
  "Talent",
  "Skills",
  "Work",
  "Art",
];

const rightFeaturesArr = [
  "Rejuvenation",
  "Refreshment",
  "Adventures",
  "Vacations",
  "Moments",
  "Lifestyle",
  "Dreams",
  "Sport",
  "Goal",
  "Fun",
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("alpha");
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to register.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: `Thank you for registering for ${selectedPhase} testing. We'll notify you when it's available.`,
    });
    setEmail("");
  };

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
      icon: "/icons/geoLocation.png",
      title: "Geographic Toggling",
      description:
        "Select location, speciality, or workplace and connect with professionals across the nation",
      color: "text-blue-600",
    },
    {
      icon: "/icons/members.png",
      title: "Verified Directory",
      description:
        "Discover and connect with friends, peers, or colleagues from a nationwide list",
      color: "text-green-600",
    },
    {
      icon: "/icons/event.png",
      title: "Events",
      description:
        "Easily organise events, whether professional (conferences, CMEs, workshops, meetings, lectures, classes) or social (gatherings, celebrations, activities)",
      color: "text-purple-600",
    },
    {
      icon: "/icons/community.png",
      title: "Create Community",
      description:
        "Create a society, association, committee, or community to collaborate seamlessly",
      color: "text-blue-600",
    },
    {
      icon: "/icons/group.png",
      title: "Create Group",
      description:
        "Stay connected with your inbox groups, no matter where they are or what they specialise in",
      color: "text-emerald-600",
    },
    {
      icon: "/icons/content.png",
      title: "Relevant content & feed",
      description:
        "View doctors' updates, explore trends, and build your network",
      color: "text-purple-600",
    },
    {
      icon: "/icons/analytics.png",
      title: "Impact score analytics",
      description:
        "Proprietary engagement metrics that measure meaningful professional & social interactions",
      color: "text-purple-600",
    },
    {
      icon: "/icons/encrypted.png",
      title: "Encrypted messages & calls",
      description:
        "End-to-end encryption ensures that only the sender and recipient can access messages and calls.",
      color: "text-purple-600",
    },
  ];

  const ourMission = [
    {
      icon: "/images/connection.svg",
      title: "Connection",
      description: "Near or Far : connect wherever you are",
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

  return (
    <PageLayout>
      <div className="min-h-screen font-sans">
        <Header />
        <section className="relative flex items-center justify-center mt-0 sm:mt-16 pb-6 overflow-hidden bg-white">
          <div className="relative z-10 w-full max-w-7xl text-center">
            <div className="md:hidden space-y-4 my-[13rem] ">
              <h2
                className="text-6xl text-pexilllin-secondary font-montserrat"
                style={{ fontWeight: 800 }}
              >
                Doctors <span className="px-6">United</span>
              </h2>
              <p className="px-3 pb-6 text-xl font-semibold text-pexilllin-primary">
                A platform where healthcare <br />
                professionals connect with each other, not with patients
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in-delay-2">
              <div className="w-full md:w-1/2 space-y-6 text-center md:flex md:flex-col md:items-center md:justify-center">
                <div className="hidden md:block space-y-6 md:max-w-xl animate-fade-in">
                  <div className="space-y-4">
                    <h2
                      className="text-6xl text-pexilllin-secondary font-montserrat"
                      style={{ fontWeight: 900 }}
                    >
                      Doctors United
                    </h2>

                    <p className="text-xl font-semibold text-pexilllin-primary leading-relaxed">
                      A platform where healthcare professionals connect with each
                      other, not with patients
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full relative md:w-1/2 text-center shadow-lg min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src="/images/Home.jpeg"
                  alt="Dummy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 grid gap-4">
          <p className="text-center text-3xl font-bold text-pexilllin-secondary mt-16">
            Our Product
          </p>
          <p className="text-center text-gray-500 text-lg mb-16">
            A Secure Platform for Doctors and Healthcare Stakeholders to Connect,
            Collaborate, and Grow — Built for Professionals, not Patients
          </p>
        </div>

        <section className="pt-2 max-w-4xl mx-auto px-4 ">
          <div className="mx-auto">
            <div className="grid gap-4 px-4">
              <p className="text-center text-3xl font-bold text-pexilllin-secondary">
                Our Features
              </p>
              <p className="text-center text-gray-500 text-lg">
                Discover the Future of Healthcare Networking{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-4 px-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>
        </section>

        <div
          id="our-mission"
          className="grid max-w-4xl mx-auto gap-4 px-4 mt-16 "
        >
          <p className="text-center text-3xl font-bold text-pexilllin-secondary">
            Our Goal
          </p>
          <p className="text-center text-gray-500 text-lg">
            Uniting Healthcare Professionals into One Ecosystem
          </p>

          <div className="grid gap-4 grid-rows-3 justify-center">
            {ourMission.map((mission, index) => (
              <div
                key={index}
                className="bg-[rgb(226,248,255)] text-pexilllin-primary px-3 py-2 rounded-full flex items-center gap-3 w-full transition"
              >
                <div className="bg-white rounded-full p-2 w-max">
                  <img
                    src={mission.icon}
                    alt={mission.title}
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col gap-0.5 text-start">
                  <p className="text-base font-semibold leading-tight">
                    {mission.title}
                  </p>
                  <p className="text-xs leading-snug text-pexilllin-primary">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 px-4 mt-16 mb-8">
          <p className="text-center text-3xl font-bold text-pexilllin-secondary">
            See Paxillin in action
          </p>

          <div className="flex items-center justify-center">
            <img
              src="/images/fakeVideo.png"
              alt="Paxillin in action preview"
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>

        <Testimonial />
        <FAQSection />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Index;
