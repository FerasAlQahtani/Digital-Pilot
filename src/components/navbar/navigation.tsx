"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = ({
  locale,
  setOpen,
}: {
  locale: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations("Landing");
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: "home", id: "Home" },
    { href: `/${locale}/Odoo`, label: "Odoo", id: "Odoo" },
    { href: `/${locale}/services`, label: "services", id: "Services" },
    { href: `/${locale}/about`, label: "about", id: "About" },
    { href: `/${locale}/contact`, label: "contact", id: "Contact" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        const className = isActive
          ? "text-transparent bg-gradient-to-r from-gradientstart to-gradientend bg-clip-text font-bold"
          : "hover:text-foreground duration-100 font-medium";

        return (
          <Link
            key={link.id}
            href={link.href}
            className={className}
            onClick={() => setOpen && setOpen(false)}
          >
            {link.id === "Odoo" ? (
              <Image
                src="/odoo_logo.png" // Make sure this file exists in your public/ directory
                alt="Odoo"
                width={60}
                height={20}
                className="relative -top-0.5"
              />
            ) : (
              t(link.label)
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
