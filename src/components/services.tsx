"use client";

import { useTranslations } from "next-intl";
import React from "react";
// import Service from "./service";
import Link from "next/link";
import Image from "next/image";
// import {
//   BarChart2,
//   Hash,
//   Laptop,
//   SearchCheck,
//   Settings,
//   Smartphone
// } from "lucide-react";

const Services = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  const serviceItems = [
    {
      img: <Image
            src="/UI UX Design.jpg"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />,
      titleKey: "ui-ux-title",
      descriptionKey: "ui-ux-description",
      message: "Hello, I am interested in your UI/UX services."
    },
    {
        img: <Image
            src="/Mobile Devolpment.jpg"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />,
      titleKey: "mobile-title",
      descriptionKey: "mobile-description",
      message: "Hello, I would like to know more about your mobile app development."
    },
    {
        img: <Image
            src="/Web Devolpment.jpg"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />,
      titleKey: "web-title",
      descriptionKey: "web-description",
      message: "Hi, I am looking for web development services."
    },
    {
        img: <Image
            src="/SEO.jpg"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />,
      titleKey: "seo-title",
      descriptionKey: "seo-description",
      message: "Hello, I need help with SEO optimization."
    },
    {
        img: <Image
            src="/Enterprise Solutions - Copy.jpg"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />,
      titleKey: "enterprise-title",
      descriptionKey: "enterprise-description",
      message: "Hi, I am interested in your enterprise solutions."
    },
    {
        img: <Image
            src="/Maintinance.jpg"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />,
      titleKey: "maintenance-title",
      descriptionKey: "maintenance-description",
      message: "Hello, I am looking for maintenance and support services."
    },
  ];

  const phone = "966538474397";

  return (
    <section id="services" className="w-full space-y-8 md:space-y-12">
      <header className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
  <h1
  className="text-blue-600 text-4xl md:text-2xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]"
  style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
>
Our Services
</h1>

<h1
  className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]"
>
  {t("services-title")}
</h1>

        <p className="font-primary text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]"
          style={{ color: "rgba(50, 78, 93, 1)" }}
>
          {t("services-description")}
        </p>
      </header>

      <div className="w-full flex justify-center">
        <Link
          href={`/${locale}/Odoo`}
          className="block w-full max-w-xl bg-white p-8 sm:p-16 rounded-xl shadow-md text-center hover:shadow-lg transition-all border border-gray-200 hover:scale-105"
        >
          <Image
            src="/odoo_logo.png"
            alt="Odoo Logo"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-8"
          />

          <Image
            src="/Odoo services prop.png"
            alt="Odoo Services"
            width={400}
            height={100}
            className="mx-auto mb-4 sm:mb-2"
          />

          <p className="font-primary mt-4 sm:mt-8 text-lg text-muted-foreground">
            {t("Explore our Odoo services")}
          </p>
        </Link>
      </div>

      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
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
              className="rounded-[40px] border border-black-500 p-6 px-12 text-left transition-transform hover:scale-105 duration-200 shadow-md bg-white hover:shadow-md"
              style={{ outline: '1px solid grey' }}

            >
              <div className="flex flex-col items-left gap-4">
                {item.img}
                <h3 className="font-primary text-lg font-semibold">{title}</h3>
                <p className="font-primary text-sm text-gray-600">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
