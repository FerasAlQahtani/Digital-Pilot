import Odoo from '@/components/Odoo';
import React from 'react'

type Params = Promise<{ locale: string }>

const Page = async ({ params }: { params: Params }) => {

  const { locale } = await params;

  return (
    <main className="w-full text-foreground bg-background py-16 md:py-20 flex flex-col items-center gap-14 md:gap-20 px-4 sm:6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
      <Odoo locale={locale}/>
    </main>
  )
}

export default Page
