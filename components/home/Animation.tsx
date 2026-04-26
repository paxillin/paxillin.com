"use client";

import { motion } from "framer-motion";

const Images = [
  {
    img: "/AnimationImages/image1.png",
    top: "5",
    left: "0",
  },
  {
    img: "/AnimationImages/image2.png",
    top: "90",
    left: "50",
  },

  {
    img: "/AnimationImages/image3.png",
    top: "65",
    left: "0",
  },
  {
    img: "/AnimationImages/image4.png",
    top: "90",
    left: "2",
  },
  {
    img: "/AnimationImages/image5.png",
    top: "0",
    left: "20",
  },
  {
    img: "/AnimationImages/image6.png",
    top: "0",
    left: "80",
  },
  {
    img: "/AnimationImages/image7.png",
    top: "35",
    left: "90",
  },

  {
    img: "/AnimationImages/image8.png",
    top: "65",
    left: "90",
  },
  {
    img: "/AnimationImages/image9.png",
    top: "90",
    left: "90",
  },
  {
    img: "/AnimationImages/image10.png",
    top: "35",
    left: "0",
  },
  {
    img: "/AnimationImages/image11.png",
    top: "50",
    left: "40",
  },
];

const sizes = ["w-10 h-10", "w-16 h-16", "w-20 h-20", "w-24 h-24"];

const getUniquePositions = (count: number, step = 10) => {
  const used = new Set<string>();
  const positions: { top: number; left: number }[] = [];

  while (positions.length < count) {
    const top = Math.floor(Math.random() * (100 / step)) * step;
    const left = Math.floor(Math.random() * (100 / step)) * step;
    const key = `${top}-${left}`;
    if (!used.has(key)) {
      used.add(key);
      positions.push({ top, left });
    }
  }

  return positions;
};

const ImagesAnimation = () => {
  const positions = getUniquePositions(Images.length);

  return (
    <div className="relative h-full w-full overflow-hidden select-none">
      {Images.map((Fish, idx) => {
        const { top, left } = positions[idx];
        const delay = Math.random() * 2;
        const duration = 10 + Math.random() * 20;
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        const xShift = Math.random() > 0.5 ? 5 : -5; // move left or right

        return (
          <motion.img
            key={idx}
            src={Fish.img}
            alt={`fish-${idx}`}
            className={`absolute w-16 h-16 `}
            style={{
              top: `${Fish.top}%`,
              left: `${Fish.left}%`,
            }}
            initial={{ x: 0 }}
            animate={{ x: `${xShift}px`, y: ["0px", "10px", "-5px", "0px"] }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default ImagesAnimation;
