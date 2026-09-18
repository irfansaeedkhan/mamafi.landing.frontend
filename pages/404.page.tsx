import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen w-full landingLayout font-monto flex items-center justify-center">
      <div className="flex text-center xl:text-left  flex-col-reverse xl:flex-row gap-7 items-center justify-center max-w-[1360px] p-8">
        <div className="w-[80%] mx-auto  flex flex-col  items-center">
          <div>
            <h1 className="text-gradient text-48px font-semibold pb-3">
              Page not Found
            </h1>
            <p className="text-[#888DAA] text-20px font-medium pb-6 ">
              The requested URL was not found on this server.
            </p>
            <Link
              href={{
                pathname: "/",
              }}
            >
              <Button title="Back to home" className="w-full mt-4" />
            </Link>
          </div>
        </div>
        <Image
          width={500}
          height={500}
          src="/images/notfound.png"
          alt="Picture of the notfound robot"
        />
      </div>
    </div>
  );
}
