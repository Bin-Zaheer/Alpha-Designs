import Image from "next/image";
import round from "../../../public/rounded.png";
import aboutimage from "../../../public/aboutimage.png";
import { motion } from "framer-motion";

import { MdSupportAgent } from "react-icons/md";

const About = () => {
  return (
    <div className="lg:flex items-center py-20 lg:px-20 lg:relative w-full ">
      <div className="w-[20%] h-265 bg-yellow-500 absolute top-0 hit-bounce transition-all duration-100 translate-x-115 lg:flex hidden"></div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
        }}
        className="lg:w-[60%] w-full z-2 relative lg:ml-5 lg:mt-30"
      >
        <Image
          src={aboutimage}
          alt="About Image"
          className="lg:w-350 w-450  lg:h-160 rounded-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.1,
        }}
        className="lg:w-[50%] w-full lg:absolute top-[30%] left-[40%] bg-white py-15 lg:px-20 px-5 space-y-7 shadow-[0_0_8px_rgba(0,0,0,0.15)] z-10 rounded-xl mt-15 lg:text-start text-center"
      >
        {/* <div className="relative w-full h-full"> */}
        <p className="lg:text-6xl text-4xl font-semibold relative">
          About Us
        </p>
        <Image
          src={round}
          alt="Rounded Image"
          className=" w-50 h-50 rota lg:flex hidden absolute -top-[16%] -right-[13%]"
        />
        <p className="lg:text-lg text-md ">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna
          aliquat enim ad minim veniam, quis
          nostrud exercitation ullamco laboris
          nisi.
        </p>
        <p className="lg:text-lg text-md text-[#5d5d5d]">
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim
          id est tempora incidunt ut labore et
          dolore magnam aliquam quae.
        </p>
        <div className="flex lg:justify-between justify-center items-center">
          <button className="group flex items-center text-xl px-12 py-3 border-0 bg-[#0d6efd] text-white transition-all duration-500 ease-in-out skew-x-[40deg] hover:skew-x-[-40deg] rounded-none hover:border-4 hover:border-[#0d6efd] hover:bg-white">
            <span className="h-3.5 w-3.5 bg-white rounded-full mr-2 transition-all duration-500 ease-in-out group-hover:bg-[#0d6efd] -skew-x-[40deg] group-hover:skew-x-[40deg] "></span>

            <span className="transition-all duration-500 ease-in-out -skew-x-[40deg] group-hover:skew-x-[40deg] group-hover:text-[#0d6efd]">
              Read More
            </span>
          </button>
          <div className="2xlxl:flex hidden justify-center items-center gap-2">
            <MdSupportAgent className="text-8xl" />

            <div className="">
              <p className="text-3xl ">
                Get Support
              </p>
              <p className="text-3xl text-[#0d6efd]">
                123 - 456 - 7890
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default About;
