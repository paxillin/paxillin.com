"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Users,
  TrendingUp,
  Calendar,
  Bell,
   Twitter, Instagram, Linkedin, Youtube
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
    color: "from-gray-800 to-black",
    icon: <Twitter className="w-5 h-5 text-[#1DA1F2]" />,
    posts: [
      {
        content:
          "Exciting news! Our AI-powered matching system has achieved 94% accuracy in connecting healthcare professionals with relevant colleagues.",
        engagement: "127 likes, 23 retweets",
        tags: ["#PaxUp", "#PaxNow", ],
        time: "2 hours ago"
      },
      {
        content:
          "Alpha testing applications are now open! Limited spots available for verified healthcare professionals. Apply now: link.paxillin.com/alpha",
        engagement: "89 likes, 45 retweets",
        tags: [ "#PaxMed", "PaxDoc"],
        time: "1 day ago"
      }
    ]
  },
  {
    name: "LinkedIn",
    handle: "/company/paxillin",
    url: "https://linkedin.com/company/paxillin",
    followers: "5.8K",
    description:
      "Insights for professionals and socially engaged individuals, industry analysis, and thought leadership in healthcare networking. Connect with our team and community.",
    color: "from-blue-600 to-blue-700",
    icon:  <Linkedin className="w-5 h-5 text-[#ffffff]" />,
    posts: [
      {
        content:
          "How AI is transforming professional networking in healthcare: Our latest whitepaper explores the intersection of technology and medical collaboration.",
        engagement: "234 reactions, 67 comments",
        tags: ["#PaxToday", "#PaxTeam",  ],
        time: "3 hours ago"
      },
      {
        content:
          "Meet Dr. Sarah Chen, one of our alpha testers: 'Paxillin has revolutionized how I connect with colleagues in cardiology. The AI recommendations are incredibly accurate.'",
        engagement: "156 reactions, 42 comments",
        tags: ["#PaxUp", "#PaxNow", ],
        time: "2 days ago"
      }
    ]
  },
  {
    name: "Instagram",
    handle: "@paxillin",
    url: "https://instagram.com/paxillin",
    followers: "3.2K",
    description:
      "Behind-the-scenes content, team highlights, and visual stories of professionals and socials connecting meaningfully..",
    color: "from-pink-500 to-purple-600",
    icon: <Instagram className="w-5 h-5 text-[#ffffff]" />,
    posts: [
      {
        content:
          "Behind the scenes: Our AI team is working on the next generation of professional matching algorithms ✨ #TechTeam #Innovation",
        engagement: "298 likes, 34 comments",
        tags: ["#PaxToday", "#PaxTeam", ],
        time: "4 hours ago"
      },
      {
        content:
          "User spotlight: Dr. Martinez shares how Paxillin helped him find collaborators for his pediatric research project 👨‍⚕️ #UserStory",
        engagement: "187 likes, 28 comments",
        tags: ["#PaxUp", "#PaxNow", ],
        time: "1 day ago"
      }
    ]
  },
  {
    name: "YouTube",
    handle: "/c/paxillin",
    url: "https://youtube.com/c/paxillin",
    followers: "1.9K",
    description:
      "Dive into educational videos, platform walkthroughs, and real stories from professionals driving innovation in medical networking.",
    color: "from-red-500 to-red-600",
    icon: <Youtube className="w-5 h-5 text-[#ffffff]" />,
    posts: [
      {
        content:
          "NEW VIDEO: 'The Future of Healthcare Networking' — a 15-minute deep dive into how AI is changing professional connections.",
        engagement: "1.2K views, 89 likes",
        tags: ["#PaxUp", "#PaxNow",  ],
        time: "1 day ago"
      },
      {
        content:
          "Platform Demo: See Paxillin in action — alpha testing preview for healthcare professionals.",
        engagement: "890 views, 67 likes",
        tags: [  "#PaxMed", "PaxDoc"],
        time: "3 days ago"
      }
    ]
  }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center mb-4">
            <Badge
              variant="secondary"
              className="px-6 py-3 text-base font-semibold bg-[rgb(226,248,255)] text-paxillin-primary border-0"
            >
              Social Community Hub
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f2c4d] via-[#165176] to-[#3CAFE6]
"> Connect With Us </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
          Join our growing community of healthcare professionals across social media. Stay updated, engage with insights, and be part of the conversation shaping the future of medical networking.
          </p>
        </div>
      </section>

     <section className="py-12 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4">
    {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-paxillin-primary">
      Connect With Us
    </h2> */}

   <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#112B45] mb-10">
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
          <div className="w-20 h-20 bg-[#138DB6] shadow-xl rounded-full flex items-center justify-center group-hover:shadow-2xl transition-shadow">
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-[#138DB6] transition-colors">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

  </div>
</section>





      {/* Community Stats */}
      {/* <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={stat.metric} className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-paxillin-primary" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.metric}</div>
                <div className="text-xs text-emerald-600 font-semibold">{stat.growth} this month</div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Social Platforms */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Follow Our Journey
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get platform updates, healthcare insights, and behind-the-scenes content across all our social channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <Card
                key={platform.name}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0 text-left">
                  Platform Header
                  <div
                    className={`p-6 bg-gradient-to-r ${platform.color} text-white`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
    {platform.icon}
  </div>
  <div className="flex flex-col justify-center">
    <h3 className="text-xl font-bold leading-tight">{platform.name}</h3>
    <p className="text-sm opacity-90 leading-snug">{platform.handle}</p>
  </div>
</div>

                      <div className="text-right">
                        <div className="text-2xl font-bold">{platform.followers}</div>
                        <div className="text-xs opacity-90">Followers</div>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-4">
                      {platform.description}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(platform.url, "_blank")}
                    >
                      Follow Us <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  Recent Posts
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Recent Posts
                    </h4>
                    <div className="space-y-4">
                      {platform.posts.map((post, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-blue-200 pl-4 py-2"
                        >
                          <p className="text-sm text-gray-700 mb-2">
                            {post.content}
                          </p>

                          <div className="flex my-2 flex-wrap gap-2">
                            {post.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-block cursor-pointer text-sm bg-blue-100 text-blue-800  px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{post.engagement}</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      Upcoming Content Calendar
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Content
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay tuned for our upcoming content across all platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
              {upcomingContent.map((content, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-paxillin-primary bg-white/80 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className=" items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {content.platform}
                        </Badge>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {content.title}
                        </h3>
                        <p className="text-sm text-gray-600">{content.type}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Bell className="mr-2 h-4 w-4" />
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-24 px-4 bg-paxillin-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Never Miss an Update
          </h2>
          <p className="md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
         Join our newsletter for exclusive content, early access notifications, and healthcare networking insights — delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-paxillin-primary hover:bg-gray-100 px-8 py-6 font-semibold">
              Join Us
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
    </PageLayout>
  );
};

export default Social;
