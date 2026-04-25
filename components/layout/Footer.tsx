"use client";

import { Button } from "@/components/ui/button";
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
      className: "text-pexilllin-primary",
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
    <footer className="bg-gray-900 text-white pb-12 font-sans">
      {/* Newsletter Section */}
      <div className="hidden lg:flex">
        <img
          src="/images/doctorSeal.svg"
          alt="Doctor Approved"
          className="w-[150px] mt-6 absolute right-10 h-[200px] object-contain"
        />
      </div>
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg md:text-3xl font-bold mb-4">
              Stay Connected with Healthcare Innovation
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-8">
              Get the latest updates on Paxillin's development, healthcare
              networking insights, and early access opportunities.
            </p>

            <form
              onSubmit={handleNewsletterSignup}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="bg-pexilllin-primary text-white">
                Join Us
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container relative mx-auto px-4 py-12">
        <div className="lg:hidden">
          <img
            src="/images/doctorSeal.svg"
            alt="Doctor Approved"
            className="w-[100px] mt-3 top-0 absolute right-5 h-[80px] object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-2">
              <img
                src="/lovable-uploads/883ae812-41b7-4f12-8dc5-599b1c93a623.png"
                alt="Paxillin"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-pexilllin-primary">
                Paxillin
              </span>
            </div>
            <h1 className="text-white text-left text-xl my-3 max-w-sm">
              Empowering Doctor Connections
            </h1>
            <p className="text-gray-400 text-left mb-6 max-w-sm ">
              The Healthcare Networking Platform — <br />
              Secure, Collaborative, and Designed for Meaningful Engagement
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-pexilllin-primary transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="text-left">
              <h4 className="text-lg font-semibold mb-4 text-pexilllin-primary">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Paxillin. All Rights Reserved. Compliant Enterprise-Grade
              Security. Compliant Healthcare Networking Platform.
            </p>
            <span className="text-pexilllin-primary">🔒 Secure Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
