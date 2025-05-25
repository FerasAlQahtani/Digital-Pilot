"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Contact from "./contact";
import { motion } from "framer-motion";

const ContactForm = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  return (
    <section
      id="contact"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full flex flex-col items-center space-y-8 md:space-y-12 py-10 px-4 sm:6 md:px-12 lg:px-20 xl:px-32 2xl:px-48"
    >
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px] relative">
        <motion.h1
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]"
        >
          {t("contact-title")}
        </motion.h1>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]"
        >
          {t("contact-description")}
        </motion.p>
      </header>
      <motion.div
        initial={{ y: 40, scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        className="py-3 md:p-6 flex items-start gap-8 bg-[#060336]/[2%] dark:bg-[#A604F2]/[5%] rounded-xl border border-[#060336]/[10%] dark:border-[#A604F2]/[20%]"
      >
        <div className="flex flex-col p-4 md:p-6 gap-10">
          <div className="flex flex-col gap-2 max-w-[500px] max-md:px-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]">
              {t("contact-us-title")}
            </h1>
            <p className="text-xs md:text-sm font-medium text-muted max-w-[800px] xl:max-w-[550px]">
              {t("contact-us-description")}
            </p>
          </div>
          <Contact />
        </div>
        <Image
          draggable={false}
          priority
          src="/assets/contact-asset.png"
          alt="Contact"
          width={500}
          height={850}
          className="hidden xl:block"
        />
      </motion.div>
    </section>
  );
};

export default ContactForm;
