"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ChangeMode from "./changeMode";
import ChangeLang from "./changeLang";
import Navigation from "./navigation";

const LandingDrawer = ({ locale }: { locale: string }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const t = useTranslations("Landing");

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger className="xl:hidden">
        <Menu className="h-7 w-7" />
      </SheetTrigger>
      <SheetContent side={"top"} className="noclose font-primary p-0 border-none">
        <SheetTitle className="hidden">Drawer</SheetTitle>
        <div className="w-full py-3.5 flex flex-row justify-between items-center px-6 md:px-10 xl:px-16 shadow-sm">
          <h1 className="text-1xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Cyber Pilot
          </h1>        
          <X
            className="cursor-pointer h-5 w-5"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="text-sm flex flex-col items-center gap-8 py-6">
          <div className="w-full flex flex-col items-center gap-4 font-medium text-muted">
            <Navigation locale={locale} setOpen={setOpen}/>
          </div>
          <div className="w-[85vw] flex flex-col items-center gap-2 2xl:gap-3">
            <Link
              href={`/${locale}/contact`}
              className="px-4 py-2 w-full h-10 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 space-x-2 text-sm font-medium bg-gradient-to-r from-gradientstart to-gradientend !text-white"
            >
              <span>{t("contact-us")}</span>
            </Link>
            <div className="w-full flex justify-between gap-2">
              <ChangeMode className="w-1/2 h-10" />
              <ChangeLang className="w-1/2 h-10" locale={locale} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LandingDrawer;
