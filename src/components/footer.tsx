"use client";

import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';

const Footer = ({ mini, locale }: { mini?: boolean; locale: string }) => {
  const t = useTranslations("Landing");

  return (
    <div className="relative w-full flex-col font-primary bg-blue-900 text-white">
      {!mini && (
        <div className="bg-blue-900">
          <div
            className={`w-full px-6 py-5 sm:p-10 md:p-16 ${
              locale === "ar" ? "text-right" : ""
            }`}
          >
            <h1 className="w-3/4 sm:w-2/3 xl:w-1/2 font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {t("footer-title")}
            </h1>
          </div>
        </div>
      )}

      {/* CR Logo and Info - Bottom Right */}
      <div className="absolute bottom-12 right-20 flex items-end gap-2">
        <div className="w-50 h-50">
          <Image
            src="/business-sa-logo.png" // Make sure this path is correct
            alt="Business SA Logo"
            width={200}
            height={100}
          />
        </div>
      </div>
      <div className="absolute bottom-24 right-8 flex items-end gap-2">
        <div className="w-50 h-50">
          <Image
            src="/Business-sa-Cr-confirmation.png" // Make sure this path is correct
            alt="Business SA Confirmation"
            width={80}
            height={80}
          />
        </div>
      </div>
 <div className="absolute bottom-14 right-12 items-end">
        <p className="text-xs text-blue-100 text-right">
          {t("cr-label")}: <span className="font-semibold">0000176154</span>
        </p>
      </div>

      <div className="w-full flex justify-center py-1.5">
        <p className="text-xs text-blue-100">{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
