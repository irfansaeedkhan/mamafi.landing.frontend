import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";
const Section2: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  return (
    <div className="flex flex-col-reverse  lgTab:flex-row px-3 items-start lgTab:items-center justify-between  gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-6 lgTab:pt-0 ">
      <div className="lgTab:mt-0 w-[100%] mx-auto lgTab:w-[40%] lgTab:mx-0">
        <Image
          src="/images/speaker.png"
          alt="speaker"
          width={540}
          height={540}
        />
      </div>

      <div className="content w-full lgTab:w-[52%] flex flex-col items-start gap-8">
        <HeadingBox className="w-auto">A True Digital Democracy</HeadingBox>
        <AnimatedBox />
        <h1 className="subHeading animationText max-w-[592px]">
          Freedom of speech
        </h1>
        <div className="flex flex-col gap-5 [&>*]:text-paragraph  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
          <p>
            Elon Musk bought Twitter for 44 billion declaring that he would
            invest in free speech. But the old will never lead to real change,
            freedom has only one direction, that of decentralization!
          </p>
          <p>
            Even if we do not agree with your thinking, we will fight for you to
            express it through new decentralized technologies.
          </p>
          <p>
            In a world where control over people is increasingly becoming a
            constant, the only weapon we have left to defend our voice is
            Blockchain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
