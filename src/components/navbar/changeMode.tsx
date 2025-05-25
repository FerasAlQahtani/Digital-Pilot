"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ChangeMode = ({
  className,
  noChevron,
}: {
  className?: string;
  noChevron?: boolean;
}) => {
  const { setTheme } = useTheme();

  return (
    <Select onValueChange={(e) => setTheme(e)}>
      <SelectTrigger
        className={`${noChevron && 'nochevron'} font-primary w-fit h-8 border border-muted ${className ?? ""}`}
      >
        <SelectValue
          className="flex items-center justify-center h-full w-full"
          placeholder={
            <>
              <div className="hidden dark:flex gap-2 min-w-fit">
                <Moon className="h-4 w-4" />
                <span className="xl:hidden text-xs font-semibold">Dark</span>
              </div>
              <div className="flex dark:hidden gap-2 min-w-fit">
                <Sun className="h-4 w-4" />
                <span className="xl:hidden text-xs font-semibold">Light</span>
              </div>
            </>
          }
        >
          <>
            <div className="hidden dark:flex gap-2 min-w-fit">
              <Moon className="h-4 w-4" />
              <span className="xl:hidden text-xs font-semibold">Dark</span>
            </div>
            <div className="flex dark:hidden gap-2 min-w-fit">
              <Sun className="h-4 w-4" />
              <span className="xl:hidden text-xs font-semibold">Light</span>
            </div>
          </>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className={`font-primary text-xs`}>
        <SelectItem value="light" className="cursor-pointer">
          <div className="flex space-x-2 items-center">
            <Sun className="h-4 w-4" />
            <span className="text-xs font-semibold">Light</span>
          </div>
        </SelectItem>
        <SelectItem value="dark" className="cursor-pointer">
          <div className="flex space-x-2 items-center">
            <Moon className="h-4 w-4" />
            <span className="text-xs font-semibold">Dark</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChangeMode;
