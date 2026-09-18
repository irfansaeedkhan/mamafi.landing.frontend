import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

type GalleryItem = {
  image: string;
  caption: string;
  width: number;
  height: number;
};

const galleryItems: GalleryItem[] = [
  {
    image: "/images/sports-1.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 313,
    height: 427,
  },
  {
    image: "/images/sports-2.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 212,
    height: 427,
  },
  {
    image: "/images/sports-3.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 320,
    height: 427,
  },
  {
    image: "/images/sports-4.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 374,
    height: 427,
  },
  {
    image: "/images/sports-5.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 232,
    height: 415,
  },
  {
    image: "/images/sports-6.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 508,
    height: 415,
  },
  {
    image: "/images/sports-7.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 237,
    height: 427,
  },
  {
    image: "/images/sports-8.webp",
    caption: "Sports team wearing uniforms with MamaFi logo",
    width: 241,
    height: 427,
  },
];

const RealWorldImpactGallery: React.FC = () => {
  return (
    <section className="relative w-full overflow-visible pt-10 lgTab:py-14">
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] z-0 hidden h-[min(140%,900px)] w-[min(140vw,1600px)] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[url('/images/bg-glow.webp')] bg-cover bg-center bg-no-repeat lgTab:block"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1370px] flex-col items-start px-4 text-left sm:px-6 lgTab:items-center gap-6 lgTab:gap-10 lgTab:text-center lg:px-10 xl:px-14">
        <div className="flex w-full justify-start lgTab:justify-center">
          <HeadingBox className="w-auto max-w-[280px]">
            Image Gallery
          </HeadingBox>
        </div>

        <div className="mb-4 flex w-full flex-col items-start gap-4 lgTab:mb-10 lgTab:items-center lgTab:gap-6">
          <div className="flex justify-start lgTab:justify-center">
            <AnimatedBox boxColor="rgb(26 24 28)" />
          </div>
          <h2 className="subHeading animationText max-w-[1174px] font-semibold mdTab:text-5xl lgTab:mx-auto">
            Proof in the Field
          </h2>
          <p className="max-w-[1110px] text-left text-base font-bold leading-relaxed text-white lgTab:text-center lgTab:text-2xl">
            A partnership visible across sports teams, facilities, social media,
            and community initiatives.
          </p>
        </div>

        <div className="w-full lgTab:hidden">
          <div className="mx-auto w-full max-w-[343px] space-y-4">
            {/* Top block: masonry-like two columns (1->3 left, 2->8 right) */}
            <div className="flex w-full justify-between">
              <div className="flex w-[167px] flex-col gap-3">
                {[0, 2].map((itemIndex) => {
                  const item = galleryItems[itemIndex];
                  const heightClass =
                    itemIndex === 0 ? "h-[228px]" : "h-[259px]";
                  return (
                    <div
                      key={item.image}
                      className={`relative overflow-hidden rounded-2xl ${heightClass}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="167px"
                      />
                      <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm">
                        <p
                          className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex w-[161px] flex-col gap-3">
                {[1, 7].map((itemIndex) => {
                  const item = galleryItems[itemIndex];
                  const heightClass =
                    itemIndex === 1 ? "h-[306px]" : "h-[181px]";
                  return (
                    <div
                      key={item.image}
                      className={`relative overflow-hidden rounded-2xl ${heightClass}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="167px"
                      />
                      {itemIndex !== 7 && (
                        <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm">
                          <p
                            className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2: image 4 full width */}
            <div className="relative h-[384px] w-full overflow-hidden rounded-2xl">
              <Image
                src={galleryItems[3].image}
                alt={galleryItems[3].caption}
                fill
                className="object-cover"
                loading="lazy"
                sizes="343px"
              />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm">
                <p
                  className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                  }}
                >
                  {galleryItems[3].caption}
                </p>
              </div>
            </div>

            {/* Row 3: image 5 + 7 */}
            <div className="grid w-full grid-cols-[167px_161px] justify-between">
              {[4, 6].map((itemIndex, i) => {
                const item = galleryItems[itemIndex];
                return (
                  <div
                    key={item.image}
                    className={`relative h-[293px] overflow-hidden rounded-2xl ${
                      i === 0 ? "w-[167px]" : "w-[161px]"
                    }`}
                  >
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 1024px) 50vw, 374px"
                      />
                    <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm">
                      <p
                        className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 4: image 6 full width */}
            <div className="relative h-[251px] w-full overflow-hidden rounded-2xl">
              <Image
                src={galleryItems[5].image}
                alt={galleryItems[5].caption}
                fill
                className="object-cover"
                loading="lazy"
                sizes="343px"
              />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm">
                <p
                  className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                  }}
                >
                  {galleryItems[5].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden w-full lgTab:flex lgTab:flex-col lgTab:gap-4">
          <div className="grid w-full grid-cols-[313px_212px_320px_374px] justify-between gap-4">
            {galleryItems.slice(0, 4).map((item, index) => (
              <div
                key={item.image}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[427px] w-full">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1280px) 25vw, 374px"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm">
                  <p
                    className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid w-full grid-cols-[232px_508px_237px_241px] justify-between gap-4">
            {galleryItems.slice(4).map((item, index) => (
              <div
                key={item.image}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className={`relative w-full h-[427px] `}>
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1280px) 25vw, 508px"
                  />
                </div>
                {index !== 3 && (
                  <div
                    className={`pointer-events-none absolute inset-x-2 rounded-[12px] bg-[#0003] px-3 py-2 backdrop-blur-sm bottom-2 `}
                  >
                    <p
                      className="overflow-hidden text-left text-[0.563rem] lgTab:text-base font-medium leading-tight text-white"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <p className="lgTab:px-0 text-left text-sm font-medium leading-relaxed text-white lgTab:text-lg align-left">
            These images represent real visibility inside the sports center and
            across its communication channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealWorldImpactGallery;
