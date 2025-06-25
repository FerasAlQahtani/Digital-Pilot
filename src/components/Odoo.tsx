"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Service from "./service";
import Image from "next/image";
import {
//   BarChart2,
//   Database,
//   Globe,
//   Settings,
  ShoppingCart,
//   Users2,
} from "lucide-react";

const Odoo = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  const serviceItems = [
    {
      icon: <ShoppingCart className="text-[#875A7B] h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "odoo-erp-title",
      descriptionKey: "odoo-erp-description",
      message: "Hello, I’m interested in Odoo ERP implementation Odoo."
    },
  ];

  const phone = "966538474397";

  return (
    <section
      id="Odoo"
      className="w-full space-y-8 md:space-y-12 bg-[#F2F2F2] py-10 px-4 rounded-lg"
    >
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
<h1 className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]">
  <Image
    src="/odoo_logo.png"  // <-- Make sure this image is in your public/ folder
    alt="Odoo"
    width={200}           // Adjust size as needed
    height={50}
    className="object-contain"
  />
</h1>
        <p className="text-base md:text-lg font-medium text-gray-700 max-w-[800px] xl:max-w-[550px]">
          {t("Odoo-description")}
        </p>
      </header>
      <div
        className="w-full grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {serviceItems.map((item, index) => {
          const title = t(item.titleKey);
          const description = t(item.descriptionKey);
          const message = encodeURIComponent(item.message);
          const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
          return (
            <a
              key={index}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer transition-transform hover:scale-105 duration-200 bg-white rounded-xl shadow-sm p-4"
            >
              <Service icon={item.icon} title={title} description={description} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Odoo;
