import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

interface IMainLayout {
  children: ReactNode;
}

export default function MainLayout(props: IMainLayout) {
  return (
    <>
      <Navbar />
      <>{props.children}</>
      <Footer />
    </>
  );
}
