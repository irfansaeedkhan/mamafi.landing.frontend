"use client";

import React from "react";
import clsx from "clsx";
import {
  IconEnvelope,
  IconExclamationCircle,
  IconTelegram,
} from "../icons/social-icons";
import { inputLabel } from "./step-1";

export const Step6: React.FC<any> = ({ formMethods }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className="flex flex-col gap-4 w-full text-left">
      <div className="flex flex-col items-start max-w-fit pb-3">
        <label className={inputLabel}>Let&apos;s keep in touch!</label>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="relative flex items-center gap-3 w-full">
          <IconEnvelope className="absolute left-4 text-white size-5" />
          <input
            type="email"
            placeholder="your@example.com"
            className={clsx(
              "w-full pl-12 pr-4 py-3 text-base text-white rounded-xl bg-[#a8a8a50f] border border-[#a8a8a533] outline-none focus:ring-2 focus:ring-[#a8a8a533]",
              errors.email ? "border-red focus:ring-red" : ""
            )}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-xs text-red text-left">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="relative flex items-center gap-3 w-full">
          <IconTelegram className="absolute left-4 text-white size-5" />
          <input
            type="text"
            placeholder="@your_telegram username"
            className={clsx(
              "w-full pl-12 pr-4 py-3 text-base text-white rounded-xl bg-[#a8a8a50f] border border-[#a8a8a533] outline-none focus:ring-2 focus:ring-[#a8a8a533]",
              errors.telegram ? "border-red focus:ring-red" : ""
            )}
            {...register("telegram", {
              pattern: {
                value: /^@[a-zA-Z0-9_]{2,}$/,
                message: "Invalid Telegram username (must start with @)",
              },
            })}
          />
        </div>
        {errors.telegram && (
          <p className="mt-1 text-xs text-red text-left">
            {errors.telegram.message}
          </p>
        )}
      </div>

      <div className="flex gap-2 p-3 border border-yellow rounded-xl bg-yellow/10 items-center">
        <IconExclamationCircle className="size-6 shrink-0 cursor-pointer text-yellow" />
        <div className="flex flex-col gap-1 items-start text-left">
          <h3 className="pt-1 font-kanit font-black text-[#F0F1F5] text-xs">
            Note:
          </h3>
          <p className="text-xs font-normal text-[#F0F1F5]/50">
            Leaving us more than one of your contacts will increase your chances
            of eligibility for future $MAMA Coin AirDrops. In any case, entering
            your email is mandatory, as it will allow you to receive updates on
            the project. Don&apos;t worry once registered you can easily
            unsubscribe if you wish.
          </p>
        </div>
      </div>
    </div>
  );
};
