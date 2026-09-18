import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section5: React.FC = () => {
  return (
    <div className="relative [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
      <Image
        src="/images/Pattern3.png"
        alt=""
        width={655}
        height={1030}
        className="absolute -top-[61%] left-[0%] z-0 opacity-5 w-auto h-auto"
        aria-hidden
        loading="lazy"
      />
      <div className="flex flex-col-reverse px-4 items-center lgTab:flex-row-reverse justify-between gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-4 lgTab:pt-0">
        <div className="mt-[40px] lgTab:mt-0 w-[80%] mx-auto lgTab:w-[44%] lgTab:mx-0">
          <Image
            src="/images/regulation.webp"
            alt="MamaFi regulation concept illustration"
            width={676}
            height={676}
            loading="lazy"
            sizes="(max-width: 924px) 80vw, 44vw"
            quality={70}
            className="w-full h-auto"
          />
        </div>
        <div className="content flex flex-col items-start gap-6 lgTab:gap-10 w-full lgTab:w-[52%]">
          <HeadingBox className="w-auto">
            Just a useless... Meme Coin!
          </HeadingBox>
          <AnimatedBox />
          <h2 className="subHeading animationText max-w-[592px]">
            Why M.A.M.A.?
          </h2>
          <div className="flex flex-col gap-5 [&>*]:text-paragraph  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
            <p>
              The name MAMA “Make America Memeable Again” is a parody of
              Trump&apos;s famous MAGA slogan. This name, as funny as it is, has
              a deep meaning.
            </p>
            <p>
              America in fact is the living symbol of Regulation, the Americans
              have managed to regulate everything even Bitcoin.
            </p>
            <p>
              Making America memeable again means building an asset class that
              nobody can regulate and the only possible tool is Meme Coins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
