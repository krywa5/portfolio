"use client";
import { FunctionComponent } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMui, SiStorybook, SiNextdotjs, SiReactquery } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

type Experience = {
  icon: string;
  title: string;
  description: string;
  items: { company: string; position: string; duration: string }[];
};

const experience: Experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Since 2019, my profession is coding beautiful web applications, and I still plan to do it for many years to come, as it is not only my job, but also a passion.",
  items: [
    {
      company: "Fabrity",
      duration: "2023 - present",
      position: "Senior React Developer",
    },
    {
      company: "BytesPack",
      duration: "2021 - 2023",
      position: "React Developer",
    },
    {
      company: "LionHead",
      duration: "2019 - 2021",
      position: "Freelance Web Developer",
    },
  ],
};

type Education = {
  icon: string;
  title: string;
  description: string;
  items: { institution: string; course: string; duration: string }[];
};

const education: Education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am a civil engineer, but nevertheless, I decided to change the industry. I was able to do this effectively thanks to a large number of professional courses. List below contains only the most important ones.",
  items: [
    {
      institution: "Matt Pocock",
      course: "Advanced React with TypeScript",
      duration: "2024",
    },
    {
      institution: "Matt Pocock",
      course: "Professional TypeScript Training",
      duration: "2023",
    },
    {
      institution: "Academind",
      course: "Next.js 15 & React",
      duration: "2023",
    },
    {
      institution: "devstyle.pl",
      course: "Architektura Na Froncie",
      duration: "2022",
    },
    {
      institution: "Academind",
      course: "React - The Complete Guide",
      duration: "2021",
    },
    {
      institution: "Coders lab",
      course: "JavaScript Developer: React",
      duration: "2019",
    },
    {
      institution: "Warsaw University of Technology",
      course: "Civil Engineer (degree)",
      duration: "2013 - 2018",
    },
  ],
};

type Skills = {
  title: string;
  description: string;
  skillList: { icon: JSX.Element; name: string }[];
};
const skills: Skills = {
  title: "My skills",
  description:
    "Web development requires to be up to date with the latest technologies. Here is the list of ones that I've mastered.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <BiLogoTypescript />,
      name: "typescript",
    },
    {
      icon: <SiMui />,
      name: "MUI",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiReactquery />,
      name: "tanstack query",
    },
    {
      icon: <SiStorybook />,
      name: "storybook",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

type About = {
  title: string;
  description: string;
  info: { fieldName: string; fieldValue: string }[];
};

const about: About = {
  title: "About me",
  description:
    "Hi, I'm Krystian and since 2019 I have been professionally developing web applications. I am convinced that the key to success is transforming complex requirements into a simple, elegant form that brings value to both users and business. I am enthusiastic and eager to support the implementation of projects that will benefit and satisfy both you and the users of your applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Krystian Wasilewski",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+48) 889 487 298",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "krystianwasilewski",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Polish",
    },
    {
      fieldName: "Email",
      fieldValue: "krystian.wasilewski@o2.pl",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Polish",
    },
  ],
};

const Resume: FunctionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <span className="text-white/60">{item.company}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              {/* TODO: make this div a generic component. For experience and education its the same */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.course}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <span className="text-white/60">
                            {item.institution}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span className="capitalize">{skill.name}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
