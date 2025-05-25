import LandingNavbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

type Params = Promise<{ locale: string }>

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {

  const { locale } = await params;

  return (
    <>
      <LandingNavbar locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
