"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const FeedbackFormImg = "/images/feedback-form.jpg";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

// Zod Schema
const feedbackSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: z.infer<typeof feedbackSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/website/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you for your feedback!",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit feedback. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-pax-line bg-white px-4 py-2.5 text-sm text-pax-ink placeholder:text-pax-slate/70 outline-none transition-shadow focus:border-pax-cyan focus:ring-2 focus:ring-pax-cyan/30 disabled:opacity-50";

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="pax-card p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-[50%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl text-left md:text-center font-bold mb-6 text-pax-navy tracking-tight">
              Feedback Form
            </h2>

            {submitStatus && (
              <div
                className={`mb-4 p-3 rounded-xl text-sm border ${submitStatus.type === "success"
                  ? "bg-pax-ice text-pax-green border-pax-line"
                  : "bg-red-50 text-red-700 border-red-200"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="mb-4">
                <label className="block text-left text-sm font-medium mb-1.5 text-pax-ink">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Your name"
                  className={inputClasses}
                  disabled={isSubmitting}
                />
                {errors.fullName?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.fullName?.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-left text-sm font-medium mb-1.5 text-pax-ink">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className={inputClasses}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-left text-sm font-medium mb-1.5 text-pax-ink">
                Your Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Share your thoughts..."
                className={inputClasses}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="pax-btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
        <div className="w-full md:w-[50%]">
          <img
            src={FeedbackFormImg}
            alt="Feedback Illustration"
            className="w-full h-[200px] md:h-[400px] rounded-2xl border border-pax-line object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
