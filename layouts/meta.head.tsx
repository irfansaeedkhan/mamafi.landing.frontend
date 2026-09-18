import Head from "next/head";
import { WEBSITE_URL } from "@/utils/site-urls";

const SITE_URL = WEBSITE_URL;
const SITE_TITLE = "MamaFi — #1 Global Hub for Meme Culture";
const SITE_DESCRIPTION =
  "World leaders cause chaos. The internet makes memes. Some turn into coins. This is MamaFi — the biggest Meme Coin Launchpad on Ethereum. Gas fees? On us.";
const OG_IMAGE = `${SITE_URL}/images/logo-bg-550-420.png`;

const MetaHead = () => {
  return (
    <Head>
      <title>{SITE_TITLE}</title>

      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta
        name="keywords"
        content="MamaFi,meme coin,web3,login,sign up"
      />
      <meta name="author" content="Irfan Saeed Khan" />
      <meta name="creator" content="Irfan Saeed Khan" />
      <link rel="author" href="mailto:irfansaeedkhan@protonmail.com" />
      <meta name="robots" content="index,follow" />
      <meta name="google" content="notranslate" />

      <link rel="canonical" href={`${SITE_URL}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:site_name" content="MamaFi" />
      <meta property="og:image" itemProp="image" content={OG_IMAGE} />
      <meta property="og:image:width" content="550" />
      <meta property="og:image:height" content="420" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />

      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#141416" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#141416" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="preload"
        as="image"
        href="/images/socialnftwork-lcp-sm.webp"
        type="image/webp"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/socialnftwork-lcp.webp"
        type="image/webp"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
    </Head>
  );
};

export default MetaHead;
