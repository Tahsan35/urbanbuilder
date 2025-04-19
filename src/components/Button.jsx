import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <button className="w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-accent">
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-black text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-black flex items-center justify-center">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;
