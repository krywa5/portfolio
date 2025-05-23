"use client";

import { START_YEAR_OF_MY_CAREER } from "@/shared/constants";
import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";
import CountUp from "react-countup";

type Stat = {
  num: number;
  text: string;
  suffix?: string;
};

const Stats: FunctionComponent = () => {
  const t = useTranslations("Stats");

  const stats: Stat[] = [
    {
      num: new Date().getFullYear() - START_YEAR_OF_MY_CAREER,
      text: t("years-of-experience"),
    },
    {
      num: 12,
      text: t("projects-completed"),
    },
    {
      num: 10,
      text: t("technologies-mastered"),
    },
    {
      num: 500,
      suffix: "+",
      text: t("code-commits"),
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                suffix={item.suffix}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <span
                className={`${
                  item.text.length < 15
                    ? "sm:max-w-[100px]"
                    : "sm:max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
