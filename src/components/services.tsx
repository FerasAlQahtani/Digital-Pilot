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

const Services = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  const serviceItems = [
    {
      icon: <Hash className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "ui-ux-title",
      descriptionKey: "ui-ux-description",
      message: "Hello, I am interested in your UI/UX services."
    },
    {
      icon: <Smartphone className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "mobile-title",
      descriptionKey: "mobile-description",
      message: "Hello, I would like to know more about your mobile app development."
    },
    {
      icon: <Laptop className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "web-title",
      descriptionKey: "web-description",
      message: "Hi, I am looking for web development services."
    },
    {
      icon: <SearchCheck className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "seo-title",
      descriptionKey: "seo-description",
      message: "Hello, I need help with SEO optimization."
    },
    {
      icon: <BarChart2 className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "enterprise-title",
      descriptionKey: "enterprise-description",
      message: "Hi, I am interested in your enterprise solutions."
    },
    {
      icon: <Settings className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "maintenance-title",
      descriptionKey: "maintenance-description",
      message: "Hello, I am looking for maintenance and support services."
    },
  ];

  const phone = "966538474397";

  return (
    <section id="services" className="w-full space-y-8 md:space-y-12">
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
        <h1 className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]">
          {t("services-title")}
        </h1>
        <p className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]">
          {t("services-description")}
        </p>
      </header>
      <div
        className="w-full grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6"
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
              className="block cursor-pointer transition-transform hover:scale-105 duration-200"
            >
              <Service icon={item.icon} title={title} description={description} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
