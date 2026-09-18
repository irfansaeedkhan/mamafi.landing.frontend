import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";

const Tech4: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  return (
    <div className="relative lgTab:px-4 pt-6 lgTab:pt-0">
      <Image
        src="/images/Pattern2.png"
        alt="Pattern2"
        width={655}
        height={1030}
        className="absolute bottom-[0%] right-[0%] z-0 opacity-5 w-auto"
      />

      <div className="flex flex-col-reverse px-3 items-center lgTab:flex-row-reverse  justify-between  gap-0 lgTab:gap-16 maxWidth">
        <div className="w-[80%] mx-auto lgTab:w-[40%] lgTab:mx-0 pt-10 sm:pt-0 relative">
          <Image
            src="/images/tech-4.png"
            alt="tech"
            width={540}
            height={540}
            className="z-10 w-auto"
          />
          <div className="absolute top-1/2 -translate-y-1/4  left-[20%] z-0 h-[30%] w-[30%] lgTab:h-[35%] lgTab:w-[10%] rounded-full bg-[#1C83FF] blur-[60px] lgTab:blur-[80px]"></div>
          <div className="absolute top-1/2 -translate-y-1/4 right-[20%] h-[20%] w-[36%] z-0 lgTab:h-[25%] lgTab:w-[25%] rounded-full bg-[#FF294F] blur-[70px] lgTab:blur-[100px]"></div>
        </div>
        <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
          <HeadingBox className="w-auto">Fair Launchpad</HeadingBox>
          <AnimatedBox />
          <h1 className="subHeading animationText max-w-[18ch]">
            From Idea to Token in Minutes: Secure, Simple, and Fair!
          </h1>
          <div className="flex flex-col gap-5 [&>*]:text-paragraph [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
            <p>
              At MamaFi, we&apos;re breaking barriers and empowering creators
              with tools that democratize cryptocurrency. Our Token Compiler
              allows anyone to create their own meme coin in under 5 minutes, no
              coding skills required.
            </p>
            <p>
              For just a small $MAMA Coin fee, users can seamlessly enter the
              crypto market. And with our Launchpad platform, these tokens gain
              instant exposure to a vibrant community of eager investors,
              driving rapid growth.
            </p>
            <p>
              Every token launched through the platform contributes back to the
              ecosystem, ensuring long-term value for $MAMA Coin and the
              community it powers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech4;
