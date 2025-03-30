"use client";

import { FunctionComponent } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Service = {
  num: string;
  title: string;
  description: string;
  href: string;
};

const Services: FunctionComponent = () => {
  const t = useTranslations("Services");
  const services: Service[] = [
    {
      num: "01",
      title: "Frontend Development",
      description: t("frontend-desc"),
      href: "https://en.wikipedia.org/wiki/Front-end_web_development",
    },
    {
      num: "02",
      title: "Fullstack Development",
      description: t("fullstack-desc"),
      href: "https://aws.amazon.com/what-is/full-stack-development/",
    },
    {
      num: "03",
      title: "SEO",
      description: t("seo-desc"),
      href: "https://en.wikipedia.org/wiki/Search_engine_optimization",
    },
    {
      num: "04",
      title: "Logo",
      description: t("logo-desc"),
      href: "https://www.bigcommerce.com/glossary/what-is-a-logo-design/",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<BsArrowDownRight className="text-primary text-3xl" />}
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
