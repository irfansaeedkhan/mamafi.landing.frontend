import React from "react";
import Image from "next/image";
import { IconReddit, IconTelegram, IconX } from "../../icons/social-icons";

type Social = {
    url: string;
    icon: string;
  };
  
  type Testimonial = {
    name: string;
    position: string;
    text: string;
    socials: Array<Social>;
    date: string;
  };
  
  interface TestimonialsCardProps {
    testimonial: Testimonial;
  }

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonial }) => {
  return (
    <div className="text-grayLight flex w-[348px] pb-[25.036px] flex-col items-center gap-[32px] rounded-[16px] bg-[#1C1C1F]">
        <div className="h-fit py-[20px] px-[16px] w-[100%]" style={{ height: "fit-content" }}>
            <div className="flex items-center gap-[12px]">
                <Image 
                    className="rounded-full"
                    src="/images/team5.png"
                    alt="team5"
                    width={48}
                    height={48}
                />

                <div className="flex flex-col gap-[4px] text-left font-monto">
                    <span className="text-white font-monto text-[14px] font-semibold normal-case leading-normal [font-variant-numeric:lining-nums proportional-nums]">{testimonial.name}</span>
                    <span className="text-grayLight opacity-[0.5] font-monto text-[12px] font-medium normal-case leading-normal [font-variant-numeric:lining-nums proportional-nums]">{testimonial.position}</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-[32px] px-[16px]">
            <span className="font-monto text-[14px] font-medium leading-[24px] normal-case [font-variant-numeric:lining-nums proportional-nums]">
                {testimonial.text}
            </span>

            <div className="flex justify-between gap-[31px]">
                <div className="flex gap-[16px]">
                    {
                        testimonial.socials.map(({ url, icon }, index) => {
                            return <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-gradient"
                            >
                                {icon === 'twitter' && <IconX className="size-4" />}
                                {icon === 'telegram' && <IconTelegram className="size-5" />}
                                {icon === 'reddit' && <IconReddit className="size-5" />}                                
                            </a>

                        })
                    }
                </div>

                <span className="text-grayLight opacity-[0.5] text-right font-monto text-[12px] font-medium normal-case leading-normal">{testimonial.date}</span>
            </div>
        </div>
    </div>    
  );
};

export default TestimonialsCard;
