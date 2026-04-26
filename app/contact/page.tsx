"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import FeedbackForm from "@/components/forms/FeedbackForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email support",
      details: "support@paxillin.com",
      description: "For general inquiries and support",
    },
    {
      icon: MessageCircle,
      title: "Partnership inquiries",
      details: "info@paxillin.com",
      description: "For healthcare organizations and institutions",
    },
    {
      icon: Clock,
      title: "Response time",
      details: "Within 24 hours",
      description: "We aim to respond to all inquiries promptly",
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />

        <section className="px-4 pb-12 pt-16">
          <div className="container mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 border border-paxillin-mist/50 bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-paxillin-ink/55"
            >
              Contact
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:mb-8 md:text-6xl md:leading-[1.08]">
              We are here to
              <span className="mt-1 block text-paxillin-secondary md:mt-2">help</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-paxillin-ink/65 md:text-lg">
              Reach out for support, partnerships, or general questions. We work with
              healthcare professionals and organizations who want meaningful,
              secure collaboration.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="rounded-2xl border border-paxillin-mist/50 bg-white shadow-card transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-paxillin-mist/60 bg-paxillin-parchment/50">
                      <info.icon className="h-7 w-7 text-paxillin-secondary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-paxillin-secondary">
                      {info.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-paxillin-secondary">
                      {info.details}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-paxillin-ink/65">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-paxillin-mist/40 bg-paxillin-parchment/20 px-4 py-12">
          <div className="container mx-auto">
            <FeedbackForm />
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Contact;
