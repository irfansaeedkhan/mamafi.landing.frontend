import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const BuyMamafiCoin = dynamic(() => import("./buy-mamafi-coin"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 animate-pulse rounded-2xl bg-white/5" aria-hidden />
  ),
});

const Section7: React.FC = () => {
  return (
    <div
      id="buymamacoin"
      className="text-left mdTab:text-center relative [content-visibility:auto] [contain-intrinsic-size:1px_1200px]"
    >
      <div className="z-10 flex flex-col items-start mdTab:items-center  gap-6 lgTab:gap-8 maxWidth">
        <HeadingBox className="w-[40ch]">$MAMA Coin is Freedom!</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col max-w-[1174px] pb-16 lgTab:pb-20">
          <h2 className="heading animationText pb-10 md:pb-12">
            Buy $MAMA Coin
          </h2>
          <p className="text-20px text-grayLight font-medium max-w-[72ch] mx-auto pb-2 md:pb-7">
            The best time to buy is always before others and you can do it right
            NOW!
          </p>

          <div className="mt-4 p-3 border border-[#299948] rounded-xl bg-[#092D13] items-center max-w-[60ch] mx-auto flex flex-col gap-3">
            <div className="flex flex-col gap-1 items-start text-left">
              <h3 className="pt-1 font-kanit font-semibold text-[#F0F1F5] text-xs">
                Limited-Time Opportunity: Boost Your $MAMA Coin Holdings by Up
                to 15%
              </h3>
              <p className="text-xs font-normal text-[#F0F1F5]/70">
                Elevate your investment by purchasing $MAMA Coin through our
                official portal and enjoy an exclusive bonus of up to 15% extra
                tokens.
              </p>
            </div>
            <div className="flex flex-col gap-1 items-start text-left">
              <h3 className="pt-1 font-kanit font-semibold text-[#F0F1F5] text-xs">
                Exclusive Perks for Premium Holders
              </h3>
              <p className="text-xs font-normal text-[#F0F1F5]/70 pb-2">
                Invest a minimum of $50,000 in $MAMA Coin and unlock a curated
                bonus package that includes:
              </p>
              <ul className="text-xs font-normal text-[#F0F1F5] flex flex-col gap-1 list-disc pl-5">
                <li>
                  <b>Round-Trip Flight to Dubai:</b> Experience world-class
                  travel on us.
                </li>
                <li>
                  <b>Luxury Hotel Stay:</b> Enjoy premium accommodations during
                  your visit.
                </li>
                <li>
                  <b>VIP Access:</b> Secure your invitation to the exclusive
                  $MAMA Coin Holders&apos; event.
                </li>
              </ul>
              <p className="pt-2 text-xs font-normal text-[#F0F1F5]/70">
                Join the élite circle of crypto pioneers shaping the future of
                meme coins. This opportunity is available for a limited time,
                claim your advantage before it disappears.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[47rem] lgTab:h-[50rem] w-full relative max-w-[80rem]">
          <Image
            src="/svgs/arrow-top.svg"
            alt=""
            width={195}
            height={15}
            className="absolute -top-10 lgTab:-top-10 left-1/2 -translate-x-1/2"
            aria-hidden
            loading="lazy"
          />
          <Image
            src="/svgs/arrow-bottom.svg"
            alt=""
            width={195}
            height={15}
            className="absolute -bottom-8  left-1/2 -translate-x-1/2"
            aria-hidden
            loading="lazy"
          />
          <Image
            src="/svgs/arrow-left.svg"
            alt=""
            width={322}
            height={1001}
            className="h-full w-auto absolute left-[30%] lgTab:left-0 top-1/2 -translate-y-1/2 object-contain"
            aria-hidden
            loading="lazy"
          />
          <Image
            src="/svgs/arrow-right.svg"
            alt=""
            width={322}
            height={1001}
            className="h-full w-auto absolute right-[50%] lgTab:right-0 top-1/2 -translate-y-1/2"
            aria-hidden
            loading="lazy"
          />
          <div className="w-full lgTab:w-[50%] h-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
            <BuyMamafiCoin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
