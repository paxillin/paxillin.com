"use client";

import {
  Heart,
  MessageCircle,
  Users,
  TrendingUp,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const fbIcon = "/icons/facebook.png";
const twitterIcon = "/icons/twitter.png";
const instagramIcon = "/icons/instagram.png";
const linkedinIcon = "/icons/linkedIn.png";
const youtubeIcon = "/icons/youtube.png";

const Social = () => {
  const socialPlatforms = [
    {
      name: "Twitter / X",
      handle: "@paxillin",
      url: "https://twitter.com/paxillin",
      followers: "2.5K",
      description:
        "Daily updates, healthcare industry insights, and platform developments. Join the conversation on the future of medical networking.",
      icon: <Twitter className="w-5 h-5 text-pax-cyan" />,
      posts: [
        {
          content:
            "Exciting news! Our AI-powered matching system has achieved 94% accuracy in connecting healthcare professionals with relevant colleagues.",
          engagement: "127 likes, 23 retweets",
          tags: ["#PaxUp", "#PaxNow"],
          time: "2 hours ago",
        },
        {
          content:
            "Alpha testing applications are now open! Limited spots available for verified healthcare professionals. Apply now: link.paxillin.com/alpha",
          engagement: "89 likes, 45 retweets",
          tags: ["#PaxMed", "PaxDoc"],
          time: "1 day ago",
        },
      ],
    },
    {
      name: "LinkedIn",
      handle: "/company/paxillin",
      url: "https://linkedin.com/company/paxillin",
      followers: "5.8K",
      description:
        "Insights for professionals and socially engaged individuals, industry analysis, and thought leadership in healthcare networking. Connect with our team and community.",
      icon: <Linkedin className="w-5 h-5 text-pax-cyan" />,
      posts: [
        {
          content:
            "How AI is transforming professional networking in healthcare: Our latest whitepaper explores the intersection of technology and medical collaboration.",
          engagement: "234 reactions, 67 comments",
          tags: ["#PaxToday", "#PaxTeam"],
          time: "3 hours ago",
        },
        {
          content:
            "Meet Dr. Sarah Chen, one of our alpha testers: 'Paxillin has revolutionized how I connect with colleagues in cardiology. The AI recommendations are incredibly accurate.'",
          engagement: "156 reactions, 42 comments",
          tags: ["#PaxUp", "#PaxNow"],
          time: "2 days ago",
        },
      ],
    },
    {
      name: "Instagram",
      handle: "@paxillin",
      url: "https://instagram.com/paxillin",
      followers: "3.2K",
      description:
        "Behind-the-scenes content, team highlights, and visual stories of professionals and socials connecting meaningfully..",
      icon: <Instagram className="w-5 h-5 text-pax-cyan" />,
      posts: [
        {
          content:
            "Behind the scenes: Our AI team is working on the next generation of professional matching algorithms ✨ #TechTeam #Innovation",
          engagement: "298 likes, 34 comments",
          tags: ["#PaxToday", "#PaxTeam"],
          time: "4 hours ago",
        },
        {
          content:
            "User spotlight: Dr. Martinez shares how Paxillin helped him find collaborators for his pediatric research project 👨‍⚕️ #UserStory",
          engagement: "187 likes, 28 comments",
          tags: ["#PaxUp", "#PaxNow"],
          time: "1 day ago",
        },
      ],
    },
    {
      name: "YouTube",
      handle: "/c/paxillin",
      url: "https://youtube.com/c/paxillin",
      followers: "1.9K",
      description:
        "Dive into educational videos, platform walkthroughs, and real stories from professionals driving innovation in medical networking.",
      icon: <Youtube className="w-5 h-5 text-pax-cyan" />,
      posts: [
        {
          content:
            "NEW VIDEO: 'The Future of Healthcare Networking' — a 15-minute deep dive into how AI is changing professional connections.",
          engagement: "1.2K views, 89 likes",
          tags: ["#PaxUp", "#PaxNow"],
          time: "1 day ago",
        },
        {
          content:
            "Platform Demo: See Paxillin in action — alpha testing preview for healthcare professionals.",
          engagement: "890 views, 67 likes",
          tags: ["#PaxMed", "PaxDoc"],
          time: "3 days ago",
        },
      ],
    },
  ];

  const communityStats = [
    {
      metric: "Total Followers",
      value: "13.4K",
      growth: "+12%",
      icon: Users,
    },
    {
      metric: "Monthly Engagement",
      value: "45.7K",
      growth: "+18%",
      icon: Heart,
    },
    {
      metric: "Community Reach",
      value: "120K",
      growth: "+25%",
      icon: TrendingUp,
    },
    {
      metric: "Active Discussions",
      value: "289",
      growth: "+8%",
      icon: MessageCircle,
    },
  ];

  const upcomingContent = [
    {
      date: "Jan 25",
      platform: "Instagram",
      type: "User Stories",
      title: "Alpha Tester Spotlight Series",
    },
    {
      date: "Jan 22",
      platform: "Twitter",
      type: "Live Discussion",
      title: "Twitter Spaces: Future of Healthcare Networking",
    },
    {
      date: "Jan 18",
      platform: "YouTube",
      type: "Product Demo",
      title: "Advanced Features Preview: Community Tools",
    },
    {
      date: "Jan 15",
      platform: "LinkedIn",
      type: "Thought Leadership",
      title: "The Role of AI in Medical Education Networks",
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <span className="pax-chip mb-5">Social Community Hub</span>
            <h1 className="pax-section-title mb-4">Connect With Us</h1>
            <p className="pax-section-sub max-w-3xl mx-auto">
              Join our growing community of healthcare professionals across
              social media. Stay updated, engage with insights, and be part of
              the conversation shaping the future of medical networking.
            </p>
          </div>
        </section>

        {/* Social channels */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="pax-card p-8 md:p-12">
              <h2 className="text-2xl font-bold text-pax-navy tracking-tight text-center mb-10">
                Connect With Us
              </h2>

              <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 justify-center">
                {[
                  { name: "Facebook", icon: fbIcon },
                  { name: "Instagram", icon: instagramIcon },
                  { name: "LinkedIn", icon: linkedinIcon },
                  // { name: "YouTube", icon: youtubeIcon },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-3 group transition duration-300 transform hover:scale-105"
                  >
                    <div className="w-20 h-20 bg-pax-sky rounded-full flex items-center justify-center border border-pax-line transition-shadow group-hover:shadow-[0_8px_24px_rgba(25,63,99,0.12)]">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-pax-ink group-hover:text-pax-cyan transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Social;
