"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const services = [
  {
    id: "Call Us",
    label: (
      <IoCall className="text-xl sm:text-2xl" />
    ),
  },
  {
    id: "Email Us",
    label: (
      <MdMarkEmailUnread className="text-xl sm:text-2xl" />
    ),
  },
  {
    id: "Whatsapp Us",
    label: (
      <IoLogoWhatsapp className="text-xl sm:text-2xl" />
    ),
  },
];

export default function Fixmessage() {
  // Initial tab fix kiya taaki component render hote hi default choice selected ho
  const [activeTab, setActiveTab] =
    useState("Call Us");

  return (
    /* fixed bottom-0 left-0 w-full z-50 lagaya taaki screen par hamesha end mein fix rahe */
    <div className="fixed bottom-0 left-0 w-full bg-transparent py-2 px-4 z-20 pointer-events-none ">
      {/* pointer-events-auto lagaya taaki buttons click ho sakein, par wrapper click-through rahe */}
      <div className="max-w-4xl mx-auto relative pointer-events-auto backdrop-blur-md bg-zinc-900/10 dark:bg-black/20 rounded-t-2xl px-6 overflow-hidden border-t border-x border-white/10 shadow-2xl">
        {/* Navigation Tabs Header */}
        <div className="flex justify-between items-center w-full relative z-10 lg:py-2">
          {services.map((service) => {
            const isActive =
              activeTab === service.id;
            const isWhatsapp =
              service.id === "Whatsapp Us";
            const isCall =
              service.id === "Call Us";
            const isEmail =
              service.id === "Email Us";

            // Premium Color Configurations
            let activeColorClass =
              "text-[#0d6efd] drop-shadow-[0_0_8px_rgba(13,110,253,0.5)]";
            if (isWhatsapp)
              activeColorClass =
                "text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]";
            if (isEmail && isActive)
              activeColorClass =
                "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]";

            return (
              <button
                key={service.id}
                onClick={() =>
                  setActiveTab(service.id)
                }
                className="flex-1 text-center py-3 relative focus:outline-none transition-all duration-300 group"
              >
                {/* Text & Icon Layout Element */}
                <span
                  className={`text-[13px] sm:text-[16px] md:text-[18px] font-bold tracking-wide transition-all duration-300 cursor-pointer text-center flex justify-center items-center gap-2.5  ${
                    isWhatsapp
                      ? "text-[#25D366]"
                      : isCall
                        ? "text-[#0d6efd]"
                        : isEmail
                          ? "text-yellow-500"
                          : ""
                  }`}
                >
                  {/* Icon Wrapper Component */}
                  <span
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      isWhatsapp
                        ? "text-[#25D366]"
                        : isCall && isActive
                          ? "text-[#0d6efd]"
                          : ""
                    }`}
                  >
                    {service.label}
                  </span>

                  {/* Label Text Component */}
                  <span className="hidden sm:inline font-semibold">
                    {service.id}
                  </span>
                </span>

                {/* Tab Activation Underline Indicator (Dynamic Colored Bar based on Active Tab) */}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderlineFixed"
                    className={`absolute bottom-[-8px] left-4 right-4 h-[3px] rounded-full z-20 `}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Center-out Animating Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] w-full flex justify-center items-center z-0">
          <motion.div
            /* Center se dono taraf expand aur shrink karne ke liye initial styles */
            className="h-full bg-[#0d6efd] dark:bg-white origin-center rounded-full"
            animate={{
              /* Width 0% se 100% hogi, phir 100% se wapas 0% scroll karegi */
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4, // Ek cycle complete karne ka time (4 seconds)
              ease: "easeInOut", // Smooth starting aur ending acceleration
              repeat: Infinity, // Infinite endless loop animation
            }}
          />
        </div>
      </div>
    </div>
  );
}
