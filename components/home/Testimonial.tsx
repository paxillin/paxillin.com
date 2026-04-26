"use client";

import React, { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Ananya Verma",
    role: "Cardiologist",
    message:
      "This platform connected me with incredible mentors and collaborators in my specialty. It has changed the way I practice medicine.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Ravi Mehta",
    role: "Neurologist",
    message:
      "The matching is brilliant — I’ve found research partners I never would have met otherwise.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Priya Desai",
    role: "Oncologist",
    message:
      "An excellent space for professional and social discussions, and secure communication among peers.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const index = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(index);
  };

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); 
      } else {
        handlePrev(); 
      }
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pb-8 pt-12">
      <h2 className="mb-8 text-center font-heading text-3xl font-semibold text-paxillin-secondary sm:text-4xl">
        What peers say
      </h2>

      <div
        className="relative h-full min-h-[16rem]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex h-full min-h-[16rem] flex-col items-center p-6 text-center transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "absolute inset-0 opacity-0"
            } rounded-card-lg border border-paxillin-mist/50 bg-white shadow-card`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <div className="text-gray-700 text-base leading-relaxed h-32 overflow-hidden">
              "{testimonial.message}"
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-primary"
                : "bg-paxillin-mist"
            }`}
            aria-label={`Show testimonial ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
