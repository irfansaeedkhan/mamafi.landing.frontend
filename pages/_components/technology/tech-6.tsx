import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";
import LanguageDropdown from "./language-dropdown";

const Tech6: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);
  return (
    <div className="text-left mdTab:text-center pb-10 relative px-3 lgTab:px-4 mdTab:mt-0">
      <div className="z-10 flex flex-col items-start mdTab:items-center  gap-6 lgTab:gap-8 maxWidth">
        <HeadingBox className="w-[250px]">THE Whitepaper</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-8 max-w-[1174px] z-20">
          <h1 className="heading animationText">Our Whitepaper</h1>
          <h2 className="text-20px text-grayLight font-medium max-w-[72ch] mx-auto">
            We want to help Humanity survive the Age of Control that is why we
            have translated this document into over 15 languages. Download the
            Whitepaper in your language and join our digital army!
          </h2>

          <LanguageDropdown />
        </div>
        <div className="relative lgTab:mt-6 px-3 w-full flex items-center justify-center">
          <Image
            src="/images/tech-6.png"
            alt="tech"
            width={1090}
            height={818}
            className="z-10"
          />

          <div className="absolute bottom-[10%] left-[10%] z-0 h-[20%] w-[30%] rounded-full bg-[#1C83FF]/70 blur-[50px] lgTab:blur-[100px]"></div>
          <div className="absolute bottom-[7%] right-[10%] z-0 h-[22%] w-[39%] rounded-full bg-[#FF294F]/50 blur-[50px] lgTab:blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Tech6;
