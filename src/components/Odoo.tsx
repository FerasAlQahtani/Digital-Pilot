"use client";

import { useTranslations } from "next-intl";
import React from "react";
// import Service from "./service";
import Image from "next/image";
import { ShoppingCart, Settings, LayoutDashboard } from "lucide-react";

const Odoo = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  const serviceItems = [
    {
      icon: <ShoppingCart className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Enterprise Implemetnation",
      description:
        "سهولة التصفح للمتجر و سرعة استجابته و قابليته للربط مع انظمة اخرى تعتبر العوامل الاهم في نجاح متجرك الالكتروني",
      message: "Hello, I’m interested in designing an online store using Odoo.",
      image: "/store-design.png"
    },
    {
      icon: <Settings className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Support & Upgrade",
      description:
        "يمكن ربط المتجر بنظام CRM لمتابعة العملاء و ادارة المبيعات و التسويق وتحسين خدمة العملاء بشكل شامل.",
      message: "I want to know more about integrating Odoo CRM with my store.",
      image: "/crm-setup.png"
    },
    {
      icon: <LayoutDashboard className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Module Customization",
      description:
        "نظام نقاط البيع من أودو يتيح لك إدارة مبيعاتك في المتجر الفعلي بكل كفاءة وتكامل مع باقي الأنظمة.",
      message: "I'm interested in using Odoo POS solution.",
      image: "/pos-system.png"
    },
    {
      icon: <LayoutDashboard className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Training",
      description:
        "نظام نقاط البيع من أودو يتيح لك إدارة مبيعاتك في المتجر الفعلي بكل كفاءة وتكامل مع باقي الأنظمة.",
      message: "I'm interested in using Odoo POS solution.",
      image: "/pos-system.png"
    }
  ];

  const phone = "966538474397";

  return (
    <section
      id="Odoo"
      className="w-full bg-white py-20 px-4 md:px-8 lg:px-20"
    >
      <div className="text-center mb-14">
        <Image
          src="/odoo_logo.png"
          alt="Odoo"
          width={180}
          height={50}
          className="mx-auto object-contain"
        />
        <p className="mt-6 text-[#4F4F4F] text-base md:text-lg font-medium max-w-2xl mx-auto">
          {t("Odoo-description")}
        </p>
        <div className="mt-10 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src="/video_homepage.webm"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <div
        className=" mt-28 grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-10"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        
        {serviceItems.map((item, index) => {
          const message = encodeURIComponent(item.message);
          const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

          return (
            <a
              key={index}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt="Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-6 z-10 px-6 py-8 bg-white rounded-t-xl shadow-xl">
                <div className="absolute -top-6 right-6 bg-white rounded-full p-3 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#333] mb-2 text-right">{item.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed text-right mb-2">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Odoo;
