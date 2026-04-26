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
      className: "text-paxillin-secondary",
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
    <footer className="border-t border-paxillin-mist/50 bg-paxillin-parchment pb-10 font-montserrat text-paxillin-secondary">
      <div className="border-b border-paxillin-secondary/20 bg-paxillin-secondary">
        <div className="content-container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
              Product updates
            </h3>
            <p className="mb-8 mt-3 text-sm text-white/75 md:text-base">
              Occasional notes on Paxillin’s development and early access.
            </p>

            <form
              onSubmit={handleNewsletterSignup}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                variant="marketing"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-11 flex-1"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="shrink-0 border-white/45 bg-white/10 text-white hover:border-white/70 hover:bg-white/20 hover:text-white sm:min-w-[8rem]"
              >
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
              <span className="font-heading text-2xl font-semibold text-paxillin-secondary">
                Paxillin
              </span>
            </div>
            <p className="mb-2 max-w-sm text-left text-lg font-medium text-paxillin-secondary">
              Better care starts with better-connected professionals.
            </p>
            <p className="mb-6 max-w-sm text-left text-sm text-paxillin-ink/65">
              A focused space for healthcare professionals to collaborate — not
              a social feed.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paxillin-secondary/35 bg-paxillin-secondary shadow-md transition-colors hover:border-paxillin-secondary hover:bg-paxillin-900"
                  aria-label={social.name}
                >
                  <span className="pointer-events-none [&_img]:h-5 [&_img]:w-5 [&_img]:object-contain">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="text-left">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-paxillin-sage">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-paxillin-ink/70 transition-colors hover:text-paxillin-secondary"
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

      <div className="border-t border-paxillin-mist/40">
        <div className="content-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-paxillin-ink/55 md:text-left">
            © 2026 Paxillin. All rights reserved.
          </p>
          <span className="text-sm text-paxillin-ink/50">Secure, privacy-first</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
