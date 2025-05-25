import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Params = Promise<{ locale: string }>

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {

  const { locale } = await params;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
