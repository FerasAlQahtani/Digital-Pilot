"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ locale, setOpen }: { locale: string, setOpen?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const t = useTranslations("Landing");
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: "home", id: "Home" },
    { href: `/${locale}/services`, label: "services", id: "Services" },
    { href: `/${locale}/about`, label: "about", id: "About" },
    { href: `/${locale}/contact`, label: "contact", id: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={
            pathname === link.href
              ? "text-transparent bg-gradient-to-r from-gradientstart to-gradientend bg-clip-text font-bold"
              : "hover:text-foreground duration-100 font-medium"
          }
          onClick={() => setOpen && setOpen(false)}
        >
          {t(link.label)}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
