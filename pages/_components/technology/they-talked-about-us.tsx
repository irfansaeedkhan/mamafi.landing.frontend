"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PartnerList = () => {
  return (
    <section className="w-full" id="they-talk-about-us">
      <div className="overflow-hidden mx-auto relative">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-20 items-center justify-center px-8 lg:px-10 pt-16 pb-6 lg:pt-20 lg:pb-20 relative z-20">

          <Link
            target="_blank"
            href="https://forbes.es/empresas/527927/parodia-inspira-creacion-nueva-red-social/"
          >
            <Image
              src={`/images/abt-lg1.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-[85%] h-auto"
            />
          </Link>
          <div>
            <Image
              src={`/images/abt-lg2.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={`/images/abt-lg3.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <Link
            target="_blank"
            href="https://cryptopotato.com/mamafi-raises-2756535-in-private-sale-strengthening-its-ethereum-layer-2-ecosystem/"
          >
            <Image
              src={`/images/abt-lg4.png`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </Link>
          <div>
            <Image
              src={`/images/abt-lg5.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={`/images/abt-lg6.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={`/images/abt-lg7.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={`/images/abt-lg8.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={`/images/abt-lg9.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <Link
            target="_blank"
            href="https://chainwire.org/2024/12/16/mamafi-raises-2756535-in-private-sale-strengthening-its-ethereum-layer-2-ecosystem/"
          >
            <Image
              src={`/images/abt-lg10.png`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </Link>

          <Link
            target="_blank"
            href="https://techbullion.com/mamafi-which-stands-for-make-america-memeable-again-mama-is-a-new-digital-initiative-that-celebrates-freedom-of-expression-in-an-increasingly-regulated-environment/"
          >
            <Image
              src={`/images/abt-lg11.svg`}
              alt={`partner`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </Link>
        </div>

        <div className="absolute top-[50%] translate-y-[-50%] left-[12%] z-0 h-[20%] w-[30%] rounded-full bg-[#1C83FF]/50 blur-[50px] lgTab:blur-[100px]"></div>
        <div className="absolute top-[50%] translate-y-[-50%] right-[12%] z-0 h-[22%] w-[39%] rounded-full bg-[#FF294F]/40 blur-[50px] lgTab:blur-[100px]"></div>
      </div>
    </section>
  );
};

export default PartnerList;
