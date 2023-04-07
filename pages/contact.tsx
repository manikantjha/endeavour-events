import ContactMain from "@/components/contact/ContactMain";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <ContactMain />
        </MainLayout>
      </main>
    </>
  );
}
