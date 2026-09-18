import React from "react";
import dynamic from "next/dynamic";

import { PageLayout } from "@/layouts";
import Section1 from "./_components/section1";
import Section5 from "./_components/section5";
import RealWorldImpact from "./_components/RealWorldImpact";
import RealWorldImpactStats from "./_components/RealWorldImpactStats";
import RealWorldNarrative from "./_components/RealWorldNarrative";
import LazyWhenVisible from "./_components/lazy-when-visible";

import { NextPageWithLayout } from "./_app.page";

/** Heavy client-only chunks — loaded only when near viewport. */
const Section7 = dynamic(() => import("./_components/section7"), {
  ssr: false,
});
const CoreTeam = dynamic(
  () => import("./_components/core-members/core.team"),
  { ssr: false }
);
const TrustedBy = dynamic(() => import("./_components/reputation/TrustedBy"), {
  ssr: false,
});
const RealWorldImpactGallery = dynamic(
  () => import("./_components/RealWorldImpactGallery"),
  { ssr: false }
);
const TheyTalkedAboutUs = dynamic(
  () => import("./_components/reputation/TheyTalkedAboutUs"),
  { ssr: false }
);
const MamaCoinIsCertikProof = dynamic(
  () => import("./_components/reputation/MamaCoinIsCertikProof"),
  { ssr: false }
);
const Toaster = dynamic(
  () => import("react-hot-toast").then((m) => m.Toaster),
  { ssr: false }
);

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col undownloadable">
      <Section1 />

      <div className="flex flex-col gap-[50px] mdTab:gap-32 pb-8 overflow-hidden">
        <Section5 />
        <LazyWhenVisible minHeight={900}>
          <Section7 />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={700}>
          <CoreTeam />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={500}>
          <TrustedBy />
        </LazyWhenVisible>
        <RealWorldImpact />
        <RealWorldImpactStats />
        <LazyWhenVisible minHeight={1100}>
          <RealWorldImpactGallery />
        </LazyWhenVisible>
        <RealWorldNarrative />
        <LazyWhenVisible minHeight={500}>
          <TheyTalkedAboutUs />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={700}>
          <MamaCoinIsCertikProof />
        </LazyWhenVisible>
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

Home.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default Home;
