"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
      className: "text-pax-cyan",
    });
    setEmail("");
  };

  const socialLinks = [
    { name: "Facebook", href: "/social", icon: "/icons/facebook.png" },
    { name: "Instagram", href: "/social", icon: "/icons/instagram.png" },
    { name: "LinkedIn", href: "/social", icon: "/icons/linkedIn.png" },
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
    <footer className="bg-pax-navy text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 relative overflow-hidden">
        <img
          src="/images/doctorSeal.svg"
          alt=""
          aria-hidden="true"
          className="hidden lg:block w-[140px] absolute right-10 top-8 opacity-80 object-contain"
        />
        <div className="container mx-auto px-4 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Stay Connected with Healthcare Innovation
            </h3>
            <p className="text-sm md:text-base text-white/70 mb-8">
              Get the latest updates on Paxillin&apos;s development, healthcare
              networking insights, and early access opportunities.
            </p>
            <form
              onSubmit={handleNewsletterSignup}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50 px-5"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-pax-cyan hover:bg-pax-cyan-dark text-white font-semibold px-7 py-2.5 text-sm transition-colors"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white rounded-xl p-1 inline-flex">
                <img
                  src="/lovable-uploads/883ae812-41b7-4f12-8dc5-599b1c93a623.png"
                  alt="Paxillin"
                  className="w-9 h-9"
                />
              </span>
              <span className="text-2xl font-bold">Paxillin</span>
            </div>
            <p className="text-lg font-semibold mb-2">
              Empowering Doctor Connections
            </p>
            <p className="text-white/60 text-sm mb-6 max-w-sm leading-relaxed">
              The Healthcare Networking Platform — Secure, Collaborative, and
              Designed for Meaningful Engagement
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pax-cyan transition-colors duration-200"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors duration-200"
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Paxillin. All Rights Reserved.
              Enterprise-Grade Security. Compliant Healthcare Networking
              Platform.
            </p>
            <span className="pax-chip !bg-white/10 !text-white/80">
              🔒 Secure Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
