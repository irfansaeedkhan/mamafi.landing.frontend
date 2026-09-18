import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const RealWorldImpact: React.FC = () => {
  return (
    <section className="relative w-full overflow-visible pt-6 lgTab:py-10 [content-visibility:auto] [contain-intrinsic-size:1px_700px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[min(140%,900px)] w-[min(140vw,1600px)] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[url('/images/bg-glow.webp')] bg-cover bg-center bg-no-repeat lgTab:block"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1370px] flex-col gap-6 px-4 sm:px-6 lgTab:gap-32 lg:px-10 xl:px-14">
        <div className="flex w-full justify-start lgTab:justify-center lgTab:pb-10">
          <HeadingBox className="w-auto max-w-[280px]">
            Real World Impact
          </HeadingBox>
        </div>

        <div className="relative w-full lgTab:min-h-[min(560px,78vh)] lgTab:pb-4">
          <div className="relative z-20 flex w-full max-w-[620px] flex-col items-start gap-3 text-left lgTab:gap-5">
            <AnimatedBox />
            <h2 className="subHeading animationText w-full max-w-[656px] font-semibold mdTab:text-5xl">
              Real World Impact
            </h2>
            <h3 className="w-full max-w-[636px] text-[1.375rem] lgTab:text-2xl font-bold text-white mdTab:text-2xl">
              From Memes to Real Communities
            </h3>
            <div className="flex w-full flex-col gap-3 mdTab:gap-5">
              <p className="text-base font-medium text-grayLight mdTab:text-lg">
                MamaFi supports real-world communities through its partnership
                with Centro Ester, one of the most active sports and social hubs
                in Italy.
              </p>
              <p className="text-base font-medium text-grayLight mdTab:text-lg">
                This collaboration brings MamaFi into everyday spaces where
                sports, families, and youth initiatives create real impact.
              </p>
            </div>
          </div>

          {/* Desktop: oversized rocket — glow extends left behind copy; body reads larger on the right */}
          <div
            className="pointer-events-none absolute right-0 top-1/3 z-10 hidden h-[min(600px,82vh)] w-[min(88vw,780px)] max-w-none -translate-y-1/2 lgTab:block"
            aria-hidden
          >
            <Image
              src="/images/tech-4.webp"
              alt=""
              fill
              className="object-contain object-right"
              sizes="(min-width: 924px) 780px, 0px"
              loading="lazy"
              quality={70}
            />
          </div>

          {/* Mobile/tablet: dedicated rocket art with baked gradient + grid backdrop */}
          <div className="mt-6 flex w-full justify-center lgTab:hidden">
            <div className="relative w-full max-w-[min(100vw,460px)]">
              <Image
                src="/images/vector.webp"
                alt=""
                width={571}
                height={581}
                className="pointer-events-none contain absolute inset-0 z-0 w-full object-cover opacity-55 h-[200px]"
                aria-hidden
                loading="lazy"
              />
              <Image
                src="/images/rocket-gradient.webp"
                alt="MamaFi real world impact — rocket launch illustration"
                width={571}
                height={581}
                className="relative z-10 h-auto w-full object-contain"
                loading="lazy"
                quality={70}
                sizes="(max-width: 924px) 100vw, 460px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldImpact;
