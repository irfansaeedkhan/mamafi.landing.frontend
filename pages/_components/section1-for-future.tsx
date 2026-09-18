import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section1: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);
  return (
    <div className="text-left mdTab:text-center pt-4 pb-10 mdTab:pt-36 mdLap:pt-44 mdLap:pb-16 relative px-4 lgTab:px-4 mt-28 mdTab:mt-0">
      <div className="flex z-0 ">
        <Image
          src="/images/Pattern1.png"
          alt="socialnftwork"
          width={655}
          height={1030}
          className="absolute top-[57%] -left-[5%] z-0 opacity-5 w-auto"
        />
      </div>
      <div className="z-10 flex flex-col items-start mdTab:items-center  gap-6 lgTab:gap-8 maxWidth">
        <HeadingBox className="w-[250px]">MAMAFI IS HERE</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-8 max-w-[1174px]">
          <h1 className="heading animationText">
            Discover the technology that WILL FUCK the Deep State forever while
            protecting your Privacy and Freedom!
          </h1>
          <h2 className="text-20px text-grayLight font-medium max-w-[90ch] mx-auto">
            World leaders cause chaos, the internet makes memes, and someone
            turns them into coins. Some make you laugh. Others can make you
            rich. This is MamaFi — the biggest Meme Coin Launchpad on Ethereum,
            where we pay the gas fees while you ride the hype.
          </h2>
        </div>
        <div className="headerImg relative -mt-3 overflow-hidden w-full">
          <Image
            src="/images/socialnftwork-new.png"
            alt="main-header"
            width={1272}
            height={714}
          />
          <div className="hidden absolute top-0 left-0 lgTab:left-6 px-3 w-full lgTab:w-[90%]">
            <Image
              src="/images/cubess.png"
              alt="cubess"
              width={1246}
              height={298}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
