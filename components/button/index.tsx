import clsx from "clsx";
import React from "react";
import styles from "./button.module.css";
import cn from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary" | "danger" | "borderless" | "tertiary";
  Icon?: React.ReactNode;
  borderRounded?: string;
  backgroundColor?: string;
  isLoading?: boolean;
  loaderIcon?: React.ReactNode;
}
interface CustomCSSProperties extends React.CSSProperties {
  "--border-rounded": string;
  "--background-color": string;
}
const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  className,
  Icon,
  loaderIcon,
  borderRounded = "14px",
  backgroundColor = "#17171A",
  isLoading = false,
  ...props
}) => {
  const customStyles: CustomCSSProperties = {
    "--border-rounded": borderRounded,
    "--background-color": backgroundColor,
  };
  return (
    <>
      <button
        className={clsx(
          ` default-button-styling flex items-center justify-center gap-2`,
          variant === "primary" && `primary-gradient-btn relative bg-gradient`,
          variant === "tertiary" &&
            `primary-gradient-btn relative bg-gradient rounded-full`,
          // variant === "primary" && !props.disabled && "hover:scale-105",
          // variant === "primary" && props.disabled && "hover:scale-100",
          variant === "secondary" &&
            "border border-[#1E202B] bg-transparent font-semibold text-white ",
          variant === "secondary" &&
            !props.disabled &&
            "hover:border-transparent hover:bg-[#1E202B]",
          variant === "danger" &&
            "border border-[#FF424D] bg-transparent font-semibold text-[#FF424D] hover:border-transparent hover:bg-[#FF424D] hover:text-white",
          variant === "borderless" &&
            "border border-none bg-transparent font-semibold text-white hover:scale-105",
          `${props.disabled && "opacity-50"}`,
          className && className,
          variant === "primary" && styles["primary-gradient-btn"]
        )}
        style={variant === "primary" ? customStyles : undefined}
        {...props}
      >
        {Icon && Icon}
        <span
          className={cn(
            `relative`,
            variant === "primary" && "text-gradient",
            variant === "tertiary" && "text-white text-xs"
          )}
        >
          {loaderIcon ? loaderIcon : title}
        </span>
      </button>
    </>
  );
};

export default Button;
