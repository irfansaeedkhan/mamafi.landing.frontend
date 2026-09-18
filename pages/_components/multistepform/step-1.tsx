"use client";

import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import countryList from "react-select-country-list";

import clsx from "clsx";
import { CustomDropdown } from "../custom-dropdown";
import { IconExclamationCircle } from "../icons/social-icons";

export const Step1: React.FC<any> = ({ formMethods }) => {
  const {
    control,
    register,
    formState: { errors },
  } = formMethods;

  const countries = useMemo(() => countryList().getData(), []);

  return (
    <div className={clsx(inputMain, "gap-6 ")}>
      <div className={inputMain}>
        <div className="flex flex-col items-start max-w-fit pb-3">
          <label htmlFor="name" className={inputLabel}>
            What is your name ?
          </label>
        </div>
        <input
          autoFocus
          autoComplete="off"
          className={clsx(inputField)}
          placeholder="Name here"
          type="name"
          id="name"
          {...register("name", {
            required: "name is required",
            type: "text",
            maxLength: {
              value: 50,
              message: "Name cannot exceed 50 characters",
            },
          })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red text-left">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className={inputMain}>
        <div className="flex flex-col items-start max-w-fit pb-3">
          <label htmlFor="nationality" className={inputLabel}>
            Where are you from?
          </label>
        </div>
        <Controller
          name="nationality"
          control={control}
          rules={{ required: "Birth Country is required" }}
          render={({ field }) => (
            <CustomDropdown
              placeholder="Select Country"
              enableFilter={true}
              options={countries}
              selectedValue={field.value}
              onSelect={(value) => field.onChange(value)}
            />
          )}
        />
        {errors.nationality && (
          <p className="mt-1 text-xs text-red text-left">
            {errors.nationality.message}
          </p>
        )}
      </div>
      <div className={inputMain}>
        <div className="flex flex-col items-start max-w-fit pb-3">
          {/* desktop */}
          <div className="hidden sm:flex flex-col items-start">
            <label htmlFor="receiverAddress" className={inputLabel}>
              Where would you like us to send your $MAMA Coins?
            </label>
          </div>
          {/* mobile */}
          <div className="flex flex-col sm:hidden items-start">
            <label htmlFor="receiverAddress" className={inputLabel}>
              Where would you like us
            </label>
            <label htmlFor="receiverAddress" className={inputLabel}>
              to send your $MAMA Coins?
            </label>
          </div>
        </div>
        <input
          autoComplete="off"
          className={clsx(inputField)}
          placeholder="Add Your Ethereum Address"
          type="text"
          id="receiverAddress"
          {...register("receiverAddress", {
            required: "Ethereum address is required",
            maxLength: {
              value: 42,
              message: "Ethereum address must be 42 characters long",
            },
            pattern: {
              value: /^0x[a-fA-F0-9]{40}$/i,
              message:
                "Invalid Ethereum address format. Please ensure the wallet address is correct, as we are not responsible for lost tokens due to incorrect input.",
            },
          })}
        />

        {errors.receiverAddress && (
          <p className="mt-1 text-xs text-red text-left">
            {errors.receiverAddress.message}
          </p>
        )}
      </div>

      <div className="mt-4 flex gap-2 p-3 border border-red rounded-xl bg-red/10 items-center">
        <IconExclamationCircle className="w-6 h-6 shrink-0 cursor-pointer text-red" />
        <div className="flex flex-col gap-1 items-start text-left">
          <h3 className="pt-1 font-kanit font-black text-[#F0F1F5] text-xs">
            Add an address compatible with the Ethereum Blockchain
          </h3>
          <p className="text-xs font-normal text-[#F0F1F5]/50">
            Adding an address belonging to a Blockchain other than the one
            indicated may result in the loss of your $MAMA Coins and we will not
            be responsible for this.
          </p>
        </div>
      </div>
    </div>
  );
};

export const inputMain = "flex flex-col items-start w-full";
export const inputLabel =
  "relative inline-block text-base text-[#F0F1F5] font-semibold after:content-[''] after:absolute after:w-full after:h-[4px] after:bottom-0 after:left-0 after:bg-[url('/images/bottom-border.png')] after:bg-cover after:bg-no-repeat after:-z-10 pb-[2px] pt-1";
export const inputField =
  "peer relative w-full pl-6 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:[#a8a8a50f] focus:ring-2 focus:ring-[#a8a8a533] focus:drop-[#a8a8a533] py-3 rounded-xl text-base text-white bg-[#a8a8a50f] border border-[#a8a8a533] text-white";
