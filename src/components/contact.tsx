"use client";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/services";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { useTranslations } from "next-intl";
import { useCycle } from "motion/react";
import { Loader } from "lucide-react";

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
    const errorList = [];

    if (!firstName) errorList.push("firstName");
    if (!lastName) errorList.push("lastName");
    if (!email) errorList.push("email");
    if (!message) errorList.push("message");

    setErrors(errorList);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (errorList.length > 0) {
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
      } catch (error) {
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
    <section className="w-full py-20 md:py-28 space-y-8 md:space-y-12">
      <div className="font-primary text-center flex flex-col items-center gap-2 md:gap-4 px-2.5 text-xs md:text-sm xl:text-[15px]">
        <h1 className="text-4xl md:text-5xl font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] 2xl:leading-[43px]">
          {t("contact-title")}
        </h1>
        <p className="text-base md:text-lg font-medium text-muted max-w-[800px] xl:max-w-[550px]">
          {t("contact-description")}
        </p>
      </div>
      <form className="w-full space-y-4 max-w-3xl mx-auto px-4" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <Input
            className={`w-full md:w-1/2 ${
              errors.includes("firstName") ? "border-red-500" : ""
            }`}
            type="text"
            placeholder={`${t("first-name")} *`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            className={`w-full md:w-1/2 ${
              errors.includes("lastName") ? "border-red-500" : ""
            }`}
            type="text"
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
          type="tel"
          placeholder={`${t("phone")}`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          className={`flex min-h-20 w-full rounded-md border border-[#060336]/[10%] dark:border-input bg-transparent px-5 py-3 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white dark:bg-[#060336]/[10%] ${
            errors.includes("message") ? "!border-red-500" : ""
          }`}
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
            <Image src="/assets/icons/rocket.png" width={32} height={32} alt="Rocket" />
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
