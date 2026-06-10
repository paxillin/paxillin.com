"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Target,
  Heart,
  Award,
  Stethoscope,
  Brain,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

const About = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const teamValues = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Leveraging cutting-edge AI to create meaningful connections that advance healthcare knowledge, collaboration, and innovation.",
  },
  {
    icon: Stethoscope,
    title: "Medical Excellence",
    description:
      "Upholding the highest standards of professional and social integrity, trust, and accuracy across all features of our platform.",
  },
  {
    icon: Users,
    title: "Inclusive Healthcare Community",
    description:
      "Building bridges between healthcare professionals and socially engaged individuals to foster collaboration, knowledge sharing, and inclusive progress.",
  },
  {
    icon: Heart,
    title: "Secure Social Networking",
    description:
      "Enabling trusted connections between users through a secure, interactive platform that promotes meaningful engagement and collaboration.",
  },
];


const milestones = [
  {
    year: "2025",
    title: "Paxillin Founded",
    description:
      "Started with a vision to revolutionize professional and social healthcare networking.",
  },
  {
    year: "Q1 2027",
    title: "Alpha Development",
    description:
      "Core features developed with input from leading healthcare professionals and early adopters.",
  },
  {
    year: "Q2 2027",
    title: "Beta Testing Launch",
    description:
      "Expanded testing with 10,000+ verified medical professionals and community users.",
  },
  {
    year: "Q3 2027",
    title: "Public Release",
    description:
      "Full platform launch with comprehensive, compliant, enterprise-grade security.",
  },
];


const faqs = [
  {
    question:
      "What makes Paxillin different from other professional and social networking platforms?",
    answer:
      "Paxillin leverages AI-powered content categorization, proprietary engagement metrics like the Impact Score, and focuses on building meaningful professional and social connections—rather than simply collecting contacts. Our platform combines content sharing, community participation, and real-time communication into one cohesive ecosystem.",
  },
  {
    question: "When will Paxillin be available for download?",
    answer:
      "We're launching in phases: Alpha Testing (Q1 2025) for 100 users, Beta Testing (Q2 2025) for 1,000 users, and Public Release (Q3 2025) for everyone. Sign up now to get early access based on your preferred testing phase.",
  },
  {
    question: "Is Paxillin free to use?",
    answer:
      "Yes, Paxillin will offer a free tier with core networking features. We'll also provide premium features for advanced users and organizations. During the testing phases, all features will be available to participants at no cost.",
  },
  {
    question: "How does the AI-powered content recommendation work?",
    answer:
      "Our AI analyzes your professional and social interests, industry, connections, and engagement patterns to surface relevant content, suggest meaningful connections, and recommend communities that align with your personal or career goals.",
  },
  {
    question: "What is the Impact Score system?",
    answer:
      "Impact Score is our proprietary metric that measures the quality and depth of professional and social interactions. It goes beyond likes and comments to evaluate genuine engagement, helping users build authentic and lasting relationships.",
  },
  {
    question: "Will my data be secure on Paxillin?",
    answer:
      "Absolutely. We implement enterprise-grade security measures, end-to-end encryption for all communications, and provide users full control over their privacy settings. We never sell user data to third parties.",
  },
  {
    question: "Can I use Paxillin on multiple devices?",
    answer:
      "Yes, Paxillin will sync across all your devices. While we're launching on mobile first, web and desktop applications are planned for future releases to ensure seamless professional and social networking wherever you are.",
  },
  {
    question: "How can I provide feedback?",
    answer:
      "Users will have access to dedicated feedback channels, including in-app reporting tools, live support chat, and periodic surveys. Your input will play a key role in shaping the future of the platform.",
  },
];


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@Paxillin.com",
      description:
        "Get in touch for support, partnerships, or general inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team for urgent matters",
    },

    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7",
      description: "We're here to help during business hours",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-pax-cloud border-b border-pax-line">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <span className="pax-chip mb-5">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-pax-navy tracking-tight leading-[1.1] mb-6">
            About Paxillin
          </h1>
          <p className="text-lg md:text-xl text-pax-slate max-w-3xl mx-auto leading-relaxed">
           {/* We're on a mission to transform healthcare through meaningful professional and social connections. Paxillin bridges the gap between medical professionals and the broader community, fostering collaboration that advances patient care and drives medical innovation. */}


          Paxillin is India’s premier networking platform designed to empower doctors with seamless social and professional connections. We bring together medical professionals across the nation to collaborate, share expertise, and grow through vibrant communities, tailored groups, and dynamic event management tools. Our intuitive platform, built for Healthcare Professionals and Organizations by innovators, fosters meaningful interactions and streamlines professional workflows.

          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="pax-card p-6 md:p-8">
              <div>
                <div className="flex text-left items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pax-sky flex items-center justify-center mr-4 shrink-0">
                    <Target className="h-6 w-6 text-pax-cyan" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-pax-navy tracking-tight">
                    Our Mission
                  </h2>
                </div>
                <p className="md:text-lg text-pax-slate text-left leading-relaxed">
                  {/* To create the Life Guardian's ecosystem, Paxillin focuses on
                  three pillars: Connection — whether near or
                  far, connect wherever you are. Integration —
                  seamlessly share interests, expertise, and collaborate
                  effortlessly.Movement — grow your medical
                  network and join the movement driving healthcare innovation. */}
                  Paxillin empowers India’s doctors to forge seamless connections and share expertise, laying the foundation for a doctor-led healthcare ecosystem. By uniting medical professionals nationwide, we foster collaboration and professional growth, enabling every healthcare professional to thrive in a dynamic network.
                </p>
              </div>
            </div>

            <div className="pax-card p-6 md:p-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pax-sky flex items-center justify-center mr-4 shrink-0">
                    <Award className="h-6 w-6 text-pax-cyan" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-pax-navy tracking-tight">
                    Our Vision
                  </h2>
                </div>
                <p className="md:text-lg text-pax-slate text-left leading-relaxed">
                  {/* A world where every healthcare Professional and Social has
                  access to a national network of peers, enabling rapid
                  knowledge transfer and continuous Professional and Social
                  development. */}
                  To be India’s leading platform for doctors, revolutionizing how medical professionals connect, collaborate, and innovate. We envision a future where every healthcare professional in India is empowered by a unified, dynamic network that drives excellence and shapes the future of healthcare collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Paxillin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamValues.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 border-0 text-left shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <value.icon className="h-8 w-8 text-pexilllin-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Timeline */}
      <section className="py-16 md:py-20 px-4 bg-pax-cloud">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="pax-section-title mb-3">Our Journey</h2>
            <p className="pax-section-sub max-w-3xl mx-auto">
              From concept to revolutionizing professional and social networking
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-pax-line"></div>

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-10 mb-8 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-pax-cyan ring-4 ring-pax-sky z-10"></div>

                <div className="pax-card p-6 text-left">
                  <span className="pax-chip mb-3">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-pax-ink mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm md:text-base text-pax-slate leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="md:text-xl text-gray-600">
              Everything you need to know about Paxillin
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    {faq.question}
                    <h3 className="md:text-lg font-semibold text-gray-900 pr-8"></h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about Paxillin? We'd love to hear from you! Send us a message, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 text-left border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-pexilllin-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-pexilllin-primary font-medium mb-2">
                            {info.details}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h3>
              <Card className="p-8 border-0 shadow-xl">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2 text-left"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Dr. John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2 text-left"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="john.smith@hospital.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2 text-left"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Inquiry about Paxillin"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2 text-left"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pexilllin-primary focus:border-pexilllin-primary"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-pexilllin-primary text-white py-3"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="pax-section-title mb-4">
            Join the Future of Healthcare Networking
          </h2>
          <p className="pax-section-sub mb-8 max-w-3xl mx-auto">
            Be part of a platform designed by IT Professionals - for Healthcare
            Professionals and Organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/features" className="pax-btn-primary !px-8">
              Explore Features
            </Link>
            <Link href="/release" className="pax-btn-outline !px-8">
              View Release Timeline
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageLayout>
  );
};

export default About;
