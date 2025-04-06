"use client";
import { FunctionComponent } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface ProjectsSliderButtonsProps {
  containerClassName?: string;
  btnClassName?: string;
  iconClassName?: string;
}

const ProjectsSliderButtons: FunctionComponent<ProjectsSliderButtonsProps> = ({
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

export default ProjectsSliderButtons;
