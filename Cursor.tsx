"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] =
    useState(false);
  const [isHovered, setIsHovered] =
    useState(false);

  // 1. Outer Ring Spring Motion Values (Trailing elastic effect ke liye)
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  // 2. Center Dot Motion Values (Bilkul exact mouse point zero latency synchronization ke liye)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Outer ring ke liye smooth damping physics configuration
  const springConfig = {
    damping: 35,
    stiffness: 350,
    mass: 0.5,
  };
  const ringXSpring = useSpring(
    ringX,
    springConfig,
  );
  const ringYSpring = useSpring(
    ringY,
    springConfig,
  );

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Coordinates alignment offsets configurations calculations
      dotX.set(e.clientX - 4); // Center Dot offset calibration radius (8px width / 2)
      dotY.set(e.clientY - 4);

      ringX.set(e.clientX - 16); // Outer Ring offset calibration radius (32px width / 2)
      ringY.set(e.clientY - 16);

      if (!isVisible) setIsVisible(true);
    };

    // Hover components check recognition logic triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains(
          "cursor-pointer",
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener(
      "mousemove",
      moveCursor,
    );
    window.addEventListener(
      "mouseover",
      handleMouseOver,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor,
      );
      window.removeEventListener(
        "mouseover",
        handleMouseOver,
      );
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 🟢 ELEMENT 1: Center Solid Dot (Jo white mouse arrow ko replace karega) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#0d6efd] rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered
            ? "#25D366"
            : "#0d6efd", // Hover par solid blue se green blend
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0,
        }} // Zero latency movement path tracking
      />

      {/* 🔵 ELEMENT 2: Outer Soft Trailing Circle Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#0d6efd]/70 pointer-events-none z-[9998] hidden lg:block"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered
            ? "rgba(13, 110, 253, 0.1)"
            : "transparent",
          borderColor: isHovered
            ? "#25D366"
            : "rgba(13, 110, 253, 0.7)",
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.2,
        }}
      />
    </>
  );
}
