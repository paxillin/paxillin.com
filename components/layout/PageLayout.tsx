"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModalContactForm from "@/components/join-popup/join-popup";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Page Content */}
      <div>
        {children}
      </div>

      {/* Desktop Fixed Button (only show when modal is closed) */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-[9999] hidden md:block font-sans">
          <Button size="lg" onClick={() => setOpen(true)}>
            Request early access
          </Button>
        </div>
      )}

      {/* Mobile Full-Width Bottom Button (only show when modal is closed) */}
      {!open && (
        <div className="md:hidden px-4 py-4 fixed bottom-0 w-full z-[9999] bg-paxillin-parchment/95 border-t border-paxillin-mist/60 backdrop-blur-sm">
          <Button onClick={() => setOpen(true)} size="lg" className="w-full">
            Request early access
          </Button>
        </div>
      )}

      {/* Popup Modal */}
      <ModalContactForm open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default PageLayout;
