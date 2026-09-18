import React, { useState } from "react";
import cn from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { APP_URL } from "@/utils/site-urls";
import WhitepaperModalDesktop from "./whitepaper-download-desktop";
import MobileNavDrawer from "./mobile-nav-drawer";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [whitepaperModalOpen, setWhitepaperModalOpen] = useState(false);

  return (
    <nav
      className={cn(
        "bg-themeDark/60 fixed w-full top-0 left-0 sm:p-3 z-[9999999]",
        isOpen || whitepaperModalOpen
          ? "bg-themeDark"
          : "bg-themeDark/60 backdrop-blur-[8px]"
      )}
    >
      <div className="px-4 smTab:px-0 smTab:max-w-7xl flex flex-nowrap items-center justify-between mx-auto sm:p-4 py-4">
        <Link
          href={{ pathname: "/" }}
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
          href={{ pathname: "/" }}
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
                  className={cn(
                    "w-4 h-4 transform transition-transform",
                    whitepaperModalOpen ? "rotate-180" : "rotate-0"
                  )}
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

              {whitepaperModalOpen ? (
                <WhitepaperModalDesktop
                  onClose={() => setWhitepaperModalOpen(false)}
                />
              ) : null}
            </div>

            <div className="relative w-44">
              <Link
                href={`${APP_URL}/auth/login`}
                target="_blank"
                rel="noopener noreferrer"
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
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block relative w-6 h-[2px] bg-white transition-all duration-300 ease-in-out transform",
                isOpen
                  ? "rotate-45 translate-y-[7px]"
                  : "rotate-0 translate-y-0"
              )}
              style={{ transformOrigin: "98% center" }}
            />
            <span
              className={cn(
                "block absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out transform",
                isOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : "rotate-0 translate-y-[7px]"
              )}
              style={{ transformOrigin: "83% center" }}
            />
          </button>
        </div>

        <MobileNavDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}

export default Header;
