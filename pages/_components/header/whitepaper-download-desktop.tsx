"use client";

import React from "react";
import Image from "next/image";
import { languages } from "./whitepaper-list";

interface WhitepaperModalDesktopProps {
  onClose: () => void;
}

export default function WhitepaperModalDesktop({
  onClose,
}: WhitepaperModalDesktopProps) {
  const handleOpenPdf = (file: string) => {
    window.open(file, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="absolute top-0 mt-[4rem] right-[-3rem] w-[30.4rem] h-auto z-[999999] transition-all duration-500 ease-in-out transform">
      <div className="relative bg-themeDark/40 backdrop-blur-[8px] mx-auto rounded-3xl hidden lgTab:flex border border-[#cfd6ff1f]">
        <div className="rounded-3xl flex items-center justify-between p-5 bg-[url('/images/mobile-nav-background.png')] bg-cover bg-center bg-no-repeat backdrop-blur-2xl bg-opacity-60  overflow-y-auto gap-5 pt-8">
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src="/images/white-paper-desktop.png"
              alt="Whitepaper 3D Cover"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-4 gap-5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleOpenPdf(lang.file)}
                  className="focus:outline-none"
                  aria-label={`Download whitepaper in ${lang.name}`}
                >
                  <Image
                    src={lang.src}
                    alt=""
                    width={32}
                    height={32}
                    className="w-full h-auto object-contain -mt-2"
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
