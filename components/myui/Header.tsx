"use client";
import { Platypi } from "next/font/google";
import logo from "../../public/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { PiBlueprintFill } from "react-icons/pi";
import { FaUserCheck } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { Menu } from "lucide-react"; // Hamburger Icon for Mobile
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Shadcn Sheet Components (Make sure 'npx shadcn@latest add sheet' is installed)
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const rockSalt = Platypi({
  weight: "400",
  subsets: ["latin"],
});

const NavItem = ({
  icon,
  text,
  scrollY,
  isMobile = false, // Added to handle layout variations inside sidecart
}: {
  icon: React.ReactNode;
  text: string;
  scrollY: number;
  isMobile?: boolean;
}) => {
  return (
    <p
      className={`${rockSalt.className} anima flex items-center gap-2 whitespace-nowrap px-3 
        ${
          isMobile
            ? "text-black dark:text-white text-[20px] py-4 border-b border-gray-100 dark:border-zinc-800 w-full justify-start"
            : "text-white xl:text-[23px] lg:text-[19px] text-[17px] justify-center"
        }`}
    >
      <span
        className={`${
          isMobile
            ? "text-[#0d6efd]"
            : scrollY > 0
              ? "text-yellow-500"
              : "text-[#0d6efd]"
        } nav-icon `}
      >
        {icon}
      </span>
      <span
        className={`${
          isMobile
            ? "text-gray-800 dark:text-gray-200"
            : scrollY > 0
              ? "text-[#0d6efd]"
              : "text-white"
        } nav-text `}
      >
        {text}
      </span>
    </p>
  );
};

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <header
      className={`${
        scrollY > 0
          ? "backdrop-blur-3xl bg-white/90 shadow-sm"
          : "bg-transparent"
      } w-full fixed top-0 left-0 z-[100] py-5 lg:py-2 flex items-center justify-between lg:px-20 md:px-15 px-6 transition-all duration-300 ${
        scrollY > 0 ? "py-2" : "py-5"
      }`}
    >
      {/* --- 1. LEFT SIDE: Desktop Nav OR Mobile Hamburger Menu --- */}
      {/* Desktop Navigation */}
      <nav className="items-center lg:flex hidden z-10">
        <NavItem
          icon={<FaHome />}
          text="Home"
          scrollY={scrollY}
        />
        <NavItem
          icon={<GiAutoRepair />}
          text="Services"
          scrollY={scrollY}
        />
        <NavItem
          icon={<PiBlueprintFill />}
          text="Projects"
          scrollY={scrollY}
        />
      </nav>

      {/* Mobile/Tablet Menu Button (Logo ke Left pe render hoga) */}
      <div className="lg:hidden flex items-center z-20">
        <Sheet>
          <SheetTrigger>
            <button
              className={`p-2 rounded-md transition-colors ${
                scrollY > 0
                  ? "text-black hover:bg-black/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Open Menu"
            >
              <Menu className="text-2xl" />
            </button>
          </SheetTrigger>
          {/* Side Drawer Component */}
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] pt-12 bg-white/20 dark:bg-zinc-950 z-200"
          >
            <div className="flex flex-col items-start w-full mt-6">
              <SheetClose className={"w-full"}>
                <NavItem
                  icon={<FaHome />}
                  text="Home"
                  scrollY={scrollY}
                  isMobile
                />
              </SheetClose>
              <SheetClose className={"w-full"}>
                <NavItem
                  icon={<GiAutoRepair />}
                  text="Services"
                  scrollY={scrollY}
                  isMobile
                />
              </SheetClose>
              <SheetClose className={"w-full"}>
                <NavItem
                  icon={<PiBlueprintFill />}
                  text="Projects"
                  scrollY={scrollY}
                  isMobile
                />
              </SheetClose>
              <SheetClose className={"w-full"}>
                <NavItem
                  icon={<FaUserCheck />}
                  text="About Us"
                  scrollY={scrollY}
                  isMobile
                />
              </SheetClose>
              <SheetClose className={"w-full"}>
                <NavItem
                  icon={<FaQuestion />}
                  text="Faq's"
                  scrollY={scrollY}
                  isMobile
                />
              </SheetClose>
              <SheetClose className={"w-full"}>
                <NavItem
                  icon={<PiPhoneCallFill />}
                  text="Contact Us"
                  scrollY={scrollY}
                  isMobile
                />
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* --- 2. CENTER SIDE: Logo (Always Centered on Mobile) --- */}
      <div className="flex justify-center items-center lg:static absolute left-0 right-0 pointer-events-none lg:pointer-events-auto">
        <Image
          src={logo}
          alt="Profile picture"
          className={`${
            scrollY > 0
              ? "lg:w-35 md:w-44 w-32"
              : "lg:w-55 md:w-52 w-40"
          } transition-all duration-300 object-contain pointer-events-auto`}
          priority
        />
      </div>

      {/* --- 3. RIGHT SIDE: Desktop Nav OR Mobile Right Spacer --- */}
      {/* Desktop Navigation */}
      <nav className="items-center lg:flex hidden z-10">
        <NavItem
          icon={<FaUserCheck />}
          text="About Us"
          scrollY={scrollY}
        />
        <NavItem
          icon={<FaQuestion />}
          text="Faq's"
          scrollY={scrollY}
        />
        <NavItem
          icon={<PiPhoneCallFill />}
          text="Contact Us"
          scrollY={scrollY}
        />
      </nav>

      {/* Mobile Right Spacer (Taaki layout balance rahe aur logo text perfect center mein dikhe) */}
      <div className="lg:hidden w-10"></div>

      {/* Scroll Indicator Line */}
      {scrollY > 0 && (
        <motion.div
          initial={{ width: "0%" }} // Shuru mein width zero hogi
          animate={{
            /* Center se shuru ho kar pehle full width (100%) tak jayegi, phir wapas simat kar 0% ho jayegi */
            width: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3, // Pura cyclic process 3 seconds mein complete hoga (Aap change kar sakte hain)
            ease: "easeInOut", // Smooth momentum velocity calculations
            repeat: 0, // 🔴 STRICT: Sirf 0 rakha hai taaki animation ek baar chal kar ruk jaye
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-blue-500 origin-center"
        />
      )}
    </header>
  );
};

export default Header;
