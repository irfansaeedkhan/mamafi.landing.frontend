import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";

const Tech1: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);
  return (
    <div className="text-left mdTab:text-center pt-4 pb-0 mdTab:pt-36 mdLap:pt-44 mdLap:pb-16 relative px-3 lgTab:px-4 mt-28 mdTab:mt-0">
      <div className="flex z-0 ">
        <Image
          src="/images/Pattern1.png"
          alt="patterns"
          width={655}
          height={1030}
          className="absolute top-[57%] -left-[5%] z-0 opacity-5 w-auto"
        />
      </div>
      <div className="z-10 flex flex-col items-start mdTab:items-center  gap-6 lgTab:gap-8 maxWidth">
        <HeadingBox className="w-[250px]">Technology</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-8 max-w-[1174px]">
          <h1 className="heading animationText">
            Discover the technology that WILL FUCK the Deep State forever while
            protecting your Privacy and Freedom!
          </h1>
          <h2 className="text-20px text-grayLight font-medium max-w-[72ch] mx-auto">
            A path to Freedom is never an easy journey... it is rather a
            lifelong battle. A battle that cannot be won by a few men but needs
            the strength and spirit of unity of the entire human family.
          </h2>
        </div>
        <div className="relative -mt-3 lgTab:mt-6 px-3 w-full flex items-center justify-center">
          <Image
            src="/images/tech-1.png"
            alt="tech-1"
            width={822}
            height={738}
          />

          <div className="absolute top-1/2 -translate-y-1/2 left-[25%] z-0 h-[30%] w-[30%] lgTab:h-[10%] lgTab:w-[23%] rounded-full bg-[#1C83FF]/50 blur-[50px] lgTab:blur-[80px]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[17%] z-0 h-[30%] w-[30%] lgTab:h-[10%] lgTab:w-[23%] rounded-full bg-[#FF294F]/50 blur-[40px] lgTab:blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Tech1;
