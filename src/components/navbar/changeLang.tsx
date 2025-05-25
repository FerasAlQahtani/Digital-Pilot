"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const ChangeLang = ({
  locale,
  className,
  noChevron,
}: {
  locale: string;
  className?: string;
  noChevron?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    router.replace(pathname.replace(`/${locale}`, `/${lang}`));
  };

  return (
    <Select onValueChange={(e) => changeLanguage(e)} defaultValue={locale}>
      <SelectTrigger
        className={`${noChevron && 'nochevron'} font-primary w-fit h-8 border border-muted ${className ?? ""}`}
      >
        <SelectValue
          placeholder={
            <div className="flex space-x-2">
              <Image
                src={`/assets/icons/${locale === "ar" ? `AR` : `US`}-flag.svg`}
                width={18}
                height={18}
                alt={locale === "ar" ? `AR` : `EN`}
              />
              <span className="text-xs font-semibold">
                {locale === "ar" ? `AR` : `ENG`}
              </span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent className="font-primary text-xs">
        <SelectItem value="en" className="cursor-pointer">
          <div className="flex space-x-2 items-center">
            <Image
              src="/assets/icons/US-flag.svg"
              width={18}
              height={18}
              alt="EN"
            />
            <span className="text-xs font-semibold">ENG</span>
          </div>
        </SelectItem>
        <SelectItem value="ar" className="cursor-pointer">
          <div className="flex space-x-2 items-center">
            <Image
              src="/assets/icons/AR-flag.svg"
              width={18}
              height={18}
              alt="AR"
            />
            <span className="text-xs font-semibold">AR</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChangeLang;
