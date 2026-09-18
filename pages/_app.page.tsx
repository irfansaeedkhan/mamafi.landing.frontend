import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Montserrat_Alternates } from "next/font/google";

import "@/styles/globals.css";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  variable: "--font-monto",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={`${montserratAlternates.variable} ${montserratAlternates.className}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
