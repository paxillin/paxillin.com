"use client";

import React, { useEffect, useRef, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

// ModalContactForm.jsx
// A simple, accessible popup modal with Name, Email, Phone and Submit button.
// Styled with the Paxillin app-aligned design system tokens.
const validatePhone = (value: string) => {
  if (!value) return true; // Phone is optional
  // Optional +91, followed by 10 digits starting with 6-9
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  return phoneRegex.test(value);
};

export default function ModalContactForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const firstInput = modalRef.current?.querySelector("input");
      firstInput?.focus();
      setSubmitted(false);
      setSubmitError("");
      setSuccessMessage("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      // reset form when modal closes
      setName("");
      setEmail("");
      setPhone("");
      setSubmitted(false);
      setPhoneError("");
      setSubmitError("");
      setSuccessMessage("");
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!name.trim() || !email.trim()) {
      setSubmitError("Name and email are required.");
      return;
    }

    // Validate phone if provided
    if (phone && !validatePhone(phone)) {
      setPhoneError("Enter a valid 10-digit Indian phone number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`${API_URL}/website/early-access`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(
          result.message || "Thank you for joining our early access list!"
        );
        setSubmitted(true);
        // close after 2s
        setTimeout(() => {
          setSubmitted(false);
          onClose?.();
        }, 2000);
      } else {
        setSubmitError(result.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting early access:", error);
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "mt-1.5 block w-full rounded-xl border border-pax-line bg-white px-4 py-2.5 text-sm text-pax-ink placeholder:text-pax-slate/70 outline-none transition-shadow focus:border-pax-cyan focus:ring-2 focus:ring-pax-cyan/30 disabled:opacity-50";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-pax-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal panel */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl shadow-[0_24px_60px_rgba(15,30,46,0.25)] bg-white border border-pax-line overflow-hidden"
      >
        {/* header */}
        <div className="px-6 py-4 flex items-center justify-between bg-pax-navy">
          <h2 id="modal-title" className="text-white text-lg font-semibold tracking-tight">
            Be the First to Join Paxillin
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-1.5 hover:bg-white/10 transition text-white"
          >
            ✕
          </button>
        </div>

        {/* body / form */}
        <div className="px-6 py-6 text-left">
          {submitted ? (
            <p className="text-center text-lg font-medium text-pax-green">
              {successMessage}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="text-left"
              id="modal-desc"
            >
              {submitError && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 text-sm">
                  {submitError}
                </div>
              )}

              <label className="block mb-4 text-left">
                <span className="block text-sm font-medium text-pax-ink">
                  Name <span className="text-red-500">*</span>
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  required
                  className={inputClasses}
                />
              </label>

              <label className="block mb-4 text-left">
                <span className="block text-sm font-medium text-pax-ink">
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  type="email"
                  disabled={isSubmitting}
                  required
                  className={inputClasses}
                />
              </label>

              <label className="block mb-6 text-left">
                <span className="block text-sm font-medium text-pax-ink">
                  Phone (optional)
                </span>
                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (e.target.value && !validatePhone(e.target.value)) {
                      setPhoneError(
                        "Enter a valid 10-digit Indian phone number."
                      );
                    } else {
                      setPhoneError("");
                    }
                  }}
                  placeholder="+91 98765 43210"
                  type="tel"
                  disabled={isSubmitting}
                  className={`${inputClasses} ${phoneError
                    ? "!border-red-500 focus:!ring-red-500/30"
                    : ""
                    }`}
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </label>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pax-btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="pax-btn-outline disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
