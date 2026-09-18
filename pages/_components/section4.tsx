import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section4: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  return (
    <div className="flex flex-col-reverse px-3 lgTab:flex-row items-center justify-between gap-0 lgTab:gap-16 maxWidth lgTab:px-4 lgTab:pt-0 lgTab:pb-10">
      <div className="mt-[40px] lgTab:mt-0 w-[100%] mx-auto lgTab:w-[50%] lgTab:mx-0">
        <Image
          src="/images/censorship.png"
          alt="censorship"
          width={540}
          height={540}
        />
      </div>

      <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
        <HeadingBox className="w-auto">Protect your content</HeadingBox>
        <AnimatedBox />
        <h1 className="subHeading animationText max-w-[656px]">
          Freedom from Censorship
        </h1>
        <div className="flex flex-col gap-5 [&>*]:text-paragraph  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px] ">
          <p>
            Have you ever wondered why centralized Social Networks can censor
            you so easily?
          </p>
          <p>
            This happens because when you create content on their spaces you are
            never the real owner of your own content.
          </p>
          <p>
            With MAMAFI Your content instead becomes assets that you can
            actually dispose of according to your will.
          </p>
          <p>
            You can NEVER be assured of building something lasting if you can
            suddenly be censored by someone just because a policy has changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
