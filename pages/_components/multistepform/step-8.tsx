"use client";

import React from "react";
import Button from "@/components/button";
import toast from "react-hot-toast";
import { SuccessGradient } from "@/components/svgCollection";
import { inputLabel } from "./step-1";

export const sliceAccountAddress = (address: string) => {
  return `${address?.slice(0, 8)}...${address?.slice(-4)}`;
};

export const copyText = (text: string): Promise<void> => {
  return new Promise((resolve) => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(text).then(resolve);
    } else if (document.queryCommandSupported("copy")) {
      const ele = document.createElement("textarea");
      ele.value = text;
      document.body.appendChild(ele);
      ele.select();
      document.execCommand("copy");
      document.body.removeChild(ele);
      resolve();
    } else {
      resolve();
    }
  });
};

export const Step8: React.FC<any> = ({ formMethods }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className="flex flex-col items-center justify-center w-full text-left h-full">
      <div className="flex flex-col gap-6 text-center items-center">
        <SuccessGradient />
        <div className="flex flex-col items-center max-w-fit pb-3">
          {/* desktop */}
          <div className="hidden sm:flex flex-col items-center">
            <label className={inputLabel}>
              Thank you for buying $MAMA Coin!
            </label>
          </div>
          {/* mobile */}
          <div className="flex flex-col sm:hidden items-center">
            <label className={inputLabel}>Thank you for buying</label>
            <label className={inputLabel}>$MAMA Coin!</label>
          </div>
        </div>

        <p className="text-[#F0F1F5]/50 text-base">
          Check your wallet and within{" "}
          <span className="text-white">9 minutes</span> maximum you will find
          your $MAMA Coins. If you don&apos;t see it, don&apos;t forget to
          manually add the Smart Contract:
        </p>

        <div className="flex h-12 w-full items-center  gap-8 rounded-xl  bg-[#a8a8a50f] border border-[#a8a8a533] px-[18px] py-[14px] justify-between">
          <div className="flex flex-col text-xs items-start">
            <p className="text-xs font-medium text-[#DBDDE6]/50 text-[10px]">
              Smart Contract
            </p>
            <p className="text-sm font-medium text-[#DBDDE6]">
              {sliceAccountAddress("0xjejdj83j8njkioo8")}
            </p>
          </div>

          <Button
            title="Copy"
            variant="tertiary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              copyText("0xjejdj83j8njkioo8");
              toast.success("Copied to clipboard");
            }}
            className="text-xs"
          />
        </div>
      </div>
    </div>
  );
};
