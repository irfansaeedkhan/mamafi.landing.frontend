"use client";

import Image from "next/image";
import { languages } from "./whitepaper-list";

export default function WhitepaperDownloadMobile({
  onFlagClick,
}: {
  onFlagClick?: () => void;
}) {
  const handleOpenPdf = (file: string) => {
    window.open(file, "_blank", "noopener,noreferrer");
    if (onFlagClick) {
      onFlagClick();
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mt-8 mb-6 max-w-max mx-auto">
        <Image
          src="/images/openbook.svg"
          alt="openbook icon"
          className="w-5 object-contain"
          width={21}
          height={21}
        />
        <h5 className="text-grayLight text-sm font-semibold">
          Whitepaper <span className="text-[#DBDDE6]/50"> (15 languages) </span>
        </h5>
      </div>

      <div className="relative mx-auto w-full max-w-[20.6rem] overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[10px] no-scrollbar">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleOpenPdf(lang.file)}
              className="focus:outline-none shrink-0"
              aria-label={`Download whitepaper in ${lang.name}`}
            >
              <Image
                src={lang.src}
                alt=""
                className="w-16 h-auto object-contain"
                width={40}
                height={40}
                aria-hidden
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
