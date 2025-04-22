import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          className="w-[44px] h-[44px] bg-accent flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-black text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-black text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>
      {/* Description, only show when open */}
      {isOpen && (
        <div className="pb-6 text-base text-secondary overflow-hidden">
          {description}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
