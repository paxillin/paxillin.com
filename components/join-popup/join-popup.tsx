"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { marketingInputErrorClasses, marketingLabelClasses } from "@/lib/form-fields";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

const validatePhone = (value: string) => {
  if (!value) return true;
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  return phoneRegex.test(value);
};

type ModalContactFormProps = Readonly<{
  open: boolean;
  onClose: () => void;
}>;

export default function ModalContactForm({ open, onClose }: ModalContactFormProps) {
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

    if (!name.trim() || !email.trim()) {
      setSubmitError("Name and email are required.");
      return;
    }

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

  return (
    <div
      className="fixed inset-0 z-[10050] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-paxillin-parchment font-montserrat shadow-2xl ring-1 ring-paxillin-mist/40"
      >
        <header className="flex items-center justify-between border-b border-paxillin-mist/50 px-5 py-4 sm:px-6">
          <h2
            id="modal-title"
            className="font-heading text-xl font-semibold tracking-tight text-paxillin-secondary"
          >
            Request early access
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-2 text-paxillin-ink/55 transition-colors hover:bg-black/[0.05] hover:text-paxillin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paxillin-ink/20 focus-visible:ring-offset-2 focus-visible:ring-offset-paxillin-parchment"
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </header>

        <div className="px-5 py-6 text-left sm:px-6" id="modal-desc">
          {submitted ? (
            <p className="text-center font-serif text-base font-medium leading-relaxed text-paxillin-secondary">
              {successMessage}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {submitError && (
                <div
                  className="rounded-xl border border-red-200 bg-red-50/90 px-3 py-2.5 text-sm text-red-800"
                  role="alert"
                >
                  {submitError}
                </div>
              )}

              <label className="block text-left">
                <span className={marketingLabelClasses}>
                  Name <span className="text-red-500">*</span>
                </span>
                <Input
                  variant="marketing"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  required
                />
              </label>

              <label className="block text-left">
                <span className={marketingLabelClasses}>
                  Email <span className="text-red-500">*</span>
                </span>
                <Input
                  variant="marketing"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  required
                />
              </label>

              <label className="block text-left">
                <span className={marketingLabelClasses}>Phone (optional)</span>
                <Input
                  variant="marketing"
                  type="tel"
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
                  disabled={isSubmitting}
                  className={cn(phoneError && marketingInputErrorClasses)}
                />
                {phoneError && (
                  <p className="mt-1.5 text-sm text-red-600">{phoneError}</p>
                )}
              </label>

              <div className="pt-1">
                <Button
                  type="submit"
                  variant="cta"
                  size="default"
                  disabled={isSubmitting}
                  className="h-11 min-h-11 w-full justify-center px-5 text-sm shadow-md gap-1.5"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  {!isSubmitting && (
                    <ArrowRight className="opacity-95" strokeWidth={2} aria-hidden />
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
