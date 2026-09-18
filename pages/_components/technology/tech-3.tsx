import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";

const Tech3: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  return (
    <div className="flex flex-col-reverse  lgTab:flex-row px-3 items-start lgTab:items-center justify-between  gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-6 lgTab:pt-0 ">
      <div className=" w-[80%] mx-auto lgTab:w-[40%] lgTab:mx-0 relative">
        <Image
          src="/images/tech-3.png"
          alt="tech"
          width={540}
          height={540}
          className="z-10 w-auto"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-[20%] z-0 h-[25%] w-[30%] lgTab:h-[15%] lgTab:w-[20%] rounded-full bg-[#1C83FF] blur-[50px] lgTab:blur-[80px]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[20%] z-0 h-[25%] w-[30%] lgTab:h-[10%] lgTab:w-[25%] rounded-full bg-[#FF294F] blur-[80px] lgTab:blur-[100px]"></div>
      </div>

      <div className="content w-full lgTab:w-[52%] flex flex-col items-start gap-8">
        <HeadingBox className="w-auto">Vote2Earn</HeadingBox>
        <AnimatedBox />
        <h1 className="subHeading animationText max-w-[15ch]">
          Turn Your Voice Into Rewards!
        </h1>
        <div className="flex flex-col gap-5 [&>*]:text-paragraph  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
          <p>
            Discover a revolutionary way to engage with global issues and earn
            rewards with MamaFi&apos;s Vote2Earn platform. For the first time
            ever, users can bet on the outcomes of critical geopolitical polls,
            aligning their opinions with global trends. By participating in
            these polls, you not only shape the conversation but also unlock the
            potential to earn.
          </p>
          <p>
            MamaFi takes it a step further with a sustainable earning model,
            collecting daily commissions from top-performing users, ensuring
            that both you and the platform thrive. Step into a future where your
            voice truly counts, and pays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech3;
