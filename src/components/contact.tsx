"use client";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/services";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { useTranslations } from "next-intl";
import { useCycle } from "motion/react";
import { Loader } from "lucide-react";
import Link from "next/link";


/* eslint-disable @typescript-eslint/no-unused-vars */

const Contact = () => {
  const t = useTranslations("Landing");
  const { toast } = useToast();
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [errors, setErrors] = React.useState<string[]>([]);
  const [loading, triggerLoading] = useCycle(false, true);

  const handleSubmit = async () => {
    triggerLoading();
    setErrors([]);

    const error = [];
    if (!firstName) error.push("firstName");
    if (!lastName) error.push("lastName");
    if (!email) error.push("email");
    if (!message) error.push("message");
    setErrors(error);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (errors.length !== 0) {
      toast({
        title: t("error-empty-title"),
        description: t("error-empty-description"),
        variant: "destructive",
      });
    } else if (!emailRegex.test(email)) {
      toast({
        title: t("oops"),
        description: t("email-error"),
        variant: "destructive",
      });
    } else if (phone && !phoneRegex.test(phone)) {
      toast({
        title: t("oops"),
        description: t("phone-error"),
        variant: "destructive",
      });
    } else {
      try {
        await sendEmail({ firstName, lastName, email, phone, message });
        toast({
          title: t("success-title"),
          description: t("success-description"),
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }  catch (error) {
        toast({
          title: t("error-title"),
          description: t("error-description"),
          variant: "destructive",
        });
      }
    }
    triggerLoading();
  };

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <Input
          className={`w-full md:w-1/2 ${
            errors.includes("firstName") ? "border-red-500" : ""
          }`}
          type="name"
          placeholder={`${t("first-name")} *`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          className={`w-full md:w-1/2 ${
            errors.includes("lastName") ? "border-red-500" : ""
          }`}
          type="name"
          placeholder={`${t("last-name")} *`}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Input
        className={`w-full ${errors.includes("email") ? "border-red-500" : ""}`}
        type="email"
        placeholder={`${t("email")} *`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className={`w-full ${errors.includes("phone") ? "border-red-500" : ""}`}
        type="phone"
        placeholder={`${t("phone")}`}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        className={`flex min-h-20 w-full rounded-md border border-[#060336]/[10%] dark:border-input bg-transparent px-5 py-3 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white dark:bg-[#060336]/[10%]
          ${errors.includes("message") ? "!border-red-500" : ""}`}
        placeholder={`${t("message")} *`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className={`w-full font-primary flex items-center gap-3 justify-center bg-gradient-to-r from-gradientstart to-gradientend text-sm font-semibold sm:text-[15px] text-white py-3 px-10 rounded-md ${
          loading ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        disabled={loading}
      >
        {t("send")}
        {loading ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Image
            src="/assets/icons/rocket.png"
            width={32}
            height={32}
            alt="Rocket"
          />
        )}
      </button>
    </form>
  );
};

export default Contact;
