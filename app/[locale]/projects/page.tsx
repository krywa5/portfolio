"use client";

import { motion } from "framer-motion";
import { useState, FunctionComponent } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectsSliderButtons from "@/components/ProjectsSliderButtons";
import { useTranslations } from "next-intl";

type Project = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};

const Projects: FunctionComponent = () => {
  const t = useTranslations("Projects");
  const tAll = useTranslations();

  const projects: Project[] = [
    {
      num: "01",
      category: "frontend",
      title: "Forkify",
      description: t("forkify-desc"),
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/assets/projects/thumb1.png",
      live: "https://krywa5.github.io/forkify/",
      github: "https://github.com/krywa5/forkify",
    },
    {
      num: "02",
      category: "fullstack",
      title: "Tax tool",
      description: t("tax-tool-desc"),
      stack: [
        { name: "React.js" },
        { name: "Typescript" },
        { name: "Material UI" },
        { name: "Firebase" },
      ],
      image: "/assets/projects/thumb2.png",
      live: "https://krywa5.github.io/tax-tool-ts/",
      github: "https://github.com/krywa5/tax-tool-ts",
    },
    {
      num: "03",
      category: "frontend",
      title: "Natours",
      description: t("natours-desc"),
      stack: [{ name: "Html 5" }, { name: "SCSS" }, { name: "Javascript" }],
      image: "/assets/projects/thumb3.png",
      live: "https://krywa5.github.io/natours/",
      github: "https://github.com/krywa5/natours",
    },
    {
      num: "04",
      category: "frontend",
      title: "Income manager",
      description: t("income-manager-desc"),
      stack: [
        { name: "React.js" },
        { name: "Typescript" },
        { name: "Material UI" },
      ],
      image: "/assets/projects/thumb4.png",
      live: "https://krywa5.github.io/income-manager",
      github: "https://github.com/krywa5/income-manager",
    },
  ];

  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {t("project", { type: project.category })}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stock */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* TODO: create component for this */}
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("live-project")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("github-repo")}</p>
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
              loop
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={`${project.title} ${tAll(
                          "General.thumbnail"
                        ).toLowerCase()}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <ProjectsSliderButtons
                containerClassName="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnClassName="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
