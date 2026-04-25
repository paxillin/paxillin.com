"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const Features = () => {
  const features = [
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
      color: "text-blue-600",
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
      color: "text-green-600",
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
      color: "text-purple-600",
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
      color: "text-blue-600",
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
      color: "text-emerald-600",
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
      color: "text-purple-600",
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
      color: "text-purple-600",
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
      color: "text-purple-600",
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
        <Header />

        {/* Hero Section */}
        <section className="pt-16 pb-16 px-0.4">
          <div className="container mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-3 text-base font-semibold bg-[rgb(226,248,255)] text-pexilllin-primary border-0"
            >
              Complete Feature Overview
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f2c4d] via-[#165176] to-[#3CAFE6]">
                Healthcare Professionals
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Paxillin delivers powerful features tailored for healthcare
              professionals, making it easier to connect, collaborate, and share
              across the healthcare ecosystem.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto">
            <div className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex flex-col text-left lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Mobile Mockup */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="w-80 h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                          {/* Phone Screen Content */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col">
                            {/* Status Bar */}
                            <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
                              <span>9:41</span>
                              <div className="flex items-center gap-1">
                                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                                <span>100%</span>
                              </div>
                            </div>

                            {/* App Header */}
                            <div className="flex items-center gap-3 mb-6">
                              <img
                                src="/lovable-uploads/883ae812-41b7-4f12-8dc5-599b1c93a623.png"
                                alt="paxillin"
                                className="w-8 h-8"
                              />
                              <span className="text-lg font-bold text-pexilllin-primary">
                                Paxillin
                              </span>
                            </div>

                            {/* Feature Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center mb-4 mx-auto">
                              <img
                                src={feature.icon}
                                alt={feature.title}
                                className="h-8 w-8"
                              />
                            </div>

                            {/* Feature Title in Mockup */}
                            <h3 className="text-center text-lg font-bold text-gray-900 mb-2">
                              {feature.title}
                            </h3>

                            {/* Mockup Feature Description */}
                            <p className="text-center text-sm text-gray-600 mb-4">
                              {feature.mockupFeature}
                            </p>

                            {/* Mock Interface Elements */}
                            <div className="flex-1 space-y-3">
                              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <img
                                      src={feature.icon}
                                      alt={feature.title}
                                      className="h-5 w-5 object-contain"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Navigation */}
                            <div className="flex justify-around pt-4 border-t border-gray-200">
                              <div className="w-6 h-6 bg-blue-200 rounded"></div>
                              <div className="w-6 h-6 bg-gray-200 rounded"></div>
                              <div className="w-6 h-6 bg-gray-200 rounded"></div>
                              <div className="w-6 h-6 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Details */}
                  <div className="w-full lg:w-1/2">
                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="min-w-[64px] min-h-[64px] aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center shrink-0">
                            <img
                              src={feature.icon}
                              alt={feature.title}
                              className="w-8 h-8 object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {feature.title}
                            </h3>
                          </div>
                        </div>

                        {/* Problem Statement */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Problem This Solves
                          </h4>
                          <p className="text-gray-700 leading-relaxed bg-red-50 p-4 rounded-lg border-l-4 border-red-200">
                            {feature.problem}
                          </p>
                        </div>

                        {/* Solution Description */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-pexilllin-primary mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-pexilllin-primary rounded-full"></div>
                            Our Solution
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-emerald-600 mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            Key Benefits
                          </h4>
                          <ul className="space-y-3">
                            {feature.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-700"
                              >
                                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-pexilllin-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Medical Network?
            </h2>
            <p className="md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
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
