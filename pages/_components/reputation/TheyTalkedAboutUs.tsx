import React from "react";
import Image from "next/image";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";
import Link from "next/link";
import clsx from "clsx";

const PartnerList = [
  {
    image: "/images/abt-lg1.svg",
    alt: "Forbes article about MamaFi",
    url: "https://forbes.es/empresas/527927/parodia-inspira-creacion-nueva-red-social/",
  },
  {
    image: "/images/coin-telegraph.png",
    alt: "Cointelegraph article about MamaFi",
    url: "https://it.cointelegraph.com/press-releases/mamafi-svela-mama-coin-trasformare-le-memecoin",
  },
  {
    image: "/images/bitcoin-mag.png",
    alt: "Bitcoin Mag article about MamaFi",
    url: "https://www.bitcoinmag.de/news/mamafi-entwickelt-sich-zum-zentrum-fuer-digitale-kommentare-und-meme-kultur",
  },
  {
    image: "/images/kypto.png",
    alt: "Krypto Uutiset article about MamaFi",
    url: "https://kryptouutiset.net/mamafi-julkistaa-mama-coinin-meemikolikoiden-muuntaminen-arvopohjaiseksi-ekosysteemiksi/",
  },
  {
    image: "/images/abt-lg4.png",
    alt: "CryptoPotato article about MamaFi",
    url: "https://cryptopotato.com/mamafi-raises-2756535-in-private-sale-strengthening-its-ethereum-layer-2-ecosystem/",
  },
  {
    image: "/images/coin-journal.png",
    alt: "CoinJournal article about MamaFi",
    url: "https://coinjournal.net/de/news/mamafi-entwickelt-sich-zum-zentrum-fuer-digitale-kommentare-und-meme-kultur/",
  },
  {
    image: "/images/crypto-news-flash.png",
    alt: "Crypto News Flash article about MamaFi",
    url: "https://www.crypto-news-flash.com/de/mamafi-entwickelt-sich-zu-einem-zentrum-fuer-digitale-kommentare-und-meme-kultur/",
  },
  {
    image: "/images/abt-lg7.svg",
    alt: "Press logo",
    url: "#",
  },
  {
    image: "/images/abt-lg8.svg",
    alt: "Press logo",
    url: "#",
  },
  {
    image: "/images/abt-lg9.svg",
    alt: "Cryptonomist article about MamaFi",
    url: "https://cryptonomist.ch/2025/01/28/mamafi-svela-mama-coin-trasformare-i-meme-coins-in-un-ecosistema-basato-sul-valore/",
  },
  {
    image: "/images/abt-lg10.png",
    alt: "Chainwire article about MamaFi",
    url: "https://chainwire.org/2024/12/16/mamafi-raises-2756535-in-private-sale-strengthening-its-ethereum-layer-2-ecosystem/",
  },
  {
    image: "/images/abt-lg11.svg",
    alt: "TechBullion article about MamaFi",
    url: "https://techbullion.com/mamafi-which-stands-for-make-america-memeable-again-mama-is-a-new-digital-initiative-that-celebrates-freedom-of-expression-in-an-increasingly-regulated-environment/",
  },
];

const TheyTalkedAboutUs: React.FC = () => {
  return (
    <div className="text-left md:text-center pt-16 md:pt-0 px-4">
      <div className="z-10 flex flex-col items-start mdTab:items-center gap-6 lgTab:gap-10">
        <HeadingBox className="w-[250px]">Our Articles</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-4 lgTab:gap-8 max-w-[1174px] z-20">
          <h2 className="lgTab:text-6xl text-2xl animationText font-semibold pb-1">
            They talked about us
          </h2>
          <p className="text-base lgTab:text-2xl text-grayLight font-bold max-w-[590px] mx-auto">
            Read best words and long articles about MamaFI to get it deeply.
          </p>
        </div>
        <div className="flex flex-col items-center relative max-w-[1274px] mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 left-[10%] md:left-[30%] z-0 h-[30%] w-[30%] lgTab:h-[10%] lgTab:w-[10%] rounded-full md:bg-[#1C83FF] bg-[#1C83FF]/20 blur-[50px] lgTab:blur-[80px]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[10%] md:right-[30%] z-0 h-[30%] w-[30%] lgTab:h-[10%] lgTab:w-[10%] rounded-full bg-[#FF294F]/20 md:bg-[#FF294F] blur-[60px] lgTab:blur-[100px]"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center relative z-10">
            {PartnerList.map((v, i) => {
              if (v.url === "#") {
                return (
                  <div
                    key={i}
                    className="flex justify-center  items-center abt-box "
                  >
                    <Image
                      src={v.image}
                      alt={v.alt}
                      width={304}
                      height={103}
                      className="h-100"
                      loading="lazy"
                    />
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  className="flex justify-center items-center abt-box cursor-pointer"
                >
                  <Link
                    target={"_blank"}
                    href={v.url}
                    className="flex items-center w-full h-full justify-center z-20"
                    aria-label={v.alt}
                  >
                    <Image
                      src={v.image}
                      alt={v.alt}
                      width={304}
                      height={103}
                      className={clsx(
                        `h-100`,
                        i === 9 && "!w-full px-1",
                        i === 2 && "!w-[45%] px-1",
                        i === 5 && "!w-[45%] px-1"
                      )}
                      loading="lazy"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheyTalkedAboutUs;
