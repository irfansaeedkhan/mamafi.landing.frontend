import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var l=document.createElement("link");l.rel="stylesheet";l.href="/fonts/minecraft.css";document.head.appendChild(l);}catch(e){}})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{var go=function(){document.documentElement.classList.add("animations-ready")};if("requestIdleCallback" in window){requestIdleCallback(go,{timeout:1800})}else{setTimeout(go,1200)}})();`,
          }}
        />
      </body>
    </Html>
  );
}
