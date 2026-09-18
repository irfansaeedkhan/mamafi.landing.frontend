"use client";

import React, { useState, useEffect } from "react";
import { HeadingBox } from "../heading.box";
import AnimatedBox from "../animated.box";
import ReactPlayer from "react-player";
import VideoCard from "./partials/VideoCard";
import Image from "next/image";
import VideoCardMobile from "./partials/VideoCardMobile";

const Trust: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videos = [
    {
      title: "Review #1",
      image: "/images/video-thumbnail-1.png",
      name: "",
      url: "https://youtu.be/1svhp11BmUU?si=ITcKJO3aWAe4AHD-",
      position: "1",
    },
    {
      title: "Review #2",
      image: "/images/video-thumbnail-2.png",
      name: "",
      url: "https://youtu.be/LMlks_W_KiI",
      position: "2",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handlePlay = () => setIsPlaying(true);

  const handleVideoSelect = (video: typeof videos[0]) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  return (
    <div className="text-left md:text-center pt-[100px] pb-20 lg:pb-[132px] relative px-4 lgTab:px-4 mdTab:mt-0 [@media(max-width:767px)]:overflow-hidden">
      <div className="z-10 flex flex-col items-start mdTab:items-center gap-6 lgTab:gap-10 w-full max-w-[1300px] mx-auto">
        <HeadingBox className="w-[250px]">Trusted by</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-8 max-w-[1174px] z-20">
          <h1 className="heading animationText">
            They love what we do, and their words say it all.
          </h1>
          <h2 className="text-20px text-grayLight font-medium max-w-[680px] mx-auto">
            Discover why our customers trust and recommend us and know Real
            stories, real feedback—straight from those who matter most.
          </h2>
        </div>

        <div className="w-full mx-auto relative mb-[40px] hidden md:flex flex-col gap-6">
          <div className="relative w-full max-w-[1300px] aspect-w-16 aspect-h-9 mx-auto">
            {isClient && (
              <ReactPlayer
                url={selectedVideo.url}
                playing={isPlaying}
                controls={true}
                width="100%"
                height="100%"
                className="rounded-lg overflow-hidden"
              />
            )}

            {!isPlaying && (
              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer bg-[#232323] border border-[#232323] rounded-lg overflow-hidden"
                onClick={handlePlay}
              >
                <div className="relative w-full rounded-[8px]">
                  <span className="absolute left-[50%] top-[50%] transition -translate-x-[50%] -translate-y-[50%]">
                    <Image
                      src="svgs/play-circle.svg"
                      alt="icon"
                      width={56}
                      height={56}
                    />
                  </span>

                  <Image
                    src={selectedVideo.image}
                    alt="video-thumbnail"
                    width={307}
                    height={220}
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <VideoCard
                key={i}
                video={v}
                index={i}
                onVideoSelect={handleVideoSelect}
              />
            ))}
          </div>
        </div>

        {/* mobile component */}
        <div className="w-full mx-auto relative mb-[40px] md:hidden flex flex-col gap-6">
          {videos.map((v, i) => (
            <VideoCardMobile key={i} video={v} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
