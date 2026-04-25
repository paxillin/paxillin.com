"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Share2, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const menuRef = useRef(null);

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Release Timeline", href: "/release" },
    { name: "About", href: "/about" },
    { name: "Social", href: "/social" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll); // 👈 Listen to scroll
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll); // 👈 Clean up scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 font-sans"
        ref={menuRef}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/lovable-uploads/883ae812-41b7-4f12-8dc5-599b1c93a623.png"
                alt="Paxillin"
                className="w-14 h-14 object-contain"
              />
              <span className="text-2xl sm:text-3xl font-bold text-pexilllin-primary">
                Paxillin
              </span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-pexilllin-primary font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}

            {/* Mobile Buttons */}
            {isMobile && (
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10"
                  onClick={async () => {
                    try {
                      if (navigator.share) {
                        await navigator.share({
                          title: "Paxillin",
                          text: "Check out Paxillin – The Healthcare Networking Platform!",
                          url: window.location.href,
                        });
                      } else if (
                        navigator.clipboard &&
                        navigator.clipboard.writeText
                      ) {
                        await navigator.clipboard.writeText(
                          window.location.href
                        );
                        alert("Link copied to clipboard!");
                      } else {
                        // iOS Safari fallback: create a temp <input> for manual copy
                        const input = document.createElement("input");
                        input.value = window.location.href;
                        document.body.appendChild(input);
                        input.select();
                        document.execCommand("copy");
                        document.body.removeChild(input);
                        alert("Link copied to clipboard!");
                      }
                    } catch (err) {
                      console.error("Share failed:", err);
                    }
                  }}
                >
                  <Share2 className="!w-5 !h-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10"
                >
                  {isMenuOpen ? (
                    <X className="!w-6 !h-6" />
                  ) : (
                    <Menu className="!w-6 !h-6" />
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          {isMobile && isMenuOpen && (
            <div className="md:hidden py-1 border-t border-gray-200 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-pexilllin-primary font-medium transition-colors duration-200 px-4 py-1 "
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

      {/* Scrollable Section Below Header */}
      <div className="mt-16 flex justify-between items-center text-white bg-pexilllin-primary px-4 py-1 text-xs md:py-1 md:text-sm font-sans">
        <p>CONNECTION</p>
        <p>INTEGRATION</p>
        <p>MOVEMENT</p>
      </div>
    </>
  );
};

export default Header;
