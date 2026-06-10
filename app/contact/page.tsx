"use client";

import { useState } from "react";
import FeedbackForm from "@/components/forms/FeedbackForm";
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
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <span className="pax-chip mb-5">We&apos;re Here to Help</span>
            <h1 className="pax-section-title mb-4">Contact Us</h1>
            <p className="pax-section-sub max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to help healthcare professionals and organizations
              to connect , collaborate and have meaningful engagement. Reach out
              to us for support, partnerships, or general inquiries.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {contactInfo.map((info) => (
                <div key={info.title} className="pax-card p-8 text-center">
                  <div className="w-12 h-12 bg-pax-sky rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-pax-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-pax-ink mb-2">
                    {info.title}
                  </h3>
                  <p className="text-base text-pax-cyan font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-pax-slate">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20 bg-white">
          <FeedbackForm />
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Contact;
