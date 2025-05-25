import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/navbar/navbar";
import React from "react";

type Params = Promise<{ locale: string }>

const Page = async ({ params }: { params: Params }) => {

  const { locale } = await params;

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center">
      <LandingNavbar locale={locale} />
      <ContactForm locale={locale} />
      <Footer mini locale={locale} />
    </div>
  );
};

export default Page;
