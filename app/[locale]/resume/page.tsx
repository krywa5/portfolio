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
import { useTranslations } from "next-intl";
import { START_YEAR_OF_MY_CAREER } from "@/shared/constants";

type Experience = {
  icon: string;
  title: string;
  description: string;
  items: { company: string; position: string; duration: string }[];
};

type Education = {
  icon: string;
  title: string;
  description: string;
  items: { institution: string; course: string; duration: string }[];
};

type Skills = {
  title: string;
  description: string;
  skillList: { icon: JSX.Element; name: string }[];
};

type About = {
  title: string;
  description: string;
  info: { fieldName: string; fieldValue: string }[];
};

const Resume: FunctionComponent = () => {
  const t = useTranslations("Resume");
  const tAll = useTranslations();

  const experience: Experience = {
    icon: "/assets/resume/badge.svg",
    title: t("my-experience"),
    description: t("my-experience-desc"),
    items: [
      {
        company: "Fabrity",
        duration: `2023 - ${tAll("General.present").toLowerCase()}`,
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

  const education: Education = {
    icon: "/assets/resume/cap.svg",
    title: t("my-education"),
    description: t("my-education-desc"),
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

  const skills: Skills = {
    title: t("my-skills"),
    description: t("my-skills-desc"),
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

  const about: About = {
    title: t("about-me"),
    description: t("about-me-desc"),
    info: [
      {
        fieldName: t("name"),
        fieldValue: "Krystian Wasilewski",
      },
      {
        fieldName: t("phone"),
        fieldValue: "(+48) 889 487 298",
      },
      {
        fieldName: t("experience"),
        fieldValue: t("experience-value", {
          years: new Date().getFullYear() - START_YEAR_OF_MY_CAREER,
        }),
      },
      {
        fieldName: "LinkedIn",
        fieldValue: "krystianwasilewski",
      },
      {
        fieldName: t("nationality"),
        fieldValue: t("nationality-value"),
      },
      {
        fieldName: t("email"),
        fieldValue: "krystian.wasilewski@o2.pl",
      },
      {
        fieldName: t("freelance"),
        fieldValue: t("freelance-value"),
      },
      {
        fieldName: t("languages"),
        fieldValue: t("languages-value"),
      },
    ],
  };

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
            <TabsTrigger value="experience">{t("experience")}</TabsTrigger>
            <TabsTrigger value="education">{t("education")}</TabsTrigger>
            <TabsTrigger value="skills">{t("skills")}</TabsTrigger>
            <TabsTrigger value="about">{t("about-me")}</TabsTrigger>
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
