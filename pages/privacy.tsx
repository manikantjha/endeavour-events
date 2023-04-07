import PrivacyMain from "@/components/privacy/PrivacyMain";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Services page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <PrivacyMain />
        </MainLayout>
      </main>
    </>
  );
}
