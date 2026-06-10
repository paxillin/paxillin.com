"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Release Timeline", href: "/release" },
    { name: "About", href: "/about" },
    { name: "Social", href: "/social" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleScroll = () => setIsMenuOpen(false);

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
    <header
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-pax-line"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/lovable-uploads/883ae812-41b7-4f12-8dc5-599b1c93a623.png"
              alt="Paxillin"
              className="w-11 h-11 object-contain"
            />
            <span className="text-2xl font-bold text-pax-navy tracking-tight">
              Paxillin
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-pax-cyan"
                    : "text-pax-slate hover:text-pax-cyan"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="pax-btn-primary !px-5 !py-2.5">
              Join Early Access
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-pax-navy hover:bg-pax-cloud transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-pax-line bg-white">
            <nav className="flex flex-col gap-1 text-left">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-pax-ice text-pax-cyan"
                      : "text-pax-slate hover:bg-pax-cloud"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
    {/* Spacer for fixed header */}
    <div className="h-16" />
    </>
  );
};

export default Header;
