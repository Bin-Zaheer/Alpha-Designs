import Image from "next/image";
import logo from "../../public/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="mt-28 bg-[#fbfcff] text-[#172033] z-50">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          {/* TOP LINE */}
          <div className="h-px w-full bg-[#dfe6ef]" />

          {/* ================= MAIN ================= */}
          <div className="py-9 lg:py-11">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr_1.15fr] items-center gap-10">
              {/* ================= BRAND ================= */}
              <div className="flex flex-col lg:items-start items-center lg:text-start text-center">
                <div className="flex items-center gap-5">
                  <Image
                    src={logo}
                    alt="Alpha Design"
                    className="w-48 md:w-52"
                  />

                  <div className="hidden md:block h-10 w-px bg-[#dfe6ef]" />

                  <span className="hidden md:block text-[10px] uppercase tracking-[3px] text-[#94a3b8]">
                    Architecture & Interior
                  </span>
                </div>

                <p className="mt-5 max-w-sm text-[16px] leading-6 text-[#64748b]">
                  Specialized in{" "}
                  <span className="text-[#0d6efd]">
                    {" "}
                    sustainable residential{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-[#0d6efd]">
                    {" "}
                    commercial architecture.{" "}
                  </span>
                </p>
              </div>

              {/* ================= NAVIGATION ================= */}
              <div className="lg:border-l lg:border-r lg:border-[#e3e8ef] lg:px-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#0d6efd]">
                    Explore
                  </span>

                  <span className="text-[10px] text-[#a0aaba]">
                    01 — 06
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                  {[
                    ["01", "Services"],
                    ["02", "Projects"],
                    ["03", "About Us"],
                    ["04", "FAQ's"],
                    ["05", "Contact"],
                    ["06", "Privacy Policy"],
                  ].map(([number, title]) => (
                    <a
                      href="#"
                      key={number}
                      className="group flex items-center gap-3 w-fit"
                    >
                      <span className="text-[14px] text-[#aeb8c7] transition-colors duration-300 group-hover:text-[#0d6efd]">
                        {number}
                      </span>

                      <span className="relative lg:text-[15px] text-[11px] font-medium text-[#475569] transition-colors duration-300 group-hover:text-[#0d6efd]">
                        {title}

                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0d6efd] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* ================= CONTACT ================= */}
              <div className="flex flex-col lg:items-end">
                <div className="text-left lg:text-right">
                  <p className="text-[10px] uppercase tracking-[3px] font-semibold text-[#0d6efd]">
                    Start a conversation
                  </p>

                  <h3 className="mt-2 text-2xl md:text-[28px] font-semibold tracking-[-0.5px]">
                    Have a project in mind?
                  </h3>

                  <p className="mt-2 text-[13px] text-[#7b8798]">
                    Let's turn your vision into a
                    remarkable space.
                  </p>
                </div>

                {/* CONTACT ROW */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="mailto:hello@alphadesign.com"
                    className="
                group
                flex items-center gap-3
                rounded-full
                border border-[#dbe3ee]
                bg-white
                px-4 py-2.5
                shadow-[0_6px_25px_rgba(15,23,42,0.05)]
                transition-all duration-300
                hover:border-[#0d6efd]
                hover:shadow-[0_8px_30px_rgba(13,110,253,0.10)]
              "
                  >
                    <MdMarkEmailUnread className="text-[#0d6efd]" />

                    <span className="text-[12px] font-medium text-[#475569]">
                      help@alphadesign.sg
                    </span>

                    <span className="text-[#0d6efd] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BLUE ACCENT LINE ================= */}
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-14 bg-[#0d6efd]" />

            <div className="h-px flex-1 bg-[#dfe6ef]" />

            <div className="h-[2px] w-14 bg-[#0d6efd]" />
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Copyright */}
            <p className="lg:text-[15px] text-[10px] text-[#94a3b8]">
              © 2026 Alpha Design
              <span className="mx-2 text-[#d1d8e2]">
                /
              </span>
              All Rights Reserved
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                aria-label="Instagram"
                className="
            w-9 h-9 rounded-full
            border border-[#dbe3ee]
            bg-white
            flex items-center justify-center
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#E4405F]
            hover:shadow-[0_6px_18px_rgba(228,64,95,0.15)]
          "
              >
                <FaSquareInstagram className="text-[22px] text-[#E4405F]" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
            w-9 h-9 rounded-full
            border border-[#dbe3ee]
            bg-white
            flex items-center justify-center
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#1877F2]
            hover:shadow-[0_6px_18px_rgba(24,119,242,0.15)]
          "
              >
                <FaFacebookSquare className="text-[22px] text-[#1877F2]" />
              </a>

              <a
                href="tel:+1234567890"
                aria-label="Phone"
                className="
            w-9 h-9 rounded-full
            border border-[#dbe3ee]
            bg-white
            flex items-center justify-center
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#0d6efd]
            hover:bg-[#0d6efd]
            group
          "
              >
                <IoCall className="text-[22px] text-[#0d6efd] group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:hello@alphadesign.com"
                aria-label="Email"
                className="
            w-9 h-9 rounded-full
            border border-[#dbe3ee]
            bg-white
            flex items-center justify-center
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#0d6efd]
            hover:bg-[#0d6efd]
            group
          "
              >
                <MdMarkEmailUnread className="text-[22px] text-[#0d6efd] group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* LEGAL */}
            <div className="flex items-center gap-4 lg:text-[15px] text-[10px] text-[#94a3b8]">
              <a
                href="#"
                className="transition-colors hover:text-[#0d6efd]"
              >
                Privacy Policy
              </a>

              <span className="h-1 w-1 rounded-full bg-[#cbd5e1]" />

              <a
                href="#"
                className="transition-colors hover:text-[#0d6efd]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
