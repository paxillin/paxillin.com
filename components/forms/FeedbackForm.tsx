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

  return (
    <div className="py-4 max-w-6xl px-6 md:p-10 bg-white flex flex-col md:flex-row items-center justify-center mx-auto gap-10">
      <div className="w-full md:w-[50%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl text-left md:text-center font-bold mb-6 text-pexilllin-secondary">
            Feedback Form
          </h2>

          {submitStatus && (
            <div
              className={`mb-4 p-3 rounded ${submitStatus.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
                }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <label className="block text-left text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="Your name"
                className="w-full p-2 border rounded"
                disabled={isSubmitting}
              />
              {errors.fullName?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.fullName?.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-left text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full p-2 border rounded"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Share your thoughts..."
              className="w-full p-2 border rounded"
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
            className="w-full bg-pexilllin-primary text-white p-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
      <div className="w-full md:w-[50%]">
        <img
          src={FeedbackFormImg}
          alt="Feedback Illustration"
          className="w-full h-[200px] md:h-[400px] mt-6 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
