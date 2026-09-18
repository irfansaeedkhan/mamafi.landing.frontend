import React from "react";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section1: React.FC = () => {
  return (
    <div className="text-left mdTab:text-center pt-4 pb-10 mdTab:pt-36 mdLap:pt-44 mdLap:pb-16 relative px-4 lgTab:px-4 mt-28 mdTab:mt-0">
      <div className="z-10 flex flex-col items-start mdTab:items-center gap-6 lgTab:gap-10 maxWidth">
        <HeadingBox className="w-full max-w-[48ch]">
          #1 Global Hub for Meme Culture
        </HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-8 max-w-[1174px]">
          <h1 className="heading animationText">
            Where memes evolve into digital experiences… powered by community,
            transparency, and technology.
          </h1>
          <p className="text-20px text-grayLight font-medium max-w-[90ch] mx-auto">
            MamaFi is a culture-driven digital platform built for meme
            enthusiasts, creators and online communities. We provide tools that
            enable the creation, discovery, and interaction with on-chain meme
            projects in a transparent and community-oriented environment. Our
            mission is to support creative expression, digital experimentation,
            and responsible participation in blockchain-based ecosystems. MamaFi
            does not provide financial advice or investment services. All
            projects are community-driven digital assets created for
            entertainment, engagement, and technological exploration. We focus
            on culture. We build infrastructure. The community decides what
            thrives.
          </p>
        </div>
        <div className="headerImg relative -mt-3 overflow-hidden w-full">
          {/* eslint-disable-next-line @next/next/no-img-element -- responsive LCP without dual preload */}
          <img
            src="/images/socialnftwork-lcp.webp"
            srcSet="/images/socialnftwork-lcp-sm.webp 750w, /images/socialnftwork-lcp.webp 1272w"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1272px"
            width={1272}
            height={714}
            alt="MamaFi digital meme community experience"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
