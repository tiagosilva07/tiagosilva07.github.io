"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import SliderButtons from "../../components/SliderButtons";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "tiagosilva07.github.io",
    github: "https://github.com/tiagosilva07/tiagosilva07.github.io",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "Project 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Java" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/tiagosilva07/justintime",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/tiagosilva07/my-emoji-hub",
  },
  {
    num: "04",
    category: "Full-Stack",
    title: "Project 4",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/tiagosilva07/masterplat",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/**Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/**category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/**description */}
              <p className="text-white/60">{project.description}</p>
              {/**stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name} {index !== project.stack.length - 1 && "|"}
                    </li>
                  );
                })}
              </ul>
              {/**stack */}
              <div className="border border-white/20"></div>
              {/**Buttons */}
              <div className="flex items-center gap-4">
                {/**live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover: text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/**github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover: text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
