import React from "react";
import Image from "next/image";

const AnimateButton: React.FC = () => {
  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.href = "/pdf/SecurityAssessment-mamacoin-Certik.pdf";
    link.download = "SecurityAssessment-mamacoin-Certik.pdf";
    link.click();
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      aria-label="Download CertiK security audit PDF"
      className="relative px-[16px] py-[9px] flex items-center justify-center primary-gradient-btn1 w-[194px] h-[42px]"
    >
      <span className="absolute text-gradient flex gap-[8px] font-monto text-[14px] font-bold normal-case">
        Download Audit
        <Image
          src="/images/reputation/download-audit.svg"
          alt=""
          width={18}
          height={19}
          className="w-[18px] h-[19px]"
          aria-hidden
        />
      </span>
    </button>
  );
};

export default AnimateButton;
