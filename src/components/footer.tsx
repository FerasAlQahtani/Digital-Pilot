"use client";

import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ mini, locale }: { mini?: boolean; locale: string }) => {
  const t = useTranslations("Landing");

  const links = [
    { href: `/${locale}`, label: "home", id: "Home" },
    { href: `/${locale}/Odoo`, label: "Odoo", id: "Odoo" },
    { href: `/${locale}/services`, label: "services", id: "Services" },
    { href: `/${locale}/about`, label: "about", id: "About" },
  ];

  const column1 = links.filter(link => link.id !== "Contact" && link.id !== "Projects");
  const column2 = links.filter(link => link.id === "Contact" || link.id === "Projects");

  return (
    <footer className="w-full font-primary bg-gradient-to-r from-blue-600 to-green-600 text-white">
      {!mini && (
        <div className="w-full px-6 pt-10 pb-4">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${locale === "ar" ? "text-right" : "text-left"}`}>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold mb-2 uppercase">{t("navigation")}</h4>
              {column1.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="hover:text-gray-200 transition duration-150"
                >
                  {link.id === "Odoo" ? (
                    <Image
                      src="/odoo_logo.png"
                      alt="Odoo"
                      width={60}
                      height={20}
                      className="relative -top-0.5"
                    />
                  ) : (
                    t(link.label)
                  )}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold mb-2 uppercase">{t("contact")}</h4>
              {column2.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="hover:text-gray-200 transition duration-150"
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 items-start md:items-end">
              <div className="flex items-center gap-3">
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
              <p className="text-xs text-blue-100">
                {t("cr-label")}: <span className="font-semibold">0000176154</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full text-center border-t border-white/20 mt-4 py-4">
        <p className="text-xs">All rights reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
