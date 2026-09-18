import React from "react";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";
import {
  EyeStatIcon,
  HeartStatIcon,
  InstagramStatIcon,
  PeopleStatIcon,
} from "./icons/real-world-impact-icons";

const STAT_VALUE_GRADIENT =
  "linear-gradient(90deg, #8B5CF6 0%, #875FF6 7.14%, #8362F6 14.29%, #7F65F6 21.43%, #7B68F6 28.57%, #766BF6 35.71%, #716EF6 42.86%, #6C71F6 50%, #6773F6 57.14%, #6176F6 64.29%, #5B78F6 71.43%, #557BF6 78.57%, #4D7DF6 85.71%, #4580F6 92.86%, #3B82F6 100%)";

type StatCard = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const stats: StatCard[] = [
  {
    icon: (
      <EyeStatIcon className="h-4 w-4 lgTab:h-7 lgTab:w-7 text-[#8B5CF6]" />
    ),
    value: "40,000",
    label: "Monthly social views",
  },
  {
    icon: (
      <InstagramStatIcon className="h-4 w-4 lgTab:h-7 lgTab:w-7 text-[#8B5CF6]" />
    ),
    value: "70,000",
    label: "Instagram monthly reach",
  },
  {
    icon: (
      <HeartStatIcon className="h-4 w-4 lgTab:h-7 lgTab:w-7 text-[#8B5CF6]" />
    ),
    value: "75,000",
    label: "Facebook monthly reach",
  },
  {
    icon: (
      <PeopleStatIcon className="h-4 w-4 lgTab:h-7 lgTab:w-7 text-[#8B5CF6]" />
    ),
    value: "100k+",
    label: "Monthly visits across Centro Ester facilities",
  },
];

const RealWorldImpactStats: React.FC = () => {
  return (
    <section className="relative w-full overflow-visible pt-10 lgTab:py-14 [content-visibility:auto] [contain-intrinsic-size:1px_600px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(140%,700px)] lgTab:h-[min(140%,900px)] w-[min(140vw,1600px)] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[url('/images/bg-glow.webp')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1370px] flex-col items-start gap-6 lgTab:gap-10 px-4 text-left sm:px-6 lgTab:items-center lgTab:text-center lg:px-10 xl:px-14">
        <div className="flex w-full justify-start lgTab:justify-center">
          <HeadingBox className="w-auto max-w-[280px]">Statistics</HeadingBox>
        </div>

        <div className="mb-4 flex w-full flex-col items-start gap-4 lgTab:mb-20 lgTab:items-center lgTab:gap-8">
          <div className="flex justify-start lgTab:justify-center">
            <AnimatedBox
              mobileBoxColor="rgb(27 24 28)"
              desktopBoxColor="rgb(38, 26, 35)"
            />
          </div>
          <h2 className="subHeading animationText max-w-[1174px] font-semibold mdTab:text-5xl lgTab:mx-auto">
            Visible Where Real Communities Gather
          </h2>
        </div>

        <ul className="grid w-full grid-cols-2 gap-4 lgTab:grid-cols-4 lgTab:gap-5">
          {stats.map((item, i) => (
            <li
              key={i}
              className="flex min-h-[120px] w-full flex-col items-start gap-4 rounded-2xl border border-[rgba(139,92,246,0.3)] bg-[#141420] p-4 text-left mdTab:min-h-[220px] mdTab:p-5 lgTab:min-h-[272px] lgTab:max-w-[263px] lgTab:gap-5 lgTab:p-6"
            >
              <div
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#21294B] text-[#8B5CF6] mdTab:h-12 mdTab:w-12 lgTab:h-14 lgTab:w-14"
                aria-hidden
              >
                {item.icon}
              </div>
              <p
                className="text-base font-bold leading-none tracking-tight mdTab:text-[30px] lgTab:text-3xl"
                style={{
                  background: STAT_VALUE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.value}
              </p>
              <p className="text-sm font-medium leading-snug text-white mdTab:text-[20px] lgTab:text-2xl">
                {item.label}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-2 text-left text-base font-medium leading-relaxed text-white lgTab:text-lg">
          These numbers reflect the visibility generated through the sports
          center&apos;s activities, social channels, and physical presence
          across multiple areas of the facility.
        </p>
      </div>
    </section>
  );
};

export default RealWorldImpactStats;
