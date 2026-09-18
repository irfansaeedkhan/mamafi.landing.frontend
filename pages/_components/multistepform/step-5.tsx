"use client";

import React from "react";
import clsx from "clsx";
import {
  TGradient,
  TWhite,
  XGradient,
  Xwhite,
} from "@/components/svgCollection";
import { inputLabel } from "./step-1";

export const Step5: React.FC<any> = ({ formMethods }) => {
  const {
    setValue,
    register,
    watch,
    formState: { errors },
  } = formMethods;

  const followingX = watch("followingX");
  const followingTelegram = watch("followingTelegram");
  const followOption = watch("followOption");

  const validateFollowOption = () => {
    if (!followingX && !followingTelegram && followOption !== "no-follow") {
      return "Please select an option";
    }
    return true;
  };

  return (
    <div className="flex flex-col items-start gap-6 w-full">
      <div className="flex flex-col items-start max-w-fit pb-3">
        {/* desktop */}
        <div className="hidden sm:flex flex-col items-start">
          <label className={inputLabel}>
            Increase your chances of becoming eligible for
          </label>
          <label className={inputLabel}>
            future AirDrops by following us on our main
          </label>
          <label className={inputLabel}>channels:</label>
        </div>
        {/* mobile */}
        <div className="flex flex-col sm:hidden items-start">
          <label className={inputLabel}>Increase your chances of</label>
          <label className={inputLabel}>becoming eligible for future</label>
          <label className={inputLabel}>AirDrops by following us on </label>
          <label className={inputLabel}>our main channels:</label>
        </div>
      </div>

      <div className="flex gap-4 w-full md:flex-row flex-col">
        <a
          href="https://x.com/mamafi_platform"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            setValue("followingX", !followingX);
            setValue("followOption", "");
          }}
          className={clsx(
            "flex flex-col items-center justify-center w-full h-36 border rounded-xl cursor-pointer transition-all duration-200 text-base font-semibold gap-3",
            followingX
              ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
              : "bg-[#00000029] border-[#a8a8a533] text-[#DBDDE6]"
          )}
        >
          {followingX ? (
            <XGradient className="h-10 w-10 shrink-0" />
          ) : (
            <Xwhite className="h-10 w-10 shrink-0" />
          )}
          <span
            className={clsx(followingX ? "text-gradient" : "text-[#DBDDE6]")}
          >
            {followingX ? "Following on X" : "Follow on X"}
          </span>
        </a>

        {/* Follow on Telegram */}
        <a
          href="https://t.me/mamafi_platform"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            setValue("followingTelegram", !followingTelegram);
            setValue("followOption", "");
          }}
          className={clsx(
            "flex flex-col gap-3 items-center justify-center w-full h-36 border rounded-xl cursor-pointer transition-all duration-200 text-base font-semibold",
            followingTelegram
              ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
              : "bg-[#00000029] border-[#a8a8a533] text-[#DBDDE6]"
          )}
        >
          {followingTelegram ? (
            <TGradient className="h-10 w-10 shrink-0" />
          ) : (
            <TWhite className="h-10 w-10 shrink-0" />
          )}
          <span
            className={clsx(
              followingTelegram ? "text-gradient" : "text-[#DBDDE6]"
            )}
          >
            {followingTelegram ? "Following on Telegram" : "Follow on Telegram"}
          </span>
        </a>
      </div>

      <div className="mt-4 w-full">
        <label
          className={clsx(
            "flex items-center justify-between gap-3 px-4 py-3 border rounded-xl bg-[#a8a8a50f] border-[#a8a8a533] w-full",
            followOption === "no-follow" && "ring-2 ring-[#a8a8a533]"
          )}
        >
          <span
            className={clsx(
              followOption === "no-follow" ? "text-white" : "text-[#DBDDE6]"
            )}
          >
            No, I don&apos;t want to follow
          </span>
          <input
            type="radio"
            name="followOption"
            value="no-follow"
            {...register("followOption", {
              validate: validateFollowOption,
            })}
            checked={followOption === "no-follow"}
            onChange={() => {
              setValue("followOption", "no-follow");
              setValue("followingX", false);
              setValue("followingTelegram", false);
            }}
            className={clsx(
              "form-radio h-5 w-5 rounded-full transition-all duration-200 appearance-none",
              followOption === "no-follow"
                ? "bg-white border-white"
                : "!bg-white/30 border-gray-400"
            )}
          />
        </label>
      </div>

      {errors.followOption && (
        <p className="mt-1 text-xs text-red text-left">
          {typeof errors.followOption.message === "string" &&
            errors.followOption.message}
        </p>
      )}
    </div>
  );
};
