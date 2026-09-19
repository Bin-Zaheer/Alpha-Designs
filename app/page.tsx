"use client";

import About from "@/components/pagesui/homeui/About";
import Latestprojects from "@/components/pagesui/homeui/Latestprojects";
import Testimonials from "@/components/pagesui/homeui/Testimonials";
import Whychooseus from "@/components/pagesui/homeui/Whychooseus";
import banner from "../public/banner.jpg";
import {
  motion,
  type Variants,
} from "framer-motion";
import { MdSupportAgent } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

const marqueeItems = [
  "ALPHA DESIGN",
  "ALPHA DESIGN",
  "ALPHA DESIGN",
  "ALPHA DESIGN",
  "ALPHA DESIGN",
];

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <motion.p
      variants={textContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.25em]"
        >
          {word
            .split("")
            .map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
        </span>
      ))}
    </motion.p>
  );
};

const MarqueeContent = () => {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item, index) => (
        <div
          key={index}
          className="flex shrink-0 items-center"
        >
          <span className="mx-8 whitespace-nowrap text-2xl font-semibold text-[#0d6efd]">
            {item}
          </span>
          <span className="text-4xl text-yellow-500 movestar">
            ✦
          </span>
        </div>
      ))}
    </div>
  );
};

const TextMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-[#fefaf0] border-y-4 border-y-[#0d6efd] py-2 text-white">
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default function Home() {
  const [videoLoaded, setVideoLoaded] =
    useState(false);
  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-zinc-950">
      <div className="xl:h-screen h-170 w-full relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
          {/* 1. MAIN BACKGROUND VIDEO ELEMENT */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setVideoLoaded(true)} // Jaise hi video play ke liye ready hogi, state true ho jayegi
            className="h-full w-full object-cover absolute inset-0 z-0"
          >
            <source
              src="/bannervideo2.mp4"
              type="video/mp4"
            />
            Your browser does not support the
            video tag.
          </video>

          {/* 2. FALLBACK IMAGE LAYER (Jab tak video load na ho tab tak poori screen par visible rahegi) */}
          <div
            className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
              videoLoaded
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <Image
              src={banner}
              fill // Standard layouts bounds fit ke liye 'fill' class ideal hoti hai absolute container mein
              className="object-cover"
              alt="banner fallback skeleton loading surface"
              priority // Priority true rakhi hai taaki browser sabse pehle image download kare bina delay ke
            />
          </div>
          <div className="absolute inset-0 lg:bg-[linear-gradient(82deg,rgba(0,0,0,0.48)_9%,rgba(255,255,255,0)_50%)] bg-[linear-gradient(82deg,rgba(0,0,0,0.48)_9%,rgba(255,255,255,0)_90%)] z-20 pointer-events-none" />
        </div>

        {/* 🟢 LEFT SIDE: Responsive Heading & Content */}
        <div className="absolute lg:top-[30%] md:top-[25%] top-[25%] lg:left-[40px] md:left-[30px] left-0 right-0  lg:w-[48%] md:w-[70%] mx-auto md:mx-0 font-extrabold space-y-2 flex flex-col md:items-start items-center md:text-start text-center px-4 md:px-0 box-border z-42">
          <AnimatedText
            text="| Alpha Design |"
            className="text-white font-bold text-[16px] md:text-[18px] lg:text-[20px]"
          />

          <AnimatedText
            text="Where Design Meets Perfection"
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-white leading-tight lg:leading-tight"
          />

          <AnimatedText
            text="Creating timeless interiors that inspire and impress."
            className="text-white font-medium lg:text-[20px] md:text-[18px] text-[15px]"
          />

          {/* Support Banner Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="flex items-center gap-3 text-white mt-12 md:justify-start justify-center w-full"
          >
            <MdSupportAgent className="text-6xl md:text-6xl lg:text-7xl text-yellow-500 flex-shrink-0" />
            <div className="md:text-start text-center">
              <p className="text-2xl md:text-2xl lg:text-3xl font-bold">
                Get Support
              </p>
              <p className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#0d6efd] whitespace-nowrap">
                123 - 456 - 7890
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🔵 RIGHT SIDE: Hanging Pendulum Form (Desktop Only) */}

        <motion.div
          initial={{
            opacity: 1,
            x: -50,
            rotate: -15,
          }}
          whileInView={{
            rotate: [
              -20, 18, -13, 11, -8, 6, -4, 3, -1,
              0,
            ],
            opacity: 1,
          }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            delay: 1,
            duration: 2.2,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
          className="absolute top-[25%] right-[4%] w-full min-[500px]:w-[80%] sm:w-[47%] lg:w-[30%] xl:w-[23.3%] py-3 px-3 sm:px-4 bg-[#0d6efd]/30 shadow-xl lg:flex hidden flex-col items-center gap-3 text-center overflow-visible rounded-xl sm:rounded-xl border border-white origin-top z-42"
        >
          {/* Header Title inside Form */}
          <div className="bg-[#0d6efd] shadow-md px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center gap-2 text-center rounded-lg sm:rounded-lg absolute top-[4%] w-[107%] text-white">
            <p className="text-xl sm:text-2xl font-semibold text-center w-full tracking-tight">
              Shape Your Vision
            </p>
          </div>

          {/* First Name & Last Name Container */}
          <div className="lg:flex justify-center items-start gap-2 w-full space-y-4 lg:space-y-0 mt-20">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className="transition-all duration-500 focus:border focus:ring-4 focus:ring-gray-300/90 border border-[#424242]/20 rounded-lg py-2 px-2 text-black text-[14px] lg:w-[50%] w-full bg-white/80"
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="transition-all duration-500 focus:border focus:ring-4 focus:ring-gray-300/90 border border-[#424242]/20 rounded-lg py-2 text-black px-2 text-[14px] lg:w-[50%] w-full bg-white/80"
            />
          </div>

          {/* Email, Phone & Services Dropdown */}
          <div className="gap-2 w-full space-y-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="transition-all duration-500 focus:border focus:ring-4 focus:ring-gray-300/90 border border-[#424242]/20 rounded-lg py-2 text-black px-2 text-[14px] w-full bg-white/80"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="transition-all duration-500 focus:border focus:ring-4 focus:ring-gray-300/90 border border-[#424242]/20 rounded-lg py-2 text-black px-2 text-[14px] w-full bg-white/80"
            />
            <select
              name="service"
              id="service"
              className="transition-all duration-500 focus:border focus:ring-4 focus:ring-gray-300/90 border border-[#424242]/20 rounded-lg py-2 text-black px-2 text-[14px] w-full bg-white/80"
            >
              <option value="">
                {" "}
                Select Service{" "}
              </option>
              <option value="space-optimisation">
                {" "}
                Space Optimisation{" "}
              </option>
              <option value="design-conceptualization">
                {" "}
                Design Conceptualization{" "}
              </option>
              <option value="electrical-plumbing">
                {" "}
                Electrical & Plumbing{" "}
              </option>
              <option value="hacking">
                Hacking
              </option>
              <option value="tiling">
                Tiling
              </option>
              <option value="flooring">
                {" "}
                Flooring Work{" "}
              </option>
            </select>
          </div>

          {/* Description Textarea */}
          <div className="w-full">
            <textarea
              id="message"
              name="message"
              placeholder="Describe Your Vision"
              className="transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-gray-300/90 border border-[#424242]/20 rounded-lg px-3 py-2 text-[14px] text-black w-full h-20 bg-white/80 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full sm:w-auto py-2 px-8 sm:px-12 font-medium text-lg sm:text-md bg-[#0d6efd] hover:bg-[#0056d6] text-white rounded-lg transition-colors">
            Submit
          </button>
        </motion.div>
      </div>

      {/* Marquee Text Component */}
      <TextMarquee />

      {/* Other Sections Flow */}
      <About />
      <Whychooseus />
      <Latestprojects />
      <Testimonials />
    </div>
  );
}
