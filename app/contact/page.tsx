"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FeedbackForm from "@/components/forms/FeedbackForm";

import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  User,
  Building,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@paxillin.com",
      description: "For general inquiries and support",
    },
    {
      icon: MessageCircle,
      title: "Partnership Inquiries",
      details: "info@paxillin.com",
      description: "For healthcare organizations and institutions",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We aim to respond to all inquiries promptly",
    },
    // {
    //   icon: MapPin,
    //   title: "Headquarters",
    //   details: "Global Remote Team",
    //   description: "Serving healthcare Professional and Socials worldwide"
    // }
  ];

  const inquiryTypes = [
    {
      icon: User,
      title: "General Support",
      description: "Questions about using Paxillin",
    },
    // {
    //   icon: Building,
    //   title: "Institutional Partnerships",
    //   description: "Hospital systems, medical schools, and healthcare organizations"
    // },
    {
      icon: MessageCircle,
      title: "Beta Testing",
      description: "Join our testing program or provide feedback",
    },
  ];

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-[#0f2c4d] via-[#165176] to-[#3CAFE6]

 mb-8"
          >
            Contact <span className="">Us</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help healthcare professionals and organizations to
            connect , collaborate and have meaningful engagement. Reach out to
            us for support, partnerships, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-paxillin-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-paxillin-primary font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-base">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FeedbackForm />

      <Footer />
    </div>
    </PageLayout>
  );
};

export default Contact;
