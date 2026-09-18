"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactCountryFlag from "react-country-flag";
import { TopArrow } from "./media";
import { teamMembers } from "./team-members";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";

type SlickArrowProps = {
  className?: string;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
};

const SlickNextArrow = ({ className, onClick }: SlickArrowProps) => (
  <button
    type="button"
    className={`rightIcon ${className ?? ""}`.trim()}
    onClick={onClick}
    aria-label="Next team member"
  >
    <TopArrow className="slick-next" />
  </button>
);

const SlickPrevArrow = ({ className, onClick }: SlickArrowProps) => (
  <button
    type="button"
    className={`rightIcon ${className ?? ""}`.trim()}
    onClick={onClick}
    aria-label="Previous team member"
  >
    <TopArrow className="slick-prev" />
  </button>
);

const CoreTeam = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 300,
    centerMode: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setTimeout(() => setActiveSlide(current), 12);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <section className="our-partners-wrp coreTeam maxWidth lgTab:px-4 pt-4 lgTab:pt-0">
      <div className="w-full px-4">
        <div className="partner-row">
          <div className="z-10 flex flex-col items-start mdTab:items-center gap-6 lgTab:gap-8 titlebox !mb-0 sm:!mb-16">
            <HeadingBox className="w-[250px]">Our Team</HeadingBox>
            <AnimatedBox />
            <div className="flex flex-col gap-4 lgTab:gap-8 max-w-[1174px] z-20 text-left mdTab:text-center">
              <h2 className="subHeading animationText max-w-[592px] lgTab:mx-auto">
                Core team members
              </h2>
              <p className="text-[1.375rem] lgTab:text-2xl text-grayLight font-bold max-w-[840px] mx-auto">
                The MamaFi Team is composed of specialized builders driving
                strategy, technology, and growth across the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="coreTeamContainer">
        <div className="description">
          {teamMembers[activeSlide] && (
            <div className="membersData">
              <h2 className="coreTeamMemberName">
                {teamMembers[activeSlide].name}
                <span style={{ marginLeft: "10px" }}>
                  <ReactCountryFlag
                    svg
                    countryCode={teamMembers[activeSlide].countryCode}
                    alt={`${teamMembers[activeSlide].name} country flag`}
                    title={`${teamMembers[activeSlide].name} country flag`}
                    aria-label={`${teamMembers[activeSlide].name} country flag`}
                    style={{
                      fontSize: "1em",
                      lineHeight: "1em",
                    }}
                  />
                </span>
              </h2>
              <p className="coreTeamMemberRole">
                {teamMembers[activeSlide].title}
              </p>
              <ul>
                {teamMembers[activeSlide].responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="partner-slider-wp">
          <div className="container-fluid">
            <div className="partner-slider">
              <Slider ref={sliderRef} {...settings}>
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`box ${activeSlide === index && "active"}`}
                  >
                    <div className="parslide">
                      <div className="partner-box core">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.title}`}
                          width={540}
                          height={540}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="md:hidden coreTeamMobileArrows">
          <button
            type="button"
            aria-label="Previous team member"
            className="coreTeamMobileArrow coreTeamMobileArrowPrev"
            onClick={() => sliderRef.current?.slickPrev?.()}
          >
            <TopArrow className="coreTeamMobileArrowIcon" />
          </button>
          <button
            type="button"
            aria-label="Next team member"
            className="coreTeamMobileArrow coreTeamMobileArrowNext"
            onClick={() => sliderRef.current?.slickNext?.()}
          >
            <TopArrow className="coreTeamMobileArrowIcon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
