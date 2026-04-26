"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { marketingLabelClasses } from "@/lib/form-fields";
import { cn } from "@/lib/utils";

const FeedbackFormImg = "/images/feedback-form.jpg";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

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
          message:
            result.message || "Failed to submit feedback. Please try again.",
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

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 bg-white px-6 py-4 md:flex-row md:p-10">
      <div className="w-full md:w-[50%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-6 text-left font-heading text-2xl font-semibold text-paxillin-secondary md:text-center md:text-3xl">
            Feedback Form
          </h2>

          {submitStatus && (
            <div
              className={cn(
                "mb-4 rounded-xl border px-3 py-2.5 text-sm",
                submitStatus.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-800"
              )}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="mb-6 grid gap-5 md:grid-cols-2 md:gap-4">
            <div>
              <label className={marketingLabelClasses} htmlFor="feedback-fullName">
                Full name
              </label>
              <Input
                id="feedback-fullName"
                variant="marketing"
                type="text"
                placeholder="Your name"
                disabled={isSubmitting}
                className={cn(errors.fullName && "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
                {...register("fullName")}
              />
              {errors.fullName?.message && (
                <p className="mt-1.5 text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className={marketingLabelClasses} htmlFor="feedback-email">
                Email
              </label>
              <Input
                id="feedback-email"
                variant="marketing"
                type="email"
                placeholder="you@example.com"
                disabled={isSubmitting}
                className={cn(errors.email && "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className={marketingLabelClasses} htmlFor="feedback-message">
              Your message
            </label>
            <Textarea
              id="feedback-message"
              variant="marketing"
              rows={4}
              placeholder="Share your thoughts..."
              disabled={isSubmitting}
              className={cn(errors.message && "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20")}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1.5 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="cta"
            size="lg"
            disabled={isSubmitting}
            className="w-full justify-center gap-2 shadow-md md:w-auto md:min-w-[14rem]"
          >
            {isSubmitting ? "Submitting..." : "Submit feedback"}
            {!isSubmitting && (
              <ArrowRight className="opacity-95" strokeWidth={2} aria-hidden />
            )}
          </Button>
        </form>
      </div>
      <div className="w-full md:w-[50%]">
        <img
          src={FeedbackFormImg}
          alt="Feedback Illustration"
          className="mt-6 h-[200px] w-full rounded-2xl object-cover md:mt-0 md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
