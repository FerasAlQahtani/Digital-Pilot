"use client";

import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';

const Footer = ({ mini, locale }: { mini?: boolean; locale: string }) => {
  const t = useTranslations("Landing");

  return (
    <footer className="w-full font-primary bg-gradient-to-r from-blue-600 to-green-600">
      {!mini && (
        <div
          className={`w-full px-6 pt-0 pb-0 ${
            locale === "ar" ? "text-right" : ""
          }`}
        >
          {/* Optional non-mini content */}
        </div>
      )}

      <div className="w-full flex justify-end px-4 pb-0 pt-2">
        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-row items-end gap-2">
            <Image
              src="/business-sa-logo.png"
              alt="Business SA Logo"
              width={80}
              height={80}
            />
            <Image
              src="/Business-sa-Cr-confirmation.png"
              alt="Business SA QR Code"
              width={70}
              height={70}
            />
          </div>

          <p className="text-xs text-blue-100 text-right px-2 pb-6">
            {t("cr-label")}: <span className="font-semibold">0000176154</span>
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center pb-4">
        <p className="text-xs text-white">
          All rights reserved © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
