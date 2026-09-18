"use client";

import React from "react";

import { PageLayout } from "@/layouts";

import { NextPageWithLayout } from "./_app.page";
import MamaCoinIsCertikProof from "./_components/reputation/MamaCoinIsCertikProof";
import TheyTalkedAboutUs from "./_components/reputation/TheyTalkedAboutUs";
import Trust from "./_components/reputation/Trust";
import OurTestimonials from "./_components/reputation/OurTestimonials";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col">
      <MamaCoinIsCertikProof />

      <TheyTalkedAboutUs />

      <Trust />

      <OurTestimonials />
    </div>
  );
};

Home.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default Home;
