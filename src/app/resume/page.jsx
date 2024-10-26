"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { motion } from "framer-motion";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import About from "../../components/About";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full h-full text-center xl:text-left"
            >
              <About />
            </TabsContent>
            <TabsContent value="esducation" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <Skills />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
