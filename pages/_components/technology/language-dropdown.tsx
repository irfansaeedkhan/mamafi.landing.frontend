"use client";

import Flag from "react-world-flags";
import { useState } from "react";
import Button from "@/components/button";

const languages = [
  { name: "English", code: "GB", file: "/pdf/whitepaper-mama-eng.pdf" },
  { name: "Italian", code: "IT", file: "/pdf/whitepaper-mama-ita.pdf" },
  { name: "Spanish", code: "ES", file: "/pdf/whitepaper-mama-esp.pdf" },
  { name: "French", code: "FR", file: "/pdf/whitepaper-mama-fr.pdf" },
  { name: "Portuguese", code: "PT", file: "/pdf/whitepaper-mama-pt.pdf" },
  { name: "German", code: "DE", file: "/pdf/whitepaper-mama-de.pdf" },
  { name: "Arabic", code: "AE", file: "/pdf/whitepaper-mama-arb.pdf" },
  { name: "Russian", code: "RU", file: "/pdf/whitepaper-mama-ru.pdf" },
  { name: "Chinese", code: "CN", file: "/pdf/whitepaper-mama-chi.pdf" },
  { name: "Persian", code: "IR", file: "/pdf/whitepaper-mama-fa.pdf" },
  { name: "Turkish", code: "TR", file: "/pdf/whitepaper-mama-tr.pdf" },
  { name: "Urdu", code: "PK", file: "/pdf/whitepaper-mama-urdu.pdf" },
  { name: "Vietnamese", code: "VN", file: "/pdf/whitepaper-mama-vi.pdf" },
  { name: "Hebrew", code: "IL", file: "/pdf/whitepaper-mama-hebrew.pdf" },
];

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleDownload = () => {
    if (selectedLanguage.file) {
      const link = document.createElement("a");
      const fileName = selectedLanguage.file.split("/").pop();
      link.href = selectedLanguage.file;
      link.download = fileName || "whitepaper.pdf";
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-4">
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="bg-elevationDark text-white flex items-center px-4 py-2 rounded-2xl shadow focus:outline-none min-w-48 lgTab:w-64 justify-between"
          >
            <div className="flex items-center">
              <Flag code={selectedLanguage.code} className="mr-2 w-6 h-4" />
              {selectedLanguage.name}
            </div>
            <svg
              className={`ml-2 w-4 h-4 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-[12rem] lgTab:w-64 rounded-md shadow-lg bg-elevationDark ring-1 ring-black ring-opacity-5 max-h-52 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="flex items-center px-4 py-2 text-white hover:bg-themeDark w-full"
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsOpen(false);
                  }}
                >
                  <Flag code={lang.code} className="mr-2 w-6 h-4" /> {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <Button title="Download" onClick={handleDownload} />
      </div>
    </div>
  );
}
