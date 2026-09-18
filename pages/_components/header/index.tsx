import React, { useState } from "react";
import cn from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { IconReddit, IconTelegram, IconX } from "../icons/social-icons";
import WhitepaperDownloadMobile from "./whitepaper-download-mobile";
import WhitepaperModalDesktop from "./whitepaper-download-desktop";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [whitepaperModalOpen, setWhitepaperModalOpen] = useState(false);

  return (
    <nav
      className={cn(
        `bg-themeDark/60 fixed w-full top-0 left-0 sm:p-3 z-[9999999]`,
        isOpen || whitepaperModalOpen
          ? "bg-themeDark"
          : "bg-themeDark/60 backdrop-blur-[8px]"
      )}
    >
      <div
        className={cn(
          `px-4 smTab:px-0 smTab:max-w-7xl flex flex-nowrap items-center justify-between mx-auto sm:p-4 py-4`
        )}
      >
        <Link
          href={{
            pathname: "/",
          }}
          className="hidden smTab:block"
          aria-label="MamaFi home"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.webp"
              alt=""
              width={56}
              height={56}
              className="w-14"
              sizes="56px"
            />
            <span className="text-white text-xl font-semibold">MAMAFI</span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/",
          }}
          className="block smTab:hidden"
          aria-label="MamaFi home"
        >
          <Image
            src="/images/mobileLogo.webp"
            alt=""
            width={56}
            height={56}
            className="w-14"
            sizes="56px"
          />
        </Link>
        <div className="hidden lgTab:block">
          <div className="flex items-center gap-8">
            <div className="relative inline-block">
              <button
                type="button"
                onClick={() => setWhitepaperModalOpen(!whitepaperModalOpen)}
                aria-expanded={whitepaperModalOpen}
                aria-label="Open whitepaper language options"
                className="text-white hover:text-[#ffffff] focus:outline-none text-xl font-semibold flex items-center gap-1"
              >
                Whitepaper
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    whitepaperModalOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {whitepaperModalOpen && (
                <WhitepaperModalDesktop
                  onClose={() => setWhitepaperModalOpen(false)}
                />
              )}
            </div>

            <div className="relative w-44">
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
                target="_blank"
                className="relative px-3 py-2 flex items-center justify-center gap-2 primary-gradient-btn1 w-full overflow-hidden h-14 rounded-lg"
                aria-label="Open MamaFi Private Club login"
              >
                <span className="absolute text-gradient">Private Club</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="block lgTab:hidden">
          <button
            type="button"
            className="relative w-10 h-10 flex items-center justify-center rounded-full focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div
              className={cn(
                `block origin-[98%] relative w-6 h-[2px] bg-white transition-all duration-300 ease-in-out transform`,
                isOpen
                  ? "rotate-45 translate-y-[7px]"
                  : "rotate-0 translate-y-0"
              )}
            />
            <div
              className={cn(
                `block origin-[83%] absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out transform`,
                isOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : "rotate-0 translate-y-[7px]"
              )}
            />
          </button>
        </div>

        {/* mobile — mount focusable content only while open (a11y: no aria-hidden + focusables) */}
        <div
          className={cn(
            `fixed top-0 left-0 w-full z-[999999] bg-themeDark/40 backdrop-blur-[8px] mx-auto rounded-3xl 
     transition-all duration-500 ease-in-out transform lgTab:hidden`,
            isOpen
              ? "translate-y-20 opacity-1"
              : "-translate-y-[200%] opacity-0 pointer-events-none"
          )}
        >
          {isOpen ? (
          <div
            className="rounded-3xl flex flex-col w-[90%] mx-auto max-h-[84vh] min-h-[36vh] items-center justify-between pt-12 backdrop-blur-2xl bg-opacity-60 border border-[#cfd6ff1f] overflow-y-auto bg-cover bg-center bg-no-repeat bg-[url('/images/mobile-nav-background.webp')]"
          >
            <div className="flex flex-col w-full items-center justify-between">
              <div className="buttons px-4 w-[90%]">
                <div className="flex w-full gap-3 mb-4">
                  <div className="grid grid-cols-2 gap-[12px] w-full">
                    <Link
                      href="/"
                      className={cn(
                        `flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl hover:bg-[#cfd6ff1f] hover:text-[#ffffff] transition duration-300 ease-in-out`
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <h6 className="text-white text-sm font-semibold">Home</h6>
                    </Link>
                    <Link
                      href="https://etherscan.io/token/0x67d4fe3a284a1c86226494bbec3409f55a663c94"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        `flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl hover:bg-[#2F2F32] hover:text-[#ffffff] transition duration-300 ease-in-out`
                      )}
                      onClick={() => setIsOpen(false)}
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
                      className={cn(
                        `flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl hover:bg-[#2F2F32] hover:text-[#ffffff] transition duration-300 ease-in-out`
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src="/images/coingecko.svg"
                        alt="coingecko"
                        width={135}
                        height={41}
                        className="shrink-0 w-auto h-auto"
                      />
                    </Link>
                    <span
                      className={cn(
                        `flex items-center justify-center border border-[#cfd6ff1f] px-3 py-2 rounded-2xl`
                      )}
                      aria-hidden
                    >
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
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute text-gradient">Private Club</span>
                </Link>
              </div>

              {/* white paper */}
              <WhitepaperDownloadMobile onFlagClick={() => setIsOpen(false)} />
            </div>

            <div className="text-xs py-5 text-white w-full mt-6 border-t border-[#cfd6ff1f] flex flex-col gap-4">
              <div className="text-white w-full flex flex-col items-center justify-center gap-2 text-xs">
                <h2 className="font-semibold text-gradient text-sm">
                  Donald J. Trump Parody
                </h2>
              </div>

              <div className="text-white w-full flex items-center justify-center gap-3 text-xs">
                <span className="text-[#DBDDE6CC] pr-1">Follow on</span>
                <a
                  href="https://x.com/mamafi_platform"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-gradient"
                  onClick={() => setIsOpen(false)}
                  aria-label="Follow MamaFi on X"
                >
                  <IconX className="size-4" />
                </a>
                <a
                  href="https://t.me/mamafi_platform"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-gradient"
                  onClick={() => setIsOpen(false)}
                  aria-label="Join MamaFi on Telegram"
                >
                  <IconTelegram className="size-5" />
                </a>

                <a
                  href="https://www.reddit.com/r/mamafi_platform/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-gradient"
                  onClick={() => setIsOpen(false)}
                  aria-label="Follow MamaFi on Reddit"
                >
                  <IconReddit className="size-5" />
                </a>
              </div>
            </div>
          </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
export default Header;
