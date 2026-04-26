"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { PaxillinLogoMark } from "@/components/brand/PaxillinLogoMark";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
      className: "text-primary",
    });
    setEmail("");
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "/social",
      icon: (
        <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5 object-contain" />
      ),
    },
    {
      name: "Instagram",
      href: "/social",
      icon: (
        <img
          src="/icons/instagram.png"
          alt="Instagram"
          className="w-5 h-5 object-contain"
        />
      ),
    },
    {
      name: "LinkedIn",
      href: "/social",
      icon: (
        <img
          src="/icons/linkedIn.png"
          alt="LinkedIn"
          className="w-5 h-5 object-contain"
        />
      ),
    },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Release Timeline", href: "/release" },
        { name: "Our Mission", href: "/about" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Social Media", href: "/social" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Child Safety Policy", href: "/child-safety" },
        { name: "Delete Account", href: "/delete-account" },
      ],
    },
  ];

  return (
    <footer className="bg-paxillin-ink text-white pb-10 font-sans">
      <div className="border-b border-white/10">
        <div className="content-container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
              Product updates
            </h3>
            <p className="mb-8 mt-3 text-sm text-white/60 md:text-base">
              Occasional notes on Paxillin’s development and early access.
            </p>

            <form
              onSubmit={handleNewsletterSignup}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-11 flex-1 border-white/20 bg-white/5 text-white placeholder:text-white/40"
                required
              />
              <Button type="submit" className="shrink-0 sm:min-w-[8rem]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="content-container relative py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <PaxillinLogoMark className="h-10 w-10" />
              <span className="font-heading text-2xl font-semibold text-white">
                Paxillin
              </span>
            </div>
            <p className="mb-2 max-w-sm text-left text-lg text-white/90">
              Better care starts with better-connected professionals.
            </p>
            <p className="mb-6 max-w-sm text-left text-sm text-white/55">
              A focused space for healthcare professionals to collaborate — not
              a social feed.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="text-left">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-paxillin-mist">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="content-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-white/50 md:text-left">
            © 2026 Paxillin. All rights reserved.
          </p>
          <span className="text-sm text-paxillin-mist">Secure, privacy-first</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
