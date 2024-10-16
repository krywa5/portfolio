"use client";
import { FunctionComponent } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderButtonsProps {
  containerClassName?: string;
  btnClassName?: string;
  iconClassName?: string;
}

const WorkSliderButtons: FunctionComponent<WorkSliderButtonsProps> = ({
  containerClassName,
  btnClassName,
  iconClassName,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerClassName}>
      <button className={btnClassName} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconClassName} />
      </button>
      <button className={btnClassName}>
        <PiCaretRightBold
          className={iconClassName}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
