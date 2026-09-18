import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import MetaHead from "./meta.head";

const Footer = dynamic(() => import("@/pages/_components/footer"));
const Header = dynamic(() => import("@/pages/_components/header"));

interface Props {
  children: React.ReactNode;
  Layout?: string;
}

export const PageLayoutComingSoon: React.FC<Props> = ({
  Layout = "landingCommingSoon",
  ...props
}) => {
  return (
    <div className="landingLayout font-monto">
      <MetaHead />
      {Layout === "landingCommingSoon" && (
        <Suspense>
          <Header />
        </Suspense>
      )}

      <main>{props.children}</main>
    </div>
  );
};
