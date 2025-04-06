"use client";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Photo: FunctionComponent = () => {
  const tAll = useTranslations();

  return (
    <div className="w-full h-full relative">
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 3, duration: 0.4, ease: "easeInOut" },
        }}
        className="w-[298px] h-[298px] xl:w-[440px] xl:h-[440px] mix-blend-lighten absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <Image
          src="/assets/photo.png"
          priority
          quality={100}
          fill
          alt={tAll("General.photo-of-me")}
          className="object-contain saturate-50"
        />
      </motion.div>

      {/* circle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
