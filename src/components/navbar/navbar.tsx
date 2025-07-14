import React from "react";
import Link from "next/link";
import ChangeLang from "./changeLang";
import ChangeMode from "./changeMode";
import { useTranslations } from "next-intl";
import LandingDrawer from "./drawer";
import Navigation from "./navigation";
import Image from "next/image";

const LandingNavbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("Landing");

  return (
    <nav className={`w-full bg-background font-primary py-7 flex justify-between items-center px-6 md:px-10 xl:px-16 sticky top-0 z-50 dark:border-b shadow-sm ${locale === 'ar' && 'flex-row-reverse'}`}>
<div className="flex items-center gap-3 mt-1">
  <Link 
    href={`/${locale}/Odoo`}    
  >
  <img 
  src="/logo.png" alt="Cyber Pilot Logo" 
  height={50}
  width={50}
   />
  </Link>
  <h1 className="font-bold -mt-3">Cyber Pilot</h1>
</div>    
      <div className={`hidden xl:flex items-center gap-8 text-1x2 font-medium text-muted 2xl:absolute 2xl:bottom-[55%] 2xl:right-[50%] 2xl:translate-x-1/2 2xl:translate-y-1/2 ${locale === 'ar' && 'flex-row-reverse'}`}>
        <Navigation locale={locale} />
      </div>

      <div className={`hidden xl:flex items-center gap-2 2xl:gap-3 min-w-fit ${locale === 'ar' && 'flex-row-reverse'}`}>
        <ChangeMode noChevron />
        <ChangeLang locale={locale} noChevron />
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-5 py-2 h-8 space-x-2 text-sm font-medium bg-gradient-to-r from-gradientstart to-gradientend !text-white"
        >
          <span>{t("contact-us")}</span>
        </Link>
      </div>
      <LandingDrawer locale={locale} />
    </nav>
  );
};

export default LandingNavbar;
