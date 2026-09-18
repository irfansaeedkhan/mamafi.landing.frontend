import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

interface VideoCardMobileProps {
  video: {
    title: string;
    image: string;
    name: string;
    url: string;
    position: string;
  };
  index: number;
}

const VideoCardMobile: React.FC<VideoCardMobileProps> = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative w-full aspect-w-16 aspect-h-11 rounded-[8px]">
        {isClient && isPlaying ? (
          <ReactPlayer
            url={video.url}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            className="rounded-lg overflow-hidden"
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer  border border-[#232323] rounded-lg overflow-hidden"
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
                src={video.image}
                alt={`video-thumbnail-${index}`}
                width={307}
                height={220}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
      <span className="text-white text-left text-[14px] font-bold">
        {video.title || `Review #${index + 1}`}
      </span>
    </div>
  );
};

export default VideoCardMobile;
