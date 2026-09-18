import React from "react";

import { PageLayout } from "@/layouts";

import { NextPageWithLayout } from "./_app.page";
import Tech1 from "./_components/technology/tech-1";
import Tech2 from "./_components/technology/tech-2";
import Tech3 from "./_components/technology/tech-3";
import Tech4 from "./_components/technology/tech-4";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col undownloadable">
      <Tech1 />

      <div className="flex flex-col pt-8 pb-10 mdTab:pt-0 gap-[50px] mdTab:gap-32">
        <Tech2 />
        <Tech3 />
        <Tech4 />
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default Home;
