import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = ({mini, locale}: {mini?: boolean, locale: string}) => {
    const t = useTranslations("Landing");
  return (
    <div className="w-full flex flex-col font-primary">
      {!mini && (
        <div className="w-full min-h-fit bg-[url('/assets/footer-background.svg')] bg-cover">
          <div
            className={`w-full px-6 py-5 sm:p-10 md:p-16 lg:p-20 2xl:p-28 flex flex-col gap-2 md:gap-4 text-white ${
              locale === "ar" && "text-right"
            }`}
          >
            <h1 className="w-3/4 sm:w-2/3 xl:w-1/2 font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {t("footer-title")}
            </h1>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center py-1.5">
        <p className="text-xs">{t("copyright")}</p>
      </div>
    </div>
  );
}

export default Footer