import WorkMain from "@/components/work/WorkMain";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Work page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <WorkMain />
        </MainLayout>
      </main>
    </>
  );
}
