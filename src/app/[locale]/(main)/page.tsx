import About from "@/components/about";
import Services from "@/components/services";

interface PageProps {
  params: {
    locale: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { locale } = params;

  return (
    <main className="w-full text-foreground bg-background py-16 md:py-20 flex flex-col items-center gap-14 md:gap-20 px-4 sm:6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
      <Services locale={locale} />
      <About locale={locale} />
    </main>
  );
};

export default Page;