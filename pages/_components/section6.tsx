import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section6: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  return (
    <div className="flex flex-col px-3 lgTab:flex-row items-center justify-between gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-12 lgTab:pt-0">
      <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
        <HeadingBox className="w-auto ">
          your assets in the Metaverse
        </HeadingBox>
        <AnimatedBox />
        <h1 className="subHeading animationText max-w-[592px]">
          <span className="uppercase">NFT</span> Metaverse Marketplace
        </h1>
        <div className="flex flex-col gap-5 [&>*]:text-paragraph  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
          <p>
            The limitation of most NFTs is that they have no underlying and no
            purpose, no prospect of accessibility to anything.
          </p>
          <p>
            On MAMAFI we have focused on the opportunities that the world of
            NFTs can give us by already opening up avenues for the future.
          </p>
          <p>
            We believe that NFTs will be the digital property certificates in
            the Metaverse and that the Metaverse will be the new Internet where
            we will be moving shortly.
          </p>
          <p>
            Through our NFT Marketplace you can get access to the most
            high-potential opportunities regarding the new Metaverse Industry.
          </p>
        </div>
      </div>
      <div className="mt-[20px] lgTab:mt-0 w-[80%] mx-auto lgTab:w-[40%] lgTab:mx-0">
        <Image
          src="/images/Metaverse.png"
          alt="Metaverse"
          width={540}
          height={540}
        />
      </div>
    </div>
  );
};

export default Section6;
