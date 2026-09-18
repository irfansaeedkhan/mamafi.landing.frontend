"use client";
import clsx from "clsx";
import React, { useRef, useState, useEffect } from "react";
import { IconChevronDown, IconChevronUp } from "../icons/social-icons";
import { useOnClickOutside } from "usehooks-ts";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string;
  onSelect: (label: string) => void;
  error?: string;
  placeholder: string;
  bgColor?: string;
  enableFilter?: boolean;
}

export const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue = "",
  onSelect,
  error,
  placeholder,
  bgColor = "primary-light",
  enableFilter = false,
}) => {
  const ref = useRef<HTMLDivElement>(null!);

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    if (enableFilter) {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredOptions(options);
    }
  }, [searchTerm, options, enableFilter]);

  const handleOptionClick = (option: DropdownOption) => {
    onSelect(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const selectedLabel = selectedOption ? selectedOption.label : "";

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative w-full text-base" ref={ref}>
      <div
        className={clsx(
          `w-full cursor-pointer rounded-xl border  --bg-${bgColor} bg-[#a8a8a50f] px-4 py-4 text-sm text-white focus:outline-none`,
          isOpen ? "border-[#a8a8a533]" : "border-[#a8a8a533]/10",
          error ? "border-red" : ""
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span
            className={clsx(
              "word-break text-base",
              selectedLabel === "" && "text-white/20"
            )}
          >
            {selectedLabel === "" ? placeholder : selectedLabel}
          </span>
          {isOpen ? (
            <IconChevronUp className="text-gray-400 size-3" />
          ) : (
            <IconChevronDown className="text-gray-400 size-3" />
          )}
        </div>
        {error && <p className="mt-1 text-xs text-red text-left">{error}</p>}
      </div>
      {isOpen && (
        <div className="custom-scrollbar absolute z-[500] mt-2 max-h-[200px] w-full overflow-y-auto rounded-xl bg-themeDark text-white shadow-lg text-base">
          {enableFilter && (
            <input
              type="text"
              className="w-full border-b border-gray-shade-3 px-4 py-2 text-themeDark outline-none"
              placeholder="Type to filter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={clsx(
                  "word-break cursor-pointer rounded-xl px-4 py-2 hover:bg-[#a8a8a50f]",
                  option.value === selectedValue ? "bg-[#a8a8a533]" : ""
                )}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="text-gray-500 px-4 py-2">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};
