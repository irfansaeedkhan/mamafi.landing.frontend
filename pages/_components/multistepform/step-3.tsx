"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { inputLabel } from "./step-1";
import axiosInstance from "@/utils/axiosInstance";

interface Token {
  symbol: string;
  address: string;
  isNative: boolean;
}

interface Network {
  network: string;
  tokens: Token[];
}

interface Option {
  network: string;
  token: string;
  isNative: boolean;
  display: string;
  icon: string;
}

const getTokenIcon = (
  symbol: string,
  network: string,
  isNative: boolean
): string => {
  const mapping: Record<string, string> = {
    ETHEREUM: "eth",
    BSC: "bnb",
    TRX: "trx",
  };

  const networkPart = mapping[network] || network.toLowerCase();
  return isNative
    ? `/images/tokens/${symbol.toLowerCase()}.svg`
    : `/images/tokens/${symbol.toLowerCase()}-${networkPart}.svg`;
};

export const Step3: React.FC<any> = ({ formMethods }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = formMethods;

  const selectedNetwork = watch("network");
  const selectedToken = watch("token");

  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fallbackOptions: Option[] = [
      {
        network: "ETHEREUM",
        token: "USDT",
        isNative: false,
        display: "USDT - ERC20",
        icon: getTokenIcon("USDT", "ETHEREUM", false),
      },
      {
        network: "ETHEREUM",
        token: "USDC",
        isNative: false,
        display: "USDC - ERC20",
        icon: getTokenIcon("USDC", "ETHEREUM", false),
      },
      {
        network: "ETHEREUM",
        token: "ETH",
        isNative: true,
        display: "ETH",
        icon: getTokenIcon("ETH", "ETHEREUM", true),
      },
      {
        network: "BSC",
        token: "USDT",
        isNative: false,
        display: "USDT - BEP20",
        icon: getTokenIcon("USDT", "BSC", false),
      },
      {
        network: "BSC",
        token: "BNB",
        isNative: true,
        display: "BNB",
        icon: getTokenIcon("BNB", "BSC", true),
      },
    ];

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/network/tokens");

        if (response.status === 200 || response.status === 201) {
          const data: Network[] = response.data;

          if (!Array.isArray(data) || data.length === 0) {
            setOptions(fallbackOptions);
            return;
          }

          const transformedOptions = data.flatMap((network) => {
            const tokenStandard =
              network.network === "ETHEREUM"
                ? "ERC20"
                : network.network === "BSC"
                ? "BEP20"
                : network.network === "TRX"
                ? "TRC20"
                : "";

            const nonNativeTokens = network.tokens.filter(
              (token) => !token.isNative
            );

            let nativeToken = network.tokens.find((token) => token.isNative);

            if (nativeToken && network.network === "BSC") {
              nativeToken = { ...nativeToken, symbol: "BNB" };
            }

            const tokenOptions = nonNativeTokens.map((token) => ({
              network: network.network,
              token: token.symbol,
              isNative: token.isNative,
              display: `${token.symbol} - ${tokenStandard}`,
              icon: getTokenIcon(token.symbol, network.network, token.isNative),
            }));

            if (nativeToken) {
              tokenOptions.push({
                network: network.network,
                token: nativeToken.symbol,
                isNative: nativeToken.isNative,
                display: nativeToken.symbol,
                icon: getTokenIcon(
                  nativeToken.symbol,
                  network.network,
                  nativeToken.isNative
                ),
              });
            }

            return tokenOptions;
          });

          setOptions(
            transformedOptions.length > 0 ? transformedOptions : fallbackOptions
          );
        } else {
          setOptions(fallbackOptions);
        }
      } catch {
        // Upstream API may be unreachable (e.g. CF 530) — keep the form usable
        setOptions(fallbackOptions);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  const handleSelection = (option: Option) => {
    setValue("network", option.network, { shouldValidate: true });
    setValue("token", option.isNative ? "NATIVE" : option.token, {
      shouldValidate: true,
    });
  };

  const SkeletonLoader = () => (
    <div className="flex flex-col gap-3 w-full text-base">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex items-center gap-3 px-4 py-3 border rounded-xl bg-white/60 border-white/30"
        >
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="w-full h-6 rounded-full bg-gray-300"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-start gap-6 w-full text-left">
      <div className="flex flex-col items-start max-w-fit pb-3">
        {/* Desktop */}
        <div className="hidden sm:flex flex-col items-start">
          <label className={inputLabel}>
            In which currency you prefer to buy $MAMA Coin
          </label>
        </div>
        {/* Mobile */}
        <div className="flex flex-col sm:hidden items-start">
          <label className={inputLabel}>In which currency you prefer</label>
          <label className={inputLabel}> to buy $MAMA Coin?</label>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full text-left">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="flex flex-col gap-3 w-full text-base">
            {options.map((option) => (
              <label
                key={`${option.network}-${option.token}`}
                className={clsx(
                  "flex items-center justify-between gap-3 px-4 py-3 border rounded-xl bg-[#a8a8a50f] border-[#a8a8a533] cursor-pointer",
                  {
                    "ring-2 ring-[#a8a8a533]":
                      selectedNetwork === option.network &&
                      selectedToken ===
                        (option.isNative ? "NATIVE" : option.token),
                  }
                )}
                onClick={() => handleSelection(option)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={option.icon}
                    alt={option.token}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span
                    className={clsx(
                      selectedNetwork === option.network &&
                        selectedToken ===
                          (option.isNative ? "NATIVE" : option.token)
                        ? "text-white"
                        : "text-grayText"
                    )}
                  >
                    {option.display}
                  </span>
                </div>
                <input
                  type="radio"
                  value={option.isNative ? "NATIVE" : option.token}
                  {...register("token", { required: "Please select a token." })}
                  className={clsx(
                    "form-radio h-5 w-5 rounded-full transition-all duration-200 appearance-none",
                    selectedNetwork === option.network &&
                      selectedToken ===
                        (option.isNative ? "NATIVE" : option.token)
                      ? "bg-white border-white"
                      : "!bg-white/30 border-gray-400"
                  )}
                />
              </label>
            ))}

            {(errors.network || errors.token) && (
              <p className="mt-1 text-xs text-red text-left">
                Please select a token.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
