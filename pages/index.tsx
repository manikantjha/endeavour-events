import HomeMain from "@/components/home/HomeMain";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Endeavour Events</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <HomeMain />
        </MainLayout>
      </main>
    </>
  );
}
