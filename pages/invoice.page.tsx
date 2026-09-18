import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Button from "@/components/button";
import toast, { Toaster } from "react-hot-toast";
import { NextPageWithLayout } from "./_app.page";
import { PageLayout } from "@/layouts";
import { IconExclamationCircle } from "./_components/icons/social-icons";
import { CustomLoader } from "@/components/svgCollection";
import dayjs from "dayjs";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import DepositAddress from "./deposit.address";

const InvoicePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { invoice_id } = router.query;
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);

  const sliceAccountAddress = (address: string) => {
    return `${address?.slice(0, 8)}...${address?.slice(-4)}`;
  };

  const copyText = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      if (navigator.clipboard && navigator.permissions) {
        navigator.clipboard.writeText(text).then(resolve);
      } else if (document.queryCommandSupported("copy")) {
        const ele = document.createElement("textarea");
        ele.value = text;
        document.body.appendChild(ele);
        ele.select();
        document.execCommand("copy");
        document.body.removeChild(ele);
        resolve();
      } else {
        resolve();
      }
    });
  };

  const formatNumber = (number: string | number) => {
    return Number(number).toLocaleString();
  };

  useEffect(() => {
    if (!invoice_id) return;

    const fetchAndCalculate = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/invoice/${invoice_id}`);

        if (response?.status === 200 || response?.status === 201) {
          setError(false);
          const data = response?.data;
          if (!data || Object.keys(data).length === 0) {
            setTimeRemaining("Expired");
            setLoading(false);
            return;
          }

          setInvoiceData(data);

          const calculateTimeRemaining = () => {
            const expiryTime = dayjs(data?.createdAt).add(30, "minute");
            const now = dayjs();

            const diffInSeconds = expiryTime.diff(now, "second");
            if (diffInSeconds <= 0) {
              setTimeRemaining("Expired");
              return;
            }

            const minutes = Math.floor(diffInSeconds / 60);
            const seconds = diffInSeconds % 60;

            setTimeRemaining(
              `${minutes}:${seconds.toString().padStart(2, "0")}`
            );
          };

          calculateTimeRemaining();
          const interval = setInterval(calculateTimeRemaining, 1000);

          return () => clearInterval(interval);
        } else {
          setTimeRemaining("Expired");
          setLoading(false);
        }
      } catch {
        setError(true);
        setTimeRemaining("Expired");
      } finally {
        setLoading(false);
      }
    };

    fetchAndCalculate();
  }, [invoice_id]);

  if (loading) {
    return (
      <div className="fixed left-0 top-0 z-50  h-full w-full items-center justify-center backdrop-blur flex rounded-2xl">
        <div className="flex flex-col gap-4 bg-[#0B0B0B] rounded-xl p-6">
          <CustomLoader className="mx-auto origin-center  animate-spin text-white" />
          <div className="text-center">
            <h5 className="text-white text-base">Loading</h5>
            <h6 className="text-[#A8ABBB] text-xs">creating your invoice...</h6>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="invoice-page pt-[5rem]">
      <div className="relative flex flex-col gap-6 w-full md:min-h-[80dvh] items-center justify-center">
        <div
          className={`relative flex flex-col items-start gap-3 w-[95%] sm:w-full p-6 rounded-2xl bg-[#202025] max-w-[600px] mx-auto`}
        >
          {timeRemaining === "Expired" && (
            <div className="absolute left-0 top-0 z-50  h-full w-full items-center justify-center backdrop-blur flex rounded-2xl bg-[#17171ac7]"></div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex items-start justify-center py-4 sm:py-8">
              {invoiceData?.walletAddress && (
                <QRCode
                  size={280}
                  className="h-auto w-full max-w-[180px] sm:max-w-[280px] object-contain"
                  value={
                    timeRemaining === "Expired"
                      ? "N/A"
                      : invoiceData?.walletAddress
                  }
                  viewBox={`0 0 180 180`}
                />
              )}
            </div>
            <div className="flex flex-col w-full">
              <DepositAddress
                invoiceData={invoiceData}
                timeRemaining={timeRemaining}
              />
              <div className="mb-4 lg:mb-2 lg:pb-4 flex h-12 w-full items-center  gap-8 rounded-xl  bg-[#a8a8a50f] border border-[#a8a8a533] px-[18px] py-[14px] justify-between">
                <div className="flex flex-col text-xs">
                  <p className="text-xs font-medium text-[#DBDDE6]/50 text-[10px]">
                    Payment address
                  </p>
                  <p className="text-sm font-medium text-[#DBDDE6]">
                    {sliceAccountAddress(
                      timeRemaining === "Expired"
                        ? "N/A"
                        : invoiceData?.walletAddress
                    )}
                  </p>
                </div>

                <Button
                  title="Copy"
                  variant="tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copyText(
                      timeRemaining === "Expired"
                        ? "N/A"
                        : invoiceData?.walletAddress
                    );
                    toast.success("Copied to clipboard");
                  }}
                  className="text-xs"
                />
              </div>
              <div className="flex w-full items-center  gap-8 rounded-xl  bg-[#a8a8a50f] border border-[#a8a8a533] px-[18px] py-[14px] justify-between">
                <div className="flex flex-col w-full text-xs gap-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[#969699]">Amount USD:</h5>
                    <h6 className="text-[#F0F1F5]">
                      {timeRemaining === "Expired"
                        ? "N/A"
                        : formatNumber(invoiceData?.amountUSD)}
                    </h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-[#969699]">
                      Amount{" "}
                      {timeRemaining === "Expired"
                        ? "N/A"
                        : invoiceData?.token === "NATIVE"
                        ? invoiceData?.network
                        : invoiceData?.token}
                      :
                    </h5>
                    <h6 className="text-[#F0F1F5]">
                      {timeRemaining === "Expired"
                        ? "N/A"
                        : formatNumber(invoiceData?.amountToken)}
                    </h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-[#969699]">$MAMA:</h5>
                    <h6 className="text-[#F0F1F5]">
                      {timeRemaining === "Expired"
                        ? "N/A"
                        : formatNumber(invoiceData?.mamafiTokenAmount)}
                    </h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-[#969699]">$MAMA Bonus :</h5>
                    <h6 className="text-[#F0F1F5]">
                      {timeRemaining === "Expired"
                        ? "N/A"
                        : formatNumber(invoiceData?.mamafiTokenBonus)}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[#F0F1F5]/50 text-sm">
              After the payment, within a maximum of{" "}
              <span className="text-white"> 90 minutes</span>, you will find
              your $MAMA Coins in your wallet. If you don&apos;t see them,
              don&apos;t forget to manually add the Smart Contract:
            </p>

            <div className="flex h-12 w-full items-center  gap-8 rounded-xl  bg-[#a8a8a50f] border border-[#a8a8a533] px-[18px] py-[14px] justify-between">
              <div className="flex flex-col text-xs items-start">
                <p className="text-xs font-medium text-[#DBDDE6]/50 text-[10px]">
                  Smart Contract
                </p>
                <p className="text-sm font-medium text-[#DBDDE6]">
                  {timeRemaining === "Expired"
                    ? "N/A"
                    : sliceAccountAddress(invoiceData?.contractAddress)}
                </p>
              </div>

              <Button
                title="Copy"
                variant="tertiary"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyText(
                    timeRemaining === "Expired"
                      ? "N/A"
                      : invoiceData?.contractAddress
                  );
                  toast.success("Copied to clipboard");
                }}
                className="text-xs"
              />
            </div>
          </div>
        </div>
        <div
          className={`max-w-[90%]  flex gap-2 p-3 border  rounded-xl  items-center ${
            timeRemaining === "Expired"
              ? "border-red bg-red/10 absolute z-50"
              : "border-yellow bg-yellow/10"
          }`}
        >
          <IconExclamationCircle
            className={`w-6 h-6 shrink-0 cursor-pointer ${
              timeRemaining === "Expired" ? "text-red" : "text-yellow"
            } `}
          />
          <div className="flex flex-col gap-1 items-start text-left">
            <div className="w-full flex items-center gap-10 justify-between">
              <h3 className="pt-1 font-kanit font-black text-[#F0F1F5] text-xs">
                {timeRemaining === "Expired"
                  ? "Code has been Expired"
                  : timeRemaining}
              </h3>
              {timeRemaining === "Expired" && (
                <Link href="/#buymamacoin" className="text-xs text-gradient">
                  Try Again
                </Link>
              )}
            </div>
            <p className="text-xs font-normal text-[#F0F1F5]/50">
              {timeRemaining === "Expired"
                ? "Please go back or click on try again to have new one."
                : "The Code or Address will expire in 30 minutes"}
            </p>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

InvoicePage.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default InvoicePage;
