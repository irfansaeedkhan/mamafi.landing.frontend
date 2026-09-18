import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";

const Tech2: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  return (
    <div className="relative">
      <Image
        src="/images/Pattern3.png"
        alt="Pattern2"
        width={655}
        height={1030}
        className="absolute -top-[61%] left-[0%] z-0 opacity-5 w-auto"
      />
      <div className="flex flex-col-reverse px-3 items-center lgTab:flex-row-reverse justify-between gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-12 lgTab:pt-0">
        <div className="mt-[40px] lgTab:mt-0 w-[80%] mx-auto lgTab:w-[44%] lgTab:mx-0 relative">
          <Image
            src="/images/tech-2.png"
            alt="tech"
            width={576}
            height={576}
            className="z-10 w-auto"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-[15%] z-0 h-[20%] w-[30%] lgTab:h-[15%] lgTab:w-[20%] rounded-full bg-[#1C83FF] blur-[50px] lgTab:blur-[80px]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[20%] z-0 h-[25%] w-[30%]  lgTab:h-[10%] lgTab:w-[25%] rounded-full bg-[#FF294F] blur-[100px]"></div>
        </div>
        <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
          <HeadingBox className="w-auto">Meshenger</HeadingBox>
          <AnimatedBox />
          <h1 className="subHeading animationText max-w-[10ch]">
            You&apos;ll forget Telegram!
          </h1>
          <div className="flex flex-col gap-5 [&>*]:text-paragraph  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
            <p>
              Get ready for the next generation of secure communication with
              Meshenger, MAMAFI&apos;s encrypted P2P chat platform built on
              Ethereum. Meshenger offers ironclad end-to-end encryption, giving
              you the peace of mind that your conversations are truly
              private—unlike Telegram, which allegedly compromised its servers
              after Pavel Durov&apos;s arrest.
            </p>
            <p>
              But this is more than just messaging. Integrated with our SocialFi
              platform, it becomes a hub for censorship-free interactions, where
              your data is never at risk. Say goodbye to platforms that betray
              your trust. Once you experience MAMAFI&apos;s seamless blend of
              social networking and secure communication, you&apos;ll forget
              other platforms ever existed. Get ready to take control of your
              online privacy, connect without limits, and be part of a
              revolution that empowers you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech2;
