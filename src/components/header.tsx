"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface HeaderProps {
  locale?: string;
}

const Header = ({}: HeaderProps) => {
  const t = useTranslations("Landing");

  return (
    <section id="Home" className="w-full font-primary overflow-x-hidden">
      <header className="flex flex-col items-center px-4 text-center gap-6 md:gap-10">
        {/* Header Text + Button */}
        <div className="flex flex-col items-center gap-3 md:gap-5 mt-10">
          <motion.h1
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className="text-black text-2xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            {t("header-title")}
          </motion.h1>
          {/* <motion.h1
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            className="text-black text-2xl sm:text-3xl md:text-6xl font-bold"
          >
            {t("Starts Here!")}
          </motion.h1> */}

<Link
  href="https://wa.me/966538474397?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
  className="mt-2 md:mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-gradientstart to-gradientend text-white font-semibold py-2 px-6 rounded-full shadow-lg text-sm sm:text-base"
>
  {t("header-button")}
    <FaWhatsapp className="text-lg" />
</Link>
        </div>

       {/* Image */}
<motion.div
  initial={{ scale: 0.95 }}
  animate={{ scale: 1 }}
className="
  w-full 
  max-w-[1400px] 
  mx-auto 
  px-4 
  -mt-24 
  md:-mt-48 
  lg:-mt-64 
  xl:-mt-80
"
>
  <Image
    draggable={false}
    priority
    src="/Process_Explained_Transparent.png"
    alt="Preview"
    width={1450}
    height={850}
    quality={100}
    className="rounded-lg w-full h-auto object-cover"
  />
</motion.div>
      </header>
    </section>
  );
};

export default Header;
