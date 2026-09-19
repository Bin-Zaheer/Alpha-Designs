import Image from "next/image";
import test1 from "../../../public/test1.jpeg";
import test2 from "../../../public/test2.jpg";
import test3 from "../../../public/test3.jpeg";
import test4 from "../../../public/test4.jpeg";
import test5 from "../../../public/test5.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const projects = [
  {
    name: "People Love Us",
    des: "Our contact plumber Sierra  h-[550px] Vista AZ is designed to help homeowners and businesses quickly request plumbing assistance. You can reach out for emergency repairs,",
    cus: "Mr tan",
  },
  {
    name: "People Love Us",
    des: "Our contact plumber Sierra Vista AZ is designed to help homeowners and businesses quickly request plumbing assistance. You can reach out for emergency repairs,",
    cus: "Mr tan",
  },
  {
    name: "People Love Us",
    des: "Our contact plumber Sierra Vista AZ is designed to help homeowners and businesses quickly request plumbing assistance. You can reach out for emergency repairs,",
    cus: "Mr tan",
  },
  {
    name: "People Love Us",
    des: "Our contact plumber Sierra Vista AZ is designed to help homeowners and businesses quickly request plumbing assistance. You can reach out for emergency repairs,",
    cus: "Mr tan",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const autoplay = Autoplay({
    delay: 344000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  const duplicatedProjects = [...projects];

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-15 mt-15">
      {/* LEFT IMAGES — DESKTOP ONLY */}
      <div className="xl:flex hidden justify-center items-center gap-4">
        <div className="justify-items-start space-y-7">
          <Image
            src={test1}
            alt="My Pics"
            className="w-38 h-38 aspect-square rounded-full object-cover border-6 border-yellow-500 shadow-2xl hover:-translate-x-3 transition-all duration-300"
          />

          <Image
            src={test2}
            alt="My Pics"
            className="w-42 h-42 aspect-square rounded-full object-cover border-6 border-yellow-500 shadow-2xl hover:-translate-x-3 transition-all duration-300"
          />
        </div>

        <div className="justify-items-end space-y-10 ml-10">
          <Image
            src={test3}
            alt="My Pics"
            className="w-30 h-30 aspect-square rounded-full object-cover border-6 border-yellow-500 shadow-2xl hover:translate-x-3 transition-all duration-300"
          />

          <Image
            src={test4}
            alt="My Pics"
            className="w-50 h-50 aspect-square rounded-full object-cover border-6 border-yellow-500 shadow-2xl hover:translate-x-3 transition-all duration-300"
          />

          <Image
            src={test5}
            alt="My Pics"
            className="w-39 h-39 aspect-square rounded-full object-cover border-6 border-yellow-500 shadow-2xl hover:translate-x-3 transition-all duration-300"
          />
        </div>
      </div>

      {/* DOTS — DESKTOP ONLY */}
      <div>
        <div className="lg:flex hidden rotate-90 justify-center items-center gap-13 mt-8 relative z-20">
          {Array.from({ length: count }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  api?.scrollTo(index)
                }
                className={`rounded-full transition-all duration-300 z-20 ${
                  current === index
                    ? "h-6 w-6 bg-yellow-500 border-6 border-[#fff1b9]"
                    : "h-6 w-6 bg-white border-2 border-yellow-500 hover:bg-yellow-500 hover:border-6 hover:border-[#fff1b9]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ),
          )}

          <div className="h-[1.5px] w-115 bg-black absolute top-2.7 -left-27 z-0 bg-[linear-gradient(82deg,rgba(255,242,242,1)_0%,rgba(0,0,0,1)_50%,rgba(255,255,255,1)_100%)]"></div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="w-full lg:w-[50%]">
        <div className="w-full px-0 sm:px-2 lg:px-1 mt-10 lg:mt-20 overflow-visible">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay]}
            setApi={setApi}
            className="w-full overflow-visible"
          >
            <CarouselContent className="h-auto lg:h-[550px] h-[480px] overflow-visible lg:pr-16 lg:-ml-16 space-y-10">
              {duplicatedProjects.map(
                (project, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full basis-full pl-0 sm:pl-4 lg:pl-16 overflow-hidden"
                  >
                    <div className=" group relative flex lg:text-start text-center w-full h-auto min-h-[600px] lg:h-[700px] flex-col bg-white p-6 sm:p-8 select-none overflow-visible transition-all duration-500 ease-in-out pt-16 lg:pt-23">
                      <div className="mb-6 space-y-7">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-none text-black transition-colors duration-300 mb-10 w-full">
                          {project.name}
                        </h2>

                        <p className="flex items-center text-xl gap-3 font-semibold tracking-wide uppercase text-[#f5ab00c5] transition-colors duration-300 mt-2 justify-center lg:justify-start">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>
                      </div>

                      <p className="text-lg leading-relaxed lg:max-w-[90%] w-full text-black font-extralight transition-colors duration-300">
                        {project.des}
                      </p>

                      <div className="h-[180px] text-2xl z-20 w-full font-semibold mt-5">
                        "{project.cus}"
                      </div>
                    </div>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
          </Carousel>

          <div className="lg:hidden flex  justify-center items-center gap-5 -mt-15 ">
            {Array.from({ length: count }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    api?.scrollTo(index)
                  }
                  className={`rounded-full transition-all duration-300 z-20 ${
                    current === index
                      ? "h-6 w-6 bg-yellow-500 border-6 border-[#fff1b9]"
                      : "h-6 w-6 bg-white border-2 border-yellow-500 hover:bg-yellow-500 hover:border-6 hover:border-[#fff1b9]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
