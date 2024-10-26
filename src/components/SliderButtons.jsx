"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const SliderButtons = () => {
  const swiper = useSwiper();
  const containerStyle =
    "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none";
  const btnStyle =
    "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all";

  return (
    <div className={containerStyle}>
      <button
        className={btnStyle}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={btnStyle}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SliderButtons;
