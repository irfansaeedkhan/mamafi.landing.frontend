import Link from "next/link";
import React from "react";
import { IconReddit, IconTelegram, IconX } from "../icons/social-icons";

export const Footer: React.FC = () => {
  const handleDownloadAndOpen = (filePath: string, fileName: string) => {
    window.open(filePath, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="z-30 relative">
      <div className="bg-gradient w-full h-[3px] mt-8" />
      <nav className="w-full flex flex-col items-center bg-[#101012]">
        <div className="w-full border-t border-[#cfd6ff1f] bg-[#18181A] py-6 px-4 smTab:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-grayLight leading-5">
                © Copyright 2025 - <b>MamaFi Ltd</b> | Registered in England &
                Wales at 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
                | Company Number{" "}
                <a
                  href="/pdf/certificate-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-xs text-white hover:text-blue-300"
                >
                  16470954
                </a>{" "}
                | ICO Registration Number{" "}
                <button
                  type="button"
                  onClick={() =>
                    handleDownloadAndOpen(
                      "/pdf/Registration_Certificate___ZB904632.pdf",
                      "Registration_Certificate___ZB904632.pdf"
                    )
                  }
                  className="font-bold underline text-left text-white hover:text-blue-300 text-xs"
                  aria-label="Download ICO Registration Certificate ZB904632"
                >
                  ZB904632
                </button>{" "}
                |{" "}
                <Link
                  href="/privacy-policy"
                  className="font-bold underline text-xs text-white hover:text-blue-300"
                >
                  Policy Privacy
                </Link>{" "}
                |{" "}
                <Link
                  href="/terms-and-conditions"
                  className="font-bold underline text-xs text-white hover:text-blue-300"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
            <div className="hidden lg:block w-full max-w-max text-center">
              <div className="text-white flex flex-col items-center gap-3 text-xs w-full">
                <h2 className="font-semibold text-gradient text-xs">
                  Donald J. Trump Parody
                </h2>
                <div className="flex flex-col gap-2">
                  <span className="text-[#DBDDE6CC] pr-1">Follow on</span>
                  <div className="flex gap-3 items-center">
                    <a
                      href="https://x.com/mamafi_platform"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Follow MamaFi on X"
                    >
                      <IconX className="size-4 text-gradient" />
                    </a>
                    <a
                      href="https://t.me/mamafi_platform"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Join MamaFi on Telegram"
                    >
                      <IconTelegram className="size-5 text-gradient" />
                    </a>
                    <a
                      href="https://www.reddit.com/r/mamafi_platform/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Follow MamaFi on Reddit"
                    >
                      <IconReddit className="size-5 text-gradient" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
