import ServicesMain from "@/components/services/ServicesMain";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <ServicesMain />
        </MainLayout>
      </main>
    </>
  );
}
