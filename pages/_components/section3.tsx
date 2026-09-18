import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";
const Section3: React.FC = () => {
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
        <div className="w-[100%] mx-auto lgTab:w-[50%] lgTab:mx-0 sm:pt-0">
          <Image
            src="/images/privacy.png"
            alt="privacy"
            width={1000}
            height={1000}
          />
        </div>
        <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
          <HeadingBox className="w-auto">PRIVACY AS A SERVICE</HeadingBox>
          <AnimatedBox />
          <h1 className="subHeading animationText max-w-[656px]">
            Freedom of Privacy
          </h1>
          <div className="flex flex-col gap-5 [&>*]:text-paragraph [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
            <p>
              Experience the next evolution of secure communication, enabled by
              the partnership between Red Rock Technology and MamaFi.
            </p>
            <p>
              MamaFi&apos;s chat system is built on Meshenger<sup>TM</sup>, Red
              Rock&apos;s advanced encrypted P2P communication layer — a
              zero-knowledge, decentralized encryption framework engineered to
              ensure that your conversations remain private, protected, and
              entirely under your control.
            </p>
            <p>
              With end-to-end encryption, no central storage, and an
              architecture designed to eliminate single points of failure,
              Meshenger<sup>TM</sup> guarantees that your data is never exposed,
              tracked, or accessible to third parties.
            </p>
            <p>
              But this goes beyond simple messaging. Integrated within
              MamaFi&apos;s SocialFi ecosystem, Meshenger<sup>TM</sup>{" "}
              transforms the platform into a sovereign, censorship-resistant
              communication space, where your privacy is preserved by design and
              not by promise.
            </p>
            <p>
              Say goodbye to platforms that compromise your security. The fusion
              of Red Rock&apos;s encryption technology and MamaFi&apos;s
              next-generation social network delivers a seamless, trustless, and
              truly private communication experience.
            </p>
            <p>
              Take control of your digital privacy, connect without limits, and
              be part of a new era of secure communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
