import Image from "next/image";
import React from "react";

interface InvoiceData {
  token: string;
  network: string;
}

interface TokenDisplay {
  display: string;
  icon: string;
}

const getInvoiceTokenDisplay = (invoiceData: InvoiceData): TokenDisplay => {
  const mapping: Record<string, string> = {
    ETHEREUM: "eth",
    BSC: "bnb",
    TRX: "trx",
  };

  const tokenStandard =
    invoiceData.network === "ETHEREUM"
      ? "ERC20"
      : invoiceData.network === "BSC"
      ? "BEP20"
      : invoiceData.network === "TRX"
      ? "TRC20"
      : "";

  if (invoiceData.token === "NATIVE") {
    const nativeSymbol =
      invoiceData.network === "BSC"
        ? "BNB"
        : invoiceData.network === "ETHEREUM"
        ? "ETH"
        : invoiceData.network === "TRX"
        ? "TRX"
        : invoiceData.network;
    return {
      display: nativeSymbol,
      icon: `/images/tokens/${nativeSymbol.toLowerCase()}.svg`,
    };
  } else {
    return {
      display: `${invoiceData.token} - ${tokenStandard}`,
      icon: `/images/tokens/${invoiceData.token.toLowerCase()}-${
        mapping[invoiceData.network]
      }.svg`,
    };
  }
};

interface DepositAddressProps {
  invoiceData: InvoiceData;
  timeRemaining: string | null;
}

const DepositAddress: React.FC<DepositAddressProps> = ({
  invoiceData,
  timeRemaining,
}) => {
  const tokenInfo = getInvoiceTokenDisplay(invoiceData);

  return (
    <p className="text-center lg:text-left font-medium text-[#DBDDE6]/50 text-sm pb-4 lg:pb-1 flex items-center justify-start gap-3">
      <span className="flex items-center justify-center gap-2">
        <Image
          src={tokenInfo.icon}
          alt={tokenInfo.display}
          className="w-5 h-5 object-contain"
          width={20}
          height={20}
        />
        <span className="text-white font-semibold text-xs">
          {timeRemaining === "Expired" ? "N/A" : tokenInfo.display}
          <span className="text-[#DBDDE6]/50 pl-1">deposit address:</span>
        </span>
      </span>{" "}
    </p>
  );
};

export default DepositAddress;
