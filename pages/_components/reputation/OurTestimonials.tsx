"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";
import TestimonialCard from "./partials/TestimonialCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import VideoCard from "./partials/VideoCard";
// import './partials/splide-slide-custom.module.css'

const OurTestimonials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO at Company",
      image: "/path/to/image1.jpg",
      text: "This service has been a game-changer for us. Highly recommend it!",
      date: "12 Dec, 2024",
      socials: [
        {
          icon: "twitter",
          url: "https://www.x.com",
        },
        {
          icon: "telegram",
          url: "https://www.telegram.com",
        },
        {
          icon: "reddit",
          url: "https://www.reddit.com",
        },
      ],
    },
    {
      name: "Jane Smith",
      position: "CTO at Startup",
      image: "/path/to/image2.jpg",
      text: "The best experience I’ve had with any service. Simply amazing! Joining this platform was the best decision I made for my portfolio. The community is thriving, and the features are unmatched!I’ve never seen a meme coin ecosystem this interactive. The Ethereum blockchain integration makes everything seamless and secure.",
      date: "12 Dec, 2024",
      socials: [
        {
          icon: "x",
          url: "https://www.x.com",
        },
        {
          icon: "telegram",
          url: "https://www.x.com",
        },
      ],
    },
    {
      name: "Samuel Green",
      position: "Product Manager at TechCorp",
      image: "/path/to/image3.jpg",
      text: "A fantastic product, super easy to use and very effective.",
      date: "12 Dec, 2024",
      socials: [
        {
          icon: "x",
          url: "https://www.x.com",
        },
        {
          icon: "telegram",
          url: "https://www.x.com",
        },
      ],
    },
  ];

  return (
    <div className="relative w-[95%] mx-auto text-left md:text-center pt-5 lg:pt-[40px] pb-5 lg:pb-[100px] px-[16px]">
      <div className="z-10 flex flex-col items-start mdTab:items-center  gap-6 lgTab:gap-8">
        <HeadingBox className="w-[250px]">Our testimonials</HeadingBox>
        <AnimatedBox />
        <div className="px-5 flex flex-col gap-8 max-w-[1174px] z-20">
          <h1 className="heading animationText">Loved by thousands</h1>
          <h2 className="text-20px text-grayLight font-medium max-w-[72ch] mx-auto">
            Read their experiences and see why we’re a favorite choice worldwide
          </h2>
        </div>
        <div className="relative lgTab:mt-6 w-full flex items-start justify-center gap-[32px] overflow-hidden">
          <Splide
            aria-label="My Favorite Images"
            extensions={{ AutoScroll }}
            options={{
              focus: "center",
              arrows: false,
              perPage: 4,
              gap: "16px",
              type: "loop",
              width: 1429,
              autoScroll: {
                speed: 1,
              },
              breakpoints: {
                768: {
                  gap: "0px",
                  perPage: 1,
                  width: 348,
                  autoScroll: false,
                  pagination: true,
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <div className="absolute inset-0 bg-[#18181acc] backdrop-blur-md w-full h-full z-30 flex items-center justify-center rounded-lg overflow-hidden border-[2px] border-[#232323]">
        <div className="content text-center">
          <h2 className="text-gradient text-4xl lg:text-6xl font-semibold pb-3 font-monto">
            COMING SOON
          </h2>
          <p className="text-base lg:text-xl text-[#DBDDE6]">
            Waiting for Approval from the Meme Parliament...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
