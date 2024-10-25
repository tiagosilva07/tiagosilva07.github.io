"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAngular,FaJava } from "react-icons/fa";
import { SiCsharp, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import {ScroolArea} from "../../components/ui/scroll-area"
import { motion } from "framer-motion";

const about ={
  title:'About me',
  description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  info: [
    {
      fieldName:'Name',
      fieldValue:'Tiago Silva'
    },
    {
      fieldName:'Experience',
      fieldValue:'5 years'
    },
    {
      fieldName:'Nationality',
      fieldValue:'Portuguese'
    },
    {
      fieldName:'Languages',
      fieldValue:'Portuguese and English'
    },
  ]
};

const experience ={
    icon:'/assets/resume/badge.svg',
    title:'My experience',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items:[
      {
        company: '',
        position:'',
        duration:''
      },
      {
        company: '',
        position:'',
        duration:''
      },
      {
        company: '',
        position:'',
        duration:''
      }
    ]
}

const education ={
  icon:'/assets/resume/cap.svg',
  title:'My Education',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items:[
    {
      institution: '',
      degree:'',
      duration:''
    },
    {
      institution: '',
      degree:'',
      duration:''
    },
    {
      institution: '',
      degree:'',
      duration:''
    }
  ]
}

const skill ={
  title: 'My Skills',
  description:'',
  skillList:[
    {
      icon:<FaHtml5/>,
      name: 'Html 5'
    },
    {
      icon:<FaCss3/>,
      name: 'CSS 3'
    },
    {
      icon:<SiTailwindcss/>,
      name: 'TailWindCSS'
    },   
    {
      icon:<FaJs/>,
      name: 'JavaScript'
    },
    {
      icon:<SiNextdotjs/>,
      name:'Next.js'
    },
    {
      icon:<FaReact/>,
      name: 'React'
    },
    {
      icon:<FaAngular/>,
      name: 'Angular'
    },
    {
      icon:<FaNodeJs/>,
      name: 'Node JS'
    },
    {
      icon:<FaJava/>,
      name: 'Java'
    },
    {
      icon:<SiCsharp/>,
      name: 'CSharp'
    },
  ]
}

function page() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{ delay:2.4, duration: 0.4, ease: "easeIn"}}} 
    className="min-h[80vh] flex items-center justify-center py-12 xl:py-0">
     <div className="container mx auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="about" className="w-full"></TabsContent>
          <TabsContent value="esducation" className="w-full"></TabsContent>
          <TabsContent value="experience" className="w-full"></TabsContent>
          <TabsContent value="skills" className="w-full"></TabsContent>
        </div>
      </Tabs>
     </div>
    </motion.div>
  )
}

export default page