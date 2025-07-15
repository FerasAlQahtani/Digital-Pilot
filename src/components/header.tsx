"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeaderProps {
  locale: string;
}

const Header = ({ locale }: HeaderProps) => {
  const t = useTranslations("Landing");
  const currentLocale = useLocale(); // optional validation or debugging

  return (
    <section id="Home" className="w-full font-primary space-y-8 md:space-y-12">
      <header className="flex flex-col items-center gap-8 md:gap-10 px-2.5 text-xs md:text-sm xl:text-[15px]">
        <div className="text-center flex flex-col items-center gap-2 md:gap-6">
          <motion.h1
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]"
          >
            {t("header-title")}
          </motion.h1>
          <motion.p
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]"
          >
            {t("header-description")}
          </motion.p>
        </div>
        <motion.div initial={{ y: 40 }} animate={{ y: 0 }}>
          <div className="flex gap-1 items-center">
            <Link
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-gradientstart to-gradientend text-sm font-semibold sm:text-[15px] text-white py-2 px-10 rounded-md"
            >
              {t("header-button")}
            </Link>
            <Link
              className="bg-gradient-to-r from-[#15a360] to-[#25d366] text-sm font-semibold sm:text-[15px] text-white py-2 px-2 rounded-md"
              href="https://wa.me/966538474397?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icons/whatsapp.svg"
                width={20}
                height={20}
                alt="WhatsAPP"
              />
            </Link>
          </div>
        </motion.div>
      </header>
      <div className="w-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="w-fit relative flex justify-center items-center flex-shrink"
        >
          <Image
            draggable={false}
            priority
            src="/assets/header-dashboard.svg"
            alt="Preview"
            width={1450}
            height={850}
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;