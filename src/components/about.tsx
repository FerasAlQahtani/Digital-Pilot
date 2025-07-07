"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = ({locale}: {locale: string}) => {
  const t = useTranslations("Landing");

  return (
    <section
      id="about"
      className="w-full space-y-8 md:space-y-12"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
        <motion.h1
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]"
        >
          {t("about-title")}
        </motion.h1>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]"
        >
          {t("about-subtitle")}
        </motion.p>
      </header>
      <motion.div
        initial={{ y: 40, scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        className="w-full space-y-6 md:space-y-10"
      >
        <div className="w-full flex items-center gap-6 md:gap-10 xl:gap-16">
          <div className="w-1/2 md:w-5/12 space-y-10">
            <h1 className="hidden lg:block max-w-[250px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[550px] font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              {t("about-us-title")}
            </h1>
            <Image
              draggable={false}
              priority
              src="/assets/about-assets-lg.png"
              alt="About"
              width={500}
              height={750}
            />
          {/* </div>
          <div className="w-1/2 md:w-7/12 space-y-10 md:space-y-14 xl:space-y-20">
            <div className="w-full flex items-center justify-between">
              <div>
                <Image
                  draggable={false}
                  priority
                  src={`/assets/about-assets-md${
                    locale === "ar" ? "-ar" : ""
                  }.png`}
                  alt="About"
                  width={480}
                  height={750}
                />
              </div>
              <div>
                <Image
                  draggable={false}
                  priority
                  src="/assets/about-assets-sm.png"
                  alt="About"
                  width={220}
                  height={300}
                />
              </div>
            </div> */}
            <p className="w-full hidden lg:block text-justify text-sm sm:text-base md:text-lg xl:text-xl">
              {t("about-us-description")}
            </p>
            <p className="w-full lg:hidden font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              {t("about-us-title")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
