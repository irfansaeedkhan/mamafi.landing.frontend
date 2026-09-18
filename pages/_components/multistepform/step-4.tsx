"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import axiosInstance from "@/utils/axiosInstance";
import { IconExclamationCircle } from "../icons/social-icons";
import { inputField, inputLabel, inputMain } from "./step-1";

export const Step4: React.FC<any> = ({ formMethods, setStep4Loading }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = formMethods;

  const tokensToBuy = watch("tokensToBuy", "");
  const [mamaCoinValue, setMamaCoinValue] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const coinOptions = [
    { value: "$ 5,000", bonus: "+6% MAMA Coin" },
    { value: "$ 10,000", bonus: "+9% MAMA Coin" },
    { value: "$ 25,000", bonus: "+12% MAMA Coin" },
    { value: "$ 50,000", bonus: "+15% MAMA Coin" },
  ];

  const getBonusPercentage = (amount: number) => {
    if (amount >= 5000 && amount <= 9999) return 6;
    if (amount >= 10000 && amount <= 24999) return 9;
    if (amount >= 25000 && amount <= 49999) return 12;
    if (amount >= 50000 && amount <= 100000) return 15;
    return 0;
  };

  const amount = Number(tokensToBuy);
  const bonusPercentage = getBonusPercentage(amount);
  const bonusAmount = (amount * bonusPercentage) / 100;

  useEffect(() => {
    if (!tokensToBuy || isNaN(amount) || amount < 100 || amount > 100000) {
      setMamaCoinValue(null);
      setLoading(false);
      setStep4Loading(false);
      return;
    }

    setLoading(true);
    setStep4Loading(true);
    const timeout = setTimeout(async () => {
      try {
        const response = await axiosInstance.get(`/rate/${amount}`);
        if (response.status === 200 && response.data?.amount) {
          setMamaCoinValue(response.data.amount);
        } else {
          setMamaCoinValue(amount * 1000);
        }
      } catch {
        setMamaCoinValue(amount * 1000);
      } finally {
        setLoading(false);
        setStep4Loading(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [tokensToBuy, setStep4Loading]);

  const formatNumber = (number: string | number) => {
    if (!number || isNaN(Number(number))) {
      return ""; // ✅ Don't force "0", just show empty
    }
    return new Intl.NumberFormat("en-US").format(Number(number));
  };

  const formatCurrencyInput = (value: string) => {
    let rawValue = value.replace(/,/g, "");

    if (!/^\d*$/.test(rawValue)) return "";
    if (rawValue.length > 6)
      return new Intl.NumberFormat("en-US").format(
        Number(rawValue.slice(0, 6))
      );

    return new Intl.NumberFormat("en-US").format(Number(rawValue));
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full text-left">
      <div className="flex flex-col items-start max-w-fit pb-3">
        {/* desktop */}
        <div className="hidden sm:flex flex-col items-start">
          <label className={inputLabel}>
            Please Enter the amount($) you want to buy $MAMA Coins
          </label>
        </div>
        {/* mobile */}
        <div className="flex flex-col sm:hidden items-start">
          <label className={inputLabel}>Please Enter the amount($)</label>
          <label className={inputLabel}>you want to buy $MAMA Coins</label>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full text-base">
        <div className={inputMain}>
          <input
            autoFocus
            autoComplete="off"
            className={clsx(inputField)}
            placeholder="Min $100 - Max $100,000"
            type="text"
            id="tokensToBuy"
            value={tokensToBuy ? formatCurrencyInput(tokensToBuy) : ""}
            {...register("tokensToBuy", {
              required: "Select the amount please",
              min: {
                value: 100,
                message: "Amount cannot be less than 100",
              },
              max: {
                value: 100000,
                message: "Amount cannot exceed 100,000",
              },
              pattern: {
                value: /^[0-9,]*$/,
                message: "Only digits are allowed",
              },
            })}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              let rawValue = input.value.replace(/,/g, ""); // Remove commas

              if (!/^\d*$/.test(rawValue)) return;

              const numValue = Number(rawValue);

              formMethods.setValue("tokensToBuy", rawValue, {
                shouldValidate: true,
              });

              if (numValue < 100 || numValue > 100000) {
                formMethods.setError("tokensToBuy", {
                  type: "manual",
                  message:
                    numValue < 100
                      ? "Amount cannot be less than 100"
                      : "Amount cannot exceed 100,000",
                });
              } else {
                formMethods.clearErrors("tokensToBuy");
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          />

          {errors.tokensToBuy?.message && (
            <p className="mt-1 text-xs text-red text-left">
              {typeof errors.tokensToBuy.message === "string" &&
                errors.tokensToBuy.message}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-1 items-start text-left pb-5">
          <p className="w-full text-xs text-grayText flex items-center justify-between font-medium">
            <span className="text-[#969699]">$MAMA Coin</span>
            <span className="text-[#F0F1F5]">
              {loading
                ? "Loading..."
                : mamaCoinValue !== null
                ? formatNumber(mamaCoinValue.toFixed(2))
                : "00.00"}
            </span>
          </p>
          <p className="w-full text-xs text-grayText flex items-center justify-between font-medium">
            <span className="text-[#969699]">You will get bonus of:</span>
            <span className="text-[#F0F1F5]">
              $
              {isNaN(bonusAmount)
                ? "0.00"
                : formatNumber(bonusAmount.toFixed(2))}{" "}
              (BONUS +{bonusPercentage}%)
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 px-4 py-3 border rounded-xl bg-[#a8a8a50f] border-[#a8a8a533]">
          <h3 className="text-sm text-white font-semibold">Bonus info:</h3>
          {coinOptions.map((option) => (
            <p
              key={option.value}
              className="text-xs text-grayText flex items-center justify-between font-medium"
            >
              <span className="text-[#969699]">{option.value}</span>
              <span className="text-[#F0F1F5]">{option.bonus}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-2 p-3 border border-yellow rounded-xl bg-yellow/10 items-center">
        <IconExclamationCircle className="w-6 h-6 shrink-0 cursor-pointer text-yellow" />
        <div className="flex flex-col gap-1 items-start text-left">
          <h3 className="pt-1 font-kanit font-black text-[#F0F1F5] text-xs">
            Note:
          </h3>
          <p className="text-xs font-normal text-[#F0F1F5]/50">
            Purchase $MAMA coins before April 2025 and enjoy up to 15% bonus
            tokens!
          </p>
        </div>
      </div>
    </div>
  );
};
