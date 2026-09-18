import React, { useState, useEffect } from "react";

interface SlidingDownloadButtonProps {
  isOpen?: boolean;
}

const SlidingDownloadButton: React.FC<SlidingDownloadButtonProps> = ({
  isOpen = false,
}) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsDownloaded(false);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full max-w-xs">
      <button
        type="button"
        onClick={() => setIsDownloaded(true)}
        aria-label={isDownloaded ? "Coming soon" : "Open Private Club"}
        className="relative px-3 py-2 flex items-center justify-center gap-2 primary-gradient-btn1 w-full overflow-hidden h-14 rounded-lg"
      >
        <span
          className={`absolute text-gradient transition-opacity duration-300 ${
            isDownloaded ? "opacity-0" : "opacity-100"
          }`}
        >
          Private Club
        </span>
        <span
          className={`absolute text-gradient flex items-center gap-2 transition-opacity duration-300 ${
            isDownloaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!isDownloaded}
        >
          Coming Soon!
        </span>
      </button>
    </div>
  );
};

export default SlidingDownloadButton;
