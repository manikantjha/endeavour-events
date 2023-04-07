import TestimonialsMain from "@/components/testimonials/TestimonialsMain";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="Testimonials page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <TestimonialsMain />
        </MainLayout>
      </main>
    </>
  );
}
