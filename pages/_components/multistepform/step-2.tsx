"use client";

import React from "react";
import clsx from "clsx";
import { inputLabel } from "./step-1";

export const Step2: React.FC<any> = ({ formMethods }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = formMethods;

  const selectedSourceNetwork = watch("referralSource");

  return (
    <div className="flex flex-col items-start gap-6 w-full text-left">
      <div className="flex flex-col items-start max-w-fit pb-3">
        <label className={inputLabel}>How did you hear about us?</label>
      </div>
      <div className="flex flex-col gap-3 w-full text-base">
        {[
          "Press Release",
          "Social Network ",
          "Influencer ",
          "Family and friends",
          "Other",
        ].map((option) => (
          <label
            key={option}
            className={clsx(
              "flex items-center justify-between gap-3 px-4 py-3 border rounded-xl bg-[#a8a8a50f] border-[#a8a8a533]",
              { "ring-2 ring-[#a8a8a533]": selectedSourceNetwork === option }
            )}
          >
            <span
              className={clsx(
                selectedSourceNetwork === option
                  ? "text-white"
                  : "text-grayText"
              )}
            >
              {option}
            </span>
            <input
              type="radio"
              value={option}
              className={clsx(
                "form-radio h-5 w-5 rounded-full transition-all duration-200 appearance-none",
                selectedSourceNetwork === option
                  ? "bg-white border-white"
                  : "!bg-white/30 border-gray-400"
              )}
              {...register("referralSource", {
                required: "Network is required",
              })}
            />
          </label>
        ))}
      </div>

      <div className="mt-4 w-full text-left">
        <textarea
          placeholder="Please specify"
          disabled={selectedSourceNetwork !== "Other"}
          rows={5}
          className={clsx(
            "w-full p-3 border rounded-xl bg-[#a8a8a50f] border-[#a8a8a533] text-white outline-none focus:[#a8a8a50f] focus:ring-2 focus:ring-[#a8a8a533] focus:drop-[#a8a8a533]",
            { "opacity-50": selectedSourceNetwork !== "Other" }
          )}
          {...register("referralSourceOther", {
            required:
              selectedSourceNetwork === "Other"
                ? "Please specify the network if 'Other' is selected"
                : false,
            maxLength: {
              value: 100,
              message: "Other network cannot exceed 100 characters",
            },
          })}
        />
        {errors.referralSourceOther?.message && (
          <p className="mt-1 text-xs text-red text-left">
            {typeof errors.referralSourceOther.message === "string" &&
              errors.referralSourceOther.message}
          </p>
        )}
      </div>

      {errors.network?.message && (
        <p className="mt-1 text-xs text-red text-left">
          {typeof errors.network.message === "string" && errors.network.message}
        </p>
      )}
    </div>
  );
};
