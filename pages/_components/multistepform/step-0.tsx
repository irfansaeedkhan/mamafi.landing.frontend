"use client";

import React from "react";
import Image from "next/image";

export const Step0: React.FC<any> = () => {
  return (
    <div className="card-content overflow-hidden rounded-3xl z-40 h-full relative flex flex-col items-center justify-start">
      <div className="flex items-center justify-center w-full h-[60%] bg-gradient- from-[#000000] to-[#F0F1F5]">
        <Image
          className="w-[60%] object-contain"
          src="/images/trumpform.png"
          alt="trump"
          width={500}
          height={500}
        />
      </div>
      <div className="-mt-10 flex flex-col items-center justify-between p-4">
        <div className="text-center">
          <h3 className="text-26px font-semibold text-[#F0F1F5]">
            Well, we are about to begin...
          </h3>
          <Image
            className="object-contain mx-auto"
            src="/images/bottom-border.png"
            alt="trump"
            width={234}
            height={4}
          />
          <p className="text-xs mobile:text-18px text-white/30 font-medium pt-5">
            The most Bullish Token of 2025 is about to be yours! At the end of
            the process, after following these simple steps, the $MAMA Coins
            will be sent directly to the Ethereum wallet that you will indicate
            on the next page.
          </p>
        </div>
      </div>
    </div>
  );
};
