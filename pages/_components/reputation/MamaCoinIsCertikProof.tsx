import React from "react";
import Image from "next/image";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";
import AnimateButton from "./partials/AnimateButton";

const MamaCoinIsCertikProof: React.FC = () => {
  return (
    <div className="text-left md:text-center px-4 pt-16 md:pt-0 [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
      <div className="flex">
        <Image
          src="/images/Pattern1.png"
          alt=""
          width={655}
          height={1030}
          className="absolute top-[57%] -left-[5%] z-0 opacity-5 w-auto"
          aria-hidden
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-start mdTab:items-center  gap-6 lgTab:gap-10">
        <HeadingBox className="w-[250px]">Audited by Certik</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col items-center gap-[24px] md:gap-[32px] max-w-[1174px]">
          <h2 className="subHeading animationText max-w-[800px]">
            $MAMA Coin is the official Meme Coin of our ecosystem — without it,
            none of this would have ever come to life!
          </h2>

          <p className="text-base lgTab:text-lg text-grayLight font-medium max-w-[1000px] mx-auto leading-loose">
            Expanding upon traditional testing approaches, CertiK utilizes
            mathematical theorems to objectively prove that source code is
            hacker-resistant to some of the most critical vulnerabilities. With
            the mission of raising the standards of cybersecurity, CertiK is
            backed by prominent investors, including Binance Labs, Lightspeed,
            Matrix Partners, and DHVC.
          </p>
          <AnimateButton />
        </div>

        <div className="relative max-w-[650px] -mt-3 lgTab:mt-6 px-3 w-full flex items-center justify-center undownloadable">
          <Image
            src="/images/reputation/certik-coin.png"
            alt="MamaFi $MAMA Coin CertiK audit visual"
            width={650}
            height={545}
            className="mt-4 lgTab:mt-0"
            loading="lazy"
            sizes="(max-width: 768px) 90vw, 650px"
          />

          <div className="absolute top-1/2 -translate-y-1/2 left-[10%] z-0 h-[30%] w-[30%] lgTab:h-[10%] lgTab:w-[10%] rounded-full bg-[#1C83FF] blur-[50px] lgTab:blur-[80px]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[10%] z-0 h-[30%] w-[30%] lgTab:h-[10%] lgTab:w-[10%] rounded-full bg-[#FF294F] blur-[60px] lgTab:blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default MamaCoinIsCertikProof;
