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
    description: `This was my personal resume website`,
    stack: [{name:"Next.js"},{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "https://tiagosilva07.github.io",
    github: "https://github.com/tiagosilva07/tiagosilva07.github.io",
  },
  {
    num: "02",
    category: "frontend",
    title: "Simple Emoji hub",
    description: `This project, Simple Emoji Hub, was developed to enhance my skills in React and create a practical, interactive application. The Emoji Hub allows users to explore and search through a list of emojis with a clean, simple interface`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "React + Vite" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/tiagosilva07/my-emoji-hub",
  },
  {
    num: "03",
    category: "full-stack",
    title: "MasterPlat",
    description: `This work was carried out as part of the Web Programming course in the Master's program in Computer Engineering, specializing in Application Development, at the Polytechnic Institute of Cávado and Ave.
The objective of this project is to create a REST API based on NodeJS that enables the management and aggregation of theses from various sources, as well as performing searches related to them.
A CRUD was created to manage the aggregation, expecting an OAI-PMH response in XML format. All information comes from providers, which represent scientific repositories from various universities, and is stored in a MongoDB database, along with all aggregated data.
To support this API, and to document and test all its functionalities, the Swagger framework was used. On the frontend, a layout was created using the Bootstrap framework.`,
    stack: [{ name: "Bootstrap" }, { name: "mongodb" }, { name: "Node.js" },{name: "Swagger"}],
    image: "/assets/work/not_available.png",
    live: "",
    github: "https://github.com/tiagosilva07/masterplat",
  },
  {
    num: "04",
    category: "Full-Stack",
    title: "JustInTime",
    description: `The JustInTime project was the final project required to complete the university program. It is an online platform designed to provide information on employee and team vacation schedules, helping managers make informed decisions when assigning projects. This functionality ensures that projects are not allocated to teams with reduced capacity due to scheduled vacations, which could potentially impact project outcomes. Knowing in advance about reduced team availability allows managers to assign projects to alternative teams or, if necessary, adjust deadlines for specific teams.
The project scope includes planning and developing both the front-end (presentation layer) and the back-end of the platform. While certain vacation management features are not included in this version, the project architecture has been designed to support future expansions, making it easier to add new functionalities in subsequent versions.`,
    stack: [{ name: "Java" },{ name: "Spring Framework" }, { name: "Thymeleaf" }, { name: "MySQl" }, { name: "Hibernate" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/tiagosilva07/justintime",
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
              <p className="text-white/60 text-justify">{project.description}</p>
              {/**stack */}
              <ul className="flex gap-3">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-md text-accent text-center">
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
                <Link href={project.live} target="_blank" className={project.live? " ": "pointer-events-none opacity-50 cursor-not-allowed"}>
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
                <Link href={project.github} target="_blank">
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
                          className="object-cover"
                          alt="picture of tiago silva"
                          width={585}
                          height={460}
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
