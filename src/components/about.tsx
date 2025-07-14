"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Service from "./service";
import Image from "next/image";
import { CodeIcon } from "lucide-react";

const About = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  const serviceItems = [
    {
      image: "/Project design LL.jpg",
      icon: <CodeIcon className="text-gradientend h-7 w-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      titleKey: "Project-1",
      descriptionKey: "Project-1-describtion",
      message: "Hi, I'm interested in your services."
    }
  ];

  const phone = "966538474397";

  return (
    <section id="services" className="w-full space-y-8 md:space-y-12">
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
        <h1 className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]">
          {t("about-title")}
        </h1>
        <p className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]">
          {t("about-subtitle")}
        </p>
      </header>
      <div
        className="w-full grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {serviceItems.map((item, index) => {
          const title = t(item.titleKey);
          const description = t(item.descriptionKey);
          const message = encodeURIComponent(item.message || title);
          const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

          return (
            <a
              key={index}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer transition-transform hover:scale-105 duration-200"
            >
              <div className="w-full h-full bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center gap-4">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={title}
                    width={340}
                    height={64}
                  />
                )}
                <Service
                  icon={item.icon}
                  title={title}
                  description={description}
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default About;
