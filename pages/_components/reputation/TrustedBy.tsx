import React from "react";
import { HeadingBox } from "../heading.box";
import { IconX } from "../icons/social-icons";

const TWEET_URL =
  "https://twitter.com/MarioNawfal/status/1929568101785346446";

const TrustedBy: React.FC = () => {
  return (
    <div className="text-left md:text-center pt-5 md:pt-0 px-4 [content-visibility:auto] [contain-intrinsic-size:1px_600px]">
      <div className="z-10 flex flex-col items-start mdTab:items-center gap-6 lgTab:gap-10">
        <HeadingBox className="w-[250px]">Trusted By</HeadingBox>

        <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
          <div className="text-left md:text-center">
            <h2 className="text-[1.375rem] lgTab:text-2xl font-bold text-white mb-4">
              We&apos;re proud to have Mario Nawfal as an official partner of
              MamaFi.
            </h2>
            <p className="text-base lgTab:text-lg text-grayLight leading-relaxed max-w-4xl mx-auto">
              With over 2.2 million followers on X, Mario is one of the most
              influential voices in the crypto world. Host of the most-followed
              Spaces on X and frequently reposted by Elon Musk.
            </p>
          </div>

          <a
            href={TWEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-2xl text-left rounded-2xl border border-white/10 bg-[#1C1C1F] p-5 md:p-6 hover:border-white/20 transition-colors"
            aria-label="View Mario Nawfal partnership post on X"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <IconX className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  Mario Nawfal
                </span>
                <span className="text-grayLight text-xs opacity-70">
                  @MarioNawfal
                </span>
              </div>
            </div>
            <p className="text-grayLight text-sm md:text-base leading-relaxed mb-4">
              Official partnership announcement with MamaFi — open the full
              post on X.
            </p>
            <span className="text-sm font-semibold text-gradient">
              View post on X →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
