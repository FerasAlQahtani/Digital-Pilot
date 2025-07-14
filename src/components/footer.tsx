"use client";

import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = ({ mini, locale }: { mini?: boolean; locale: string }) => {
  const t = useTranslations("Landing");
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: "home", id: "Home" },
    { href: `/${locale}/Odoo`, label: "Odoo", id: "Odoo" },
    { href: `/${locale}/services`, label: "services", id: "Services" },
    { href: `/${locale}/about`, label: "about", id: "About" },
    { href: `/${locale}/contact`, label: "contact", id: "Contact" },
  ];

  const column1 = links.filter(link => link.id !== "Contact" && link.id !== "Projects");
  const column2 = links.filter(link => link.id === "Contact" || link.id === "Projects");
  return (
    <footer className="w-full font-primary bg-gradient-to-r from-blue-600 to-green-600">
      {!mini && (
        <div className={`w-full px-6 pt-6 pb-2 ${locale === "ar" ? "text-right" : "text-left"}`}>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-2">
              {column1.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-white hover:text-gray-200 duration-100 font-medium"
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
              {column2.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-white hover:text-gray-200 duration-100 font-medium"
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-end px-4 pb-0">
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
