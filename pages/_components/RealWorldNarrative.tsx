import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";
import { APP_URL } from "@/utils/site-urls";

const RealWorldNarrative: React.FC = () => {
  return (
    <section className="relative w-full overflow-visible pt-10 lgTab:py-14 [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] z-0 hidden h-[min(140%,900px)] w-[min(140vw,1600px)] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[url('/images/bg-glow.webp')] bg-cover bg-center bg-no-repeat lgTab:block"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1370px] flex-col items-start px-4 text-left sm:px-6 lgTab:items-center gap-6 lgTab:gap-10 lgTab:text-center lg:px-10 xl:px-14">
        <div className="flex w-full justify-start lgTab:justify-center">
          <HeadingBox className="w-auto max-w-[280px]">
            Short Narrative Text
          </HeadingBox>
        </div>

        <div className="flex w-full flex-col items-start gap-4 lgTab:items-center lgTab:gap-6">
          <div className="flex justify-start lgTab:justify-center">
            <AnimatedBox
              mobileBoxColor="rgb(24 24 27)"
              desktopBoxColor="rgb(30 26 33)"
            />
          </div>
          <h2 className="subHeading animationText max-w-[1174px] font-semibold mdTab:text-5xl lgTab:mx-auto">
            Why This Partnership Matters
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[1020px] grid-cols-1 items-center gap-6 lgTab:grid-cols-2 lgTab:gap-6">
          <div className="order-2 flex justify-center lgTab:order-1 lgTab:justify-start">
            <div className="relative w-full max-w-[360px] lgTab:max-w-[420px]">
              <div
                className="pointer-events-none absolute inset-[-10%] z-0 bg-[url('/images/bg-glow.webp')] bg-contain bg-center bg-no-repeat"
                aria-hidden
              />
              <Image
                src="/images/partnership-matters.webp"
                alt="MamaFi and Certik partnership coin visual"
                width={540}
                height={540}
                className="relative z-10 h-auto w-full object-contain"
                loading="lazy"
                quality={75}
                sizes="(max-width: 924px) 360px, 420px"
              />
            </div>
          </div>

          <div className="order-1 text-left lgTab:order-2 lgTab:max-w-[620px] flex flex-col gap-2">
            <p className="text-base font-medium leading-loose text-white lgTab:text-lg">
              MamaFi believes Web3 should not exist only online.
            </p>
            <p className="mt-1 lgTab:mt-3 text-base font-medium leading-loose text-white lgTab:text-lg">
              Through Centro Ester, the project connects digital culture with
              real communities, supporting youth sports, local activities, and
              inclusive initiatives.
            </p>
            <p className="mt-1 lgTab:mt-3 text-base font-medium leading-loose text-white lgTab:text-lg">
              This partnership demonstrates how decentralized communities can
              create real-world presence beyond the digital ecosystem.
            </p>
          </div>
        </div>

        <div className="lgTab:mt-20 flex w-full flex-col items-center gap-4 lgTab:gap-8">
          <p className="text-center text-base mb-6 font-medium leading-relaxed text-white lgTab:text-2xl">
            <span className="font-bold">Join the MamaFi movement</span> and help
            build the next generation of decentralized communities.
          </p>

          <Link
            href={`${APP_URL}/auth/register?ref=7GvoMSftow`}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient-btn relative flex py-3 px-4 items-center justify-center gap-2 rounded-xl bg-gradient transition-shadow duration-300 hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.40),0_1px_0_0_rgba(255,255,255,0.20)_inset,0_3px_0_0_#000,0_-3px_0_0_rgba(255,255,255,0.16)_inset] lgTab:h-[56px] lgTab:w-[219px]"
            style={{
              boxShadow:
                "0 10px 20px 0 rgba(0, 0, 0, 0.40), 0 1px 0 0 rgba(255, 255, 255, 0.20) inset, 0 3px 0 0 #000, 0 -3px 0 0 rgba(255, 255, 255, 0.16) inset",
            }}
          >
            <span className="relative z-10 text-sm lgTab:text-base font-semibold leading-none text-white">
              Join MamaFi Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealWorldNarrative;
