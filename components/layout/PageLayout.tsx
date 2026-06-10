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

      {/* Mobile Full-Width Bottom Button (only show when modal is closed) */}
      {!open && (
        <div className="md:hidden px-4 py-4 fixed bottom-0 w-full z-[9999]">
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            className="bg-pax-navy hover:bg-pax-navy-dark text-white w-full text-lg font-semibold transition-all duration-300 rounded-full shadow-lg"
          >
            Join Early Access
          </Button>
        </div>
      )}

      {/* Popup Modal */}
      <ModalContactForm open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default PageLayout;
