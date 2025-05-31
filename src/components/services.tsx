"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Service from "./service";
import {
  BarChart2,
  Hash,
  Laptop,
  SearchCheck,
  Settings,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const Services = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");
  return (
    <section id="services" className="w-full space-y-8 md:space-y-12">
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
        <motion.h1
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]"
        >
          {t("services-title")}
        </motion.h1>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]"
        >
          {t("services-description")}
        </motion.p>
      </header>
      <motion.div
        initial={{ y: 40, scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        className="w-full grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}>
        <Service
          icon={
            <Hash className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          }
          title={t("ui-ux-title")}
          description={t("ui-ux-description")}
        /></motion.div>
        <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.08 } }}
        >
        <Service
          icon={
            <Smartphone className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          }
          title={t("mobile-title")}
          description={t("mobile-description")}
        /></motion.div>
        <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.16 } }}
        >
        <Service
          icon={
            <Laptop className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          }
          title={t("web-title")}
          description={t("web-description")}
        />
        </motion.div>
        <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.24 } }}
        >
        <Service
          icon={
            <SearchCheck className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          }
          title={t("seo-title")}
          description={t("seo-description")}
        />
        </motion.div>
        <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.32 } }}
        >
        <Service
          icon={
            <BarChart2 className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          }
          title={t("enterprise-title")}
          description={t("enterprise-description")}
        />
        </motion.div>
        <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.40 } }}
        >
        <Service
          icon={
            <Settings className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          }
          title={t("maintenance-title")}
          description={t("maintenance-description")}
        />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
