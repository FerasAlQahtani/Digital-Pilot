"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { ShoppingCart, Settings, LayoutDashboard } from "lucide-react";

const Odoo = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  const serviceItems = [
    {
      icon: <ShoppingCart className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Enterprise Implemetnation",
      message: "Hello, I’m interested in designing an online store using Odoo.",
      image: "/Odoo Implementation Service Design.png"
    },
    {
      icon: <LayoutDashboard className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Module Customization",
      message: "I'm interested in using Odoo POS solution.",
      image: "/Odoo Customization Service Design.png"
    },
        {
      icon: <Settings className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Support & Upgrade",
      message: "Hello, I’m interested in designing an online store using Odoo.",
      image: "/Odoo Support & Upgrading Service Design.png"
    },
    {
      icon: <LayoutDashboard className="text-[#875A7B] w-6 h-6" />,
      title: "Odoo Training",
      message: "I'm interested in using Odoo POS solution.",
      image: "/Odoo Training Service Design.png"
    }
  ];

  const phone = "966538474397";

  return (

      <section className="flex-grow w-full">
        <div className="text-center mb-14 mt-10 px-4 md:px-8 lg:px-20">
          <div className="-mt-40 flex justify-center">
            <Image
              src="/All in one.png"
              alt="Odoo Logo"
              width={440}
              height={40}
              className="object-contain"
            />
          </div>
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
          className="px-4 xl:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 pb-10"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          {serviceItems.map((item, index) => {
            const message = encodeURIComponent(item.message);
            const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition duration-300"
              >
                <div className="relative h-96 w-full">
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
                  <h3 className="text-lg font-bold text-[#333] mb-4 text-right">{item.title}</h3>
                  <div className="flex justify-end">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 0C5.37 0 0 5.373 0 12c0 2.11.547 4.114 1.586 5.896L0 24l6.264-1.63C8.014 23.452 9.99 24 12 24c6.63 0 12-5.373 12-12S18.63 0 12 0zm0 21.82c-1.716 0-3.373-.465-4.83-1.346l-.345-.203-3.717.968.992-3.625-.224-.373C3.436 15.558 3 13.82 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm4.893-6.678c-.27-.135-1.588-.783-1.835-.872-.246-.09-.426-.135-.605.135-.18.27-.69.873-.846 1.05-.156.18-.312.202-.582.067-.27-.135-1.14-.42-2.17-1.34-.802-.714-1.342-1.59-1.498-1.86-.156-.27-.017-.416.118-.551.12-.12.27-.312.405-.468.135-.156.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.605-1.46-.83-2.008-.218-.524-.44-.454-.605-.462l-.52-.009c-.18 0-.472.067-.72.337-.247.27-.945.924-.945 2.256 0 1.332.967 2.62 1.102 2.8.135.18 1.9 2.9 4.6 4.067.644.278 1.146.444 1.537.57.646.206 1.233.177 1.698.108.518-.077 1.588-.648 1.814-1.275.225-.628.225-1.165.157-1.275-.067-.112-.247-.18-.518-.315z" />
                      </svg>
                      تواصل عبر واتساب
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  );
};

export default Odoo;