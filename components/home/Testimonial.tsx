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
    <div className="max-w-2xl mx-auto px-4 pt-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-pexilllin-secondary">
        Testimonials
      </h2>

      <div
        className="relative h-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            } flex flex-col items-center text-center bg-white p-6 h-full rounded-2xl shadow-lg border border-gray-400`}
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
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
