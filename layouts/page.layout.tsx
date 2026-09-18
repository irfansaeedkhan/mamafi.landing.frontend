import React from "react";
import MetaHead from "./meta.head";
import Header from "@/pages/_components/header";
import Footer from "@/pages/_components/footer";

interface Props {
  children: React.ReactNode;
  Layout?: string;
}

export const PageLayout: React.FC<Props> = ({
  Layout = "landing",
  ...props
}) => {
  return (
    <div className="landingLayout font-monto flex flex-col justify-between">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[99999999] focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-themeDark focus:outline-none"
      >
        Skip to main content
      </a>
      <MetaHead />
      {Layout === "landing" && <Header />}
      <main id="main-content">{props.children}</main>
      {Layout === "landing" && <Footer />}
    </div>
  );
};
