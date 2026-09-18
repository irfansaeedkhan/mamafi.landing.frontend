import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconReddit, IconTelegram, IconX } from "../icons/social-icons";
import WhitepaperDownloadMobile from "./whitepaper-download-mobile";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const mobileNavBgStyle: React.CSSProperties = {
  backgroundImage: "url(/images/mobile-nav-background.webp)",
};

export default function MobileNavDrawer({
  isOpen,
  onClose,
}: MobileNavDrawerProps) {
  const tabIndex = isOpen ? 0 : -1;

  return (
    <div
      id="mobile-nav-drawer"
      className={
        isOpen
          ? "fixed top-0 left-0 w-full z-[999999] bg-themeDark/40 backdrop-blur-[8px] mx-auto rounded-3xl transition-all duration-500 ease-in-out transform lgTab:hidden translate-y-20 opacity-100"
          : "fixed top-0 left-0 w-full z-[999999] bg-themeDark/40 backdrop-blur-[8px] mx-auto rounded-3xl transition-all duration-500 ease-in-out transform lgTab:hidden -translate-y-[200%] opacity-0 pointer-events-none"
      }
    >
      <div
        className="rounded-3xl flex flex-col w-[90%] mx-auto max-h-[84vh] min-h-[36vh] items-center justify-between pt-12 bg-cover bg-center bg-no-repeat backdrop-blur-2xl bg-opacity-60 border border-[#cfd6ff1f] overflow-y-auto"
        style={mobileNavBgStyle}
      >
        <div className="flex flex-col w-full items-center justify-between">
          <div className="buttons px-4 w-[90%]">
            <div className="flex w-full gap-3 mb-4">
              <div className="grid grid-cols-2 gap-[12px] w-full">
                <Link
                  href="/"
                  className="flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl hover:bg-[#cfd6ff1f] hover:text-[#ffffff] transition duration-300 ease-in-out"
                  tabIndex={tabIndex}
                  onClick={onClose}
                >
                  <span className="text-white text-sm font-semibold">Home</span>
                </Link>
                <Link
                  href="https://etherscan.io/token/0x67d4fe3a284a1c86226494bbec3409f55a663c94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl hover:bg-[#2F2F32] hover:text-[#ffffff] transition duration-300 ease-in-out"
                  tabIndex={tabIndex}
                  onClick={onClose}
                >
                  <Image
                    src="/images/etherscan.svg"
                    alt="etherscan"
                    width={135}
                    height={41}
                    className="shrink-0 scale-[83%] w-auto h-auto"
                  />
                </Link>
                <Link
                  href="https://www.coingecko.com/en/coins/mama-coin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl hover:bg-[#2F2F32] hover:text-[#ffffff] transition duration-300 ease-in-out"
                  tabIndex={tabIndex}
                  onClick={onClose}
                >
                  <Image
                    src="/images/coingecko.svg"
                    alt="coingecko"
                    width={135}
                    height={41}
                    className="shrink-0 w-auto h-auto"
                  />
                </Link>
                <span className="flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl">
                  <Image
                    src="/images/coin-marketcap.svg"
                    alt="coin-marketcap"
                    width={135}
                    height={41}
                    className="shrink-0 w-auto h-auto"
                  />
                </span>
              </div>
            </div>
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3 py-2 flex items-center justify-center gap-2 primary-gradient-btn1 w-full overflow-hidden h-14 rounded-lg"
              tabIndex={tabIndex}
              onClick={onClose}
            >
              <span className="absolute text-gradient">Private Club</span>
            </Link>
          </div>

          <WhitepaperDownloadMobile onFlagClick={onClose} />
        </div>

        <div className="text-xs py-5 text-white w-full mt-6 border-t border-[#cfd6ff1f] flex flex-col gap-4">
          <div className="text-white w-full flex flex-col items-center justify-center gap-2 text-xs">
            <p className="font-semibold text-gradient text-sm">
              Donald J. Trump Parody
            </p>
          </div>

          <div className="text-white w-full flex items-center justify-center gap-3 text-xs">
            <span className="text-[#DBDDE6CC] pr-1">Follow on</span>
            <a
              href="https://x.com/mamafi_platform"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gradient"
              tabIndex={tabIndex}
              onClick={onClose}
              aria-label="Follow MamaFi on X"
            >
              <IconX className="size-4" />
            </a>
            <a
              href="https://t.me/mamafi_platform"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gradient"
              tabIndex={tabIndex}
              onClick={onClose}
              aria-label="Join MamaFi on Telegram"
            >
              <IconTelegram className="size-5" />
            </a>
            <a
              href="https://www.reddit.com/r/mamafi_platform/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gradient"
              tabIndex={tabIndex}
              onClick={onClose}
              aria-label="Follow MamaFi on Reddit"
            >
              <IconReddit className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
