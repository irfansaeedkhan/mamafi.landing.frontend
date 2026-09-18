import React from "react";

interface AnimatedArrowProps {
  className?: string;
}

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="60"
      height="55"
      viewBox="0 0 60 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath="url(#clip0_8_1163)">
        <g className="origin-center">
          <g filter="url(#filter1_f_8_1163)">
            <path
              d="M11.2636 42.3389C2.97105 33.3259 4.1875 19.9855 13.1925 11.6855C22.1975 3.38556 35.581 3.26914 43.8736 12.2821C52.1662 21.2951 51.5887 35.33 42.5837 43.63C33.5787 51.9299 19.5562 51.3519 11.2636 42.3389Z"
              fill="white"
            />
          </g>
          <g
            style={{ mixBlendMode: "color-dodge" }}
            filter="url(#filter2_f_8_1163)"
          >
            <path
              d="M11.6518 37.8831C2.2324 27.6455 2.34573 24.8914 12.5743 15.4637C22.8029 6.03593 32.414 -0.173034 41.8333 10.0646C51.2527 20.3023 50.5968 36.2443 40.3682 45.672C30.1396 55.0998 21.0712 48.1208 11.6518 37.8831Z"
              fill="#93B9FF"
            />
          </g>
        </g>
        <g filter="url(#filter0_f_8_1163)">
          <path
            d="M49.7534 18.6725C57.7653 27.3804 57.6689 29.7229 48.9688 37.7419C40.2686 45.7609 32.0937 51.0421 24.0818 42.3342C16.0699 33.6263 16.6278 20.0664 25.328 12.0474C34.0282 4.02844 41.7415 9.96456 49.7534 18.6725Z"
            fill="url(#paint0_linear_8_1163)"
          />
        </g>

        <ellipse
          cx="20.759"
          cy="20.7605"
          rx="20.759"
          ry="20.7605"
          transform="matrix(-1 -1.38685e-08 0.000883839 -1 48.3083 48.0718)"
          fill="#18181A"
        />
        <path
          d="M24.0515 27.5144L31.5591 27.5144"
          stroke="white"
          strokeWidth="0.97026"
          strokeLinecap="round"
        />
        <path
          d="M29.0566 30.3323L31.5592 27.5144L29.0566 24.6966"
          stroke="white"
          strokeWidth="0.97026"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_8_1163"
          x="13.9842"
          y="3.83039"
          width="46.0838"
          height="47.4305"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.21774"
            result="effect1_foregroundBlur_8_1163"
          />
        </filter>
        <filter
          id="filter1_f_8_1163"
          x="1.25251"
          y="1.05476"
          width="52.9171"
          height="52.8763"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.21774"
            result="effect1_foregroundBlur_8_1163"
          />
        </filter>
        <filter
          id="filter2_f_8_1163"
          x="-1.17398"
          y="-1.12954"
          width="55.5782"
          height="57.1614"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.95698"
            result="effect1_foregroundBlur_8_1163"
          />
        </filter>
        <linearGradient
          id="paint0_linear_8_1163"
          x1="68.5"
          y1="28"
          x2="-28.4968"
          y2="24.4143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF294F" />
          <stop offset="1" stopColor="#1C83FF" />
        </linearGradient>
        <clipPath id="clip0_8_1163">
          <rect
            width="60"
            height="55"
            fill="white"
            transform="matrix(-1 0 0 1 60 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AnimatedArrow;
