"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  Calendar,
  Users,
  Zap,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const Release = () => {
 const timelinePhases = [
  {
    phase: "alpha",
    title: "Alpha Testing Phase",
    period: "Q1 2026",
    status: "upcoming",
    participants: "100 healthcare professionals",
    duration: "3 months",
    features: [
      "Core networking functionality",
      "Basic and relevant matching",
      "Secure messaging system",
      "Professional and social profile setup",
      "Direct feedback channel with developers",
      "Early access to core features"
    ],
    goals: [
      "Test core platform stability",
      "Gather initial user feedback",
      "Validate professional and social networking concepts",
      "Identify critical improvements"
    ],
    // requirements: [
    //   "Verified healthcare professional status",
    //   "Active medical license",
    //   "Commitment to provide detailed feedback",
    //   "Willingness to participate in user interviews"
    // ]
  },
  {
    phase: "beta",
    title: "Beta Testing Phase",
    period: "Q2 2026",
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
      "Professional verification system"
    ],
    goals: [
      "Scale testing across specialties",
      "Refine recommendations",
      "Test community engagement features",
      "Optimize mobile user experience"
    ],
    // requirements: [
    //   "Verified healthcare professional status",
    //   "Active engagement commitment",
    //   "Feedback on specialty-specific features",
    //   "Community participation"
    // ]
  },
  {
    phase: "public",
    title: "Public Release",
    period: "Q3 2026",
    status: "planned",
    participants: "Open to all Healthcare professionals",
    duration: "Ongoing",
    features: [
      "Complete platform access",
      "All premium features included",
            "Flawless fusion of every feature",
                  "Streamlined user experience",


     
      // "Advanced analytics",
      // "Enterprise integrations",
      // "National community access",
      // "Professional certification programs"
    ],
    goals: [
      "Scale to 10,000+ active users",
      "Nationwide launch for healthcare professionals",
            "Enable seamless collaboration among healthcare professionals",
                  "Establish the healthcare ecosystem",


      
    ],
    // requirements: [
    //   "Verified professional status",
    //   "Adherence to community guidelines",
    //   "Subscription plans available",
    //   "Access to full feature set"
    // ]
  }
];


 const milestones = [
  {
    date: "Q1 2026",
    title: "Alpha Launch",
    description:
      "Limited release to 100 selected healthcare professionals.",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    date: "Q2 2026",
    title: "Beta Launch",
    description:
      "Expanded access to 1,000 medical professionals nationwide.",
    icon: Globe,
    color: "bg-purple-500"
  },
  {
    date: "Q3 2026",
    title: "Public Launch",
    description:
      "Full platform availability for all healthcare professionals.",
    icon: CheckCircle,
    color: "bg-green-500"
  }
];


  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-6 px-4">
        <div className="container mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 text-base font-semibold bg-[rgb(226,248,255)] text-paxillin-primary border-0"
          >
           Release Roadmap 2026
          </Badge>
       <h1 className="text-5xl md:text-7xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-[#0f2c4d] via-[#165176] to-[#3CAFE6]

 mb-8">
            Paxillin Release
            <span className=""> Timeline</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-4">
           Follow our journey from exclusive alpha testing to a nationwide public launch.
Be part of the revolution in professional and social healthcare networking.
          </p>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-4 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Milestones
            </h2>
            <p className="md:text-xl text-gray-600">
              Key dates and achievements in our release journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.date}
                className="md:flex relative items-center mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className=" my-5 justify-center flex flex-col-reverse md:flex-row items-center">
                  <div className="flex-shrink-0 w-24 text-center md:text-right md:mr-8">
                    <span className="text-sm font-semibold text-gray-500">
                      {milestone.date}
                    </span>
                  </div>

                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center md:mr-8 relative shadow-lg z-10`}
                  >
                    <milestone.icon className="h-6 w-6 text-white" />
                    {index < milestones.length - 1 && (
                      <div className="hidden md:block absolute left-[50%] -top-2 mt-12 w-0.5 -z-[1] h-[130px] bg-gray-200"></div>
                    )}
                  </div>
                </div>

                <div className="md:flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Phase Information */}
      <section className="py-24 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Testing Phase Details
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              {/* A comprehensive overview of each testing phase, its requirements, and what to expect. */}
            </p>
          </div>

          <div className="space-y-16">
            {timelinePhases.map((phase, index) => (
              <Card
                key={phase.phase}
                className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 cursor-pointer lg:grid-cols-3 gap-0">
                    {/* Phase Header */}
                    <div className={`p-8 bg-paxillin-primary text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white border-0"
                        >
                          {phase.period}
                        </Badge>
                        {/* <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{phase.duration}</span>
                        </div> */}
                      </div>

                      <h3 className="text-lg md:text-3xl font-bold mb-4">{phase.title}</h3>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span className="text-sm text-left">{phase.participants}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">
                            Starting {phase.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features & Goals */}
                    <div className="p-8 col-span-2   grid md:grid-cols-2 gap-5 w-full    ">
                      <div>
                        <h4 className="text-xl font-bold my-6 text-gray-900">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {phase.features.slice(0, 4).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-start text-left text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold my-6 text-gray-900 ">
                          Phase Goals
                        </h4>
                        <ul className="space-y-2">
                          {phase.goals.map((goal, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-start text-left text-sm text-gray-600"
                            >
                              <div className="w-2 h-2 bg-paxillin-primary rounded-full mr-3 flex-shrink-0"></div>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Requirements & Actions */}
                    {/* <div className="p-8 bg-gray-50">
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {phase.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className={`w-full bg-paxillin-primary text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105`}
                      >
                        Apply for {phase.title}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 px-4 bg-paxillin-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Don't miss your chance to shape the future
          </h2>
          <p className="md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
Join our testing program and be among the first healthcare professionals to experience revolutionary networking.    
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-paxillin-primary hover:bg-gray-100 px-8 py-4 md:text-lg font-semibold"
            >
              Apply for Alpha Testing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-paxillin-primary hover:bg-white px-8 py-4 md:text-lg font-semibold"
            >
              Join Beta Waitlist
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
    </PageLayout>
  );
};

export default Release;
