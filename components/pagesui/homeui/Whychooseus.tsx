import { IoTimer } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { BiSolidCheckShield } from "react-icons/bi";
import { GiHouseKeys } from "react-icons/gi";
import { motion } from "framer-motion";

const Whychooseus = () => {
  return (
    <div className="service isolate w-full lg:h-140 lg:mt-35 mt-15 relative space-y-7 overflow-x-hidden overflow-hidden">
      {/* Black Overlay */}
      <div className="bg-black/50 w-full lg:h-140 h-280 absolute top-0 left-0 z-0"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full space-y-2"
      >
        <div className="py-5 px-20 space-y-4 lg:text-start text-center">
          <p className="text-4xl font-semibold relative text-white z-10">
            What We Do Best
          </p>

          <p className="text-md relative text-white z-10">
            Smart design, quality materials, and
            timeless interiors made for you.
          </p>
        </div>
      </motion.div>

      {/* Services */}
      <div className="relative z-10 w-full px-6 lg:px-20 lg:flex lg:flex-row lg:justify-between lg:items-start text-center lg:text-start">
        {/* 1 — Timely Execution */}
        <div className="lg:w-[23%] w-full">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full origin-top inline-block"
          >
            <IoTimer className="text-8xl text-[#ffffff] lg:text-start text-center w-full" />
          </motion.div>

          <p className="text-2xl font-semibold text-white">
            Timely Execution
          </p>

          <p className="text-lg font-medium leading-tight mt-3 text-white">
            We respect your time and investment,
            delivering on schedule with clear
            communication and uncompromised
            quality.
          </p>
        </div>

        {/* 2 — Sparkles */}
        <div className="lg:w-[23%] w-full">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full origin-top inline-block"
          >
            <HiSparkles className="text-8xl text-[#ffffff] lg:text-start text-center w-full" />
          </motion.div>

          <p className="text-2xl font-semibold text-white">
            Timely Execution
          </p>

          <p className="text-lg font-medium leading-tight mt-3 text-white">
            We respect your time and investment,
            delivering on schedule with clear
            communication and uncompromised
            quality.
          </p>
        </div>

        {/* 3 — Shield */}
        <div className="lg:w-[23%] w-full">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full origin-top inline-block"
          >
            <BiSolidCheckShield className="text-8xl text-[#ffffff] lg:text-start text-center w-full" />
          </motion.div>

          <p className="text-2xl font-semibold text-white">
            Timely Execution
          </p>

          <p className="text-lg font-medium leading-tight mt-3 text-white">
            We respect your time and investment,
            delivering on schedule with clear
            communication and uncompromised
            quality.
          </p>
        </div>

        {/* 4 — House Keys */}
        <div className="lg:w-[23%] w-full lg:pb-0 pb-25">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full origin-top inline-block"
          >
            <GiHouseKeys className="text-8xl text-[#ffffff] lg:text-start text-center w-full" />
          </motion.div>

          <p className="text-2xl font-semibold text-white">
            Timely Execution
          </p>

          <p className="text-lg font-medium leading-tight mt-3 text-white">
            We respect your time and investment,
            delivering on schedule with clear
            communication and uncompromised
            quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
