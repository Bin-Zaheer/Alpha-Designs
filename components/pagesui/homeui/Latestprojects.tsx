import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic2.jpeg";
import pic3 from "../../../public/pic3.jpg";
import pic4 from "../../../public/pic4.jpg";
import { motion } from "framer-motion";

const marqueeItems = [
  "Fast & Reliable",
  "Professional Services",
  "Quality Work",
  "Affordable Prices",
  "24/7 Support",
];

const projects = [
  {
    name: "403B Lor 1 Toa Payoh (BTO 4-room)",
    num: 1,
    pic: pic1,
  },
  {
    name: "422B Northshore Drive (BTO 5-room)",
    num: 2,
    pic: pic2,
  },
  {
    name: "Myra (Condo)",
    num: 3,
    pic: pic3,
  },
  {
    name: "323A Tengah Drive (BTO 2-room)",
    num: 4,
    pic: pic4,
  },
];

const MarqueeContent2 = () => {
  return (
    <div className="flex shrink-0 items-center ">
      {marqueeItems.map((item, index) => (
        <div
          key={index}
          className="flex shrink-0 items-center"
        >
          <span className="mx-8 whitespace-nowrap text-xl font-semibold text-white">
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

const MarqueeContent = () => {
  return (
    <div className="flex shrink-0 items-center ">
      {marqueeItems.map((item, index) => (
        <div
          key={index}
          className="flex shrink-0 items-center"
        >
          <span className="mx-8 whitespace-nowrap text-xl font-semibold text-white">
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
    <>
      <div className="mt-40 w-[110%] -ml-10 overflow-hidden bg-black  py-2 text-white lg:rotate-6 -translate-y-55 z-50">
        <div className="marquee-track">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
      <div className="w-[110%] -ml-10 overflow-hidden bg-[#0d6efd] py-2 text-white lg:-rotate-6 lg:-translate-y-70 -translate-y-55 z-50">
        <div className="marquee-track2">
          <MarqueeContent2 />
          <MarqueeContent2 />
          <MarqueeContent2 />
          <MarqueeContent2 />
        </div>
      </div>
    </>
  );
};

const Latestprojects = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frequent Traveler",
      review:
        "Phonico made my trip to the USA so much easier. I activated my eSIM within minutes and had reliable internet everywhere I went.",
    },
    {
      name: "Michael Brown",
      role: "Digital Nomad",
      review:
        "I travel a lot for work and Phonico has become my go-to eSIM. The setup was extremely simple and the connection was fast.",
    },
    {
      name: "Emma Wilson",
      role: "Traveler",
      review:
        "No more searching for local SIM cards when I travel. I bought my plan online, scanned the QR code and was connected immediately.",
    },
    {
      name: "James Anderson",
      role: "Business Traveler",
      review:
        "The activation process was incredibly easy. I was connected as soon as I landed and didn't have to worry about finding a local SIM.",
    },
    {
      name: "Olivia Davis",
      role: "Tourist",
      review:
        "Great service and very convenient. I used Phonico throughout my trip and the connection remained stable.",
    },
    {
      name: "Daniel Wilson",
      role: "Digital Nomad",
      review:
        "Phonico saved me from expensive roaming charges. The pricing is simple and the setup takes just a few minutes.",
    },
    {
      name: "Sophia Miller",
      role: "Frequent Traveler",
      review:
        "I have used several eSIM providers, but Phonico has been one of the easiest experiences so far.",
    },
  ];
  const autoplay = Autoplay({
    delay: 303300,

    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  const duplicatedProjects = [
    ...projects,
    ...projects,
    ...projects,
  ];
  return (
    <>
      <TextMarquee />
      <p className="text-black text-center font-bold text-[27px] -translate-y-23">
        | OUR WORK |
      </p>
      <div className="w-full lg:flex justify-center items-center lg:py-10 lg:text-start lg:-mt-0  -mt-10 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Shuru mein invisible aur thoda left par hoga
          whileInView={{ opacity: 1, x: 0 }} // Screen par aate hi apni jagah par aakar visible ho jayega
          viewport={{ once: false, amount: 0.2 }} // Scroll up/down par dobara smoothly chalega
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }} // Smooth 0.8 seconds ka transition time
          className="lg:w-[20%] w-full space-y-2"
        >
          <p className="text-4xl font-semibold ">
            Latest Projects
          </p>
          <p>
            Explore our latest projects, designed
            with creativity, elegance, and
            attention to detail.
          </p>
        </motion.div>

        <div className="lg:w-[70%] w-full min-w-0 px-1 min-[350px]:px-2 sm:px-0 lg:-mt-20 mt-10 overflow-visible">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay]}
            className="w-full min-w-0 overflow-visible lg:ml-10 ml-3"
          >
            <CarouselContent className="h-[550px] overflow-visible pr-16 -ml-16 ">
              {duplicatedProjects.map(
                (project, index) => (
                  <CarouselItem
                    key={index}
                    className="min-w-0 basis-full pl-16 min-[500px]:basis-[90%] md:basis-1/2 lg:basis-1/3 overflow-visible "
                  >
                    <div className="group relative flex h-[700px] flex-col bg-white hover:bg-yellow-500 p-8 select-none overflow-visible border border-gray-300 transition-all duration-500 ease-in-out pt-23 items-center">
                      <div className="mb-6">
                        <h2 className="text-6xl font-normal leading-none text-yellow-500 group-hover:text-white transition-colors duration-300 ">
                          {project.num}
                        </h2>
                        <p className="text-lg font-semibold tracking-wide uppercase text-yellow-500 group-hover:text-white transition-colors duration-300 mt-2">
                          SEP
                        </p>
                        <div className="w-10 h-[2px] bg-yellow-500 mt-2 mb-1 group-hover:bg-white transition-colors duration-300 text-center "></div>
                      </div>
                      <p className="text-xl leading-relaxed max-w-[100%] text-black group-hover:text-white/90 transition-colors duration-300 ">
                        {project.name}
                      </p>
                      <div className="absolute left-8 -right-10 top-[45%] h-[180px]  z-20">
                        <img
                          src={project.pic.src}
                          alt="Interior Design"
                          className="w-full h-full object-cover shadow-2xl"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Latestprojects;
