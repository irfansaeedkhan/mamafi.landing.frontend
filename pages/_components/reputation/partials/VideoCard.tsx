import React from "react";
import Image from "next/image";

interface VideoCardProps {
  video: {
    title: string;
    image: string;
    name: string;
    url: string;
    position: string;
  };
  index: number;
  onVideoSelect: (video: VideoCardProps["video"]) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  index,
  onVideoSelect,
}) => {
  return (
    <div
      className="flex flex-col gap-[10px] cursor-pointer "
      onClick={() => onVideoSelect(video)}
    >
      <div className="relative w-full rounded-[8px] border border-[#232323]">
        <span className="absolute left-[50%] top-[50%] transition -translate-x-[50%] -translate-y-[50%]">
          <Image src="svgs/play-circle.svg" alt="icon" width={56} height={56} />
        </span>
        <Image
          src={video.image}
          alt={`video-thumbnail-${index}`}
          width={307}
          height={220}
          className="w-full rounded-[8px]"
        />
      </div>
      <span className="text-white text-left text-[14px] font-bold">
        {video.title || `Review #${index + 1}`}
      </span>
    </div>
  );
};

export default VideoCard;
