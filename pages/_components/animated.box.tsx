import React from "react";

const DEFAULT_BOX_COLOR = "rgb(23 23 26)";

interface AnimatedBoxProps {
  className?: string;
  boxColor?: string;
  mobileBoxColor?: string;
  desktopBoxColor?: string;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  className,
  boxColor = DEFAULT_BOX_COLOR,
  mobileBoxColor,
  desktopBoxColor,
}) => {
  const renderPixels = (color: string) => {
    const fill = { backgroundColor: color };

    return (
      <div className="animationBox relative h-[37px] w-40">
        <div
          className="box absolute left-[17px] top-[-1px] h-[21px] w-[24px]"
          style={fill}
        />
        <div
          className="box absolute left-[-1px] top-[17px] h-[25px] w-[21px]"
          style={fill}
        />
        <div
          className="box absolute right-[-1px] top-[17px] h-[25px] w-[123px]"
          style={fill}
        />
      </div>
    );
  };

  return (
    <div className={className}>
      {mobileBoxColor || desktopBoxColor ? (
        <>
          <div className="lgTab:hidden">
            {renderPixels(mobileBoxColor ?? boxColor)}
          </div>
          <div className="hidden lgTab:block">
            {renderPixels(desktopBoxColor ?? boxColor)}
          </div>
        </>
      ) : (
        renderPixels(boxColor)
      )}
    </div>
  );
};

export default AnimatedBox;
