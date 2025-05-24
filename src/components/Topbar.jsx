import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="text-gray-400 py-4 xl:h-16 xl:py-1 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center"
    >
      <div className="container">
        {/* phone,mail,social */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          <div className="hidden lg:flex items-center gap-8">
            {/* phone */}
            <div className="flex  items-center gap-3">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-gray-900">01623443703</p>
            </div>
            {/* mail */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <RiMailFill />
              </div>
              <p className="font-medium text-gray-800">
                md.shakil.developer@gmail.com
              </p>
            </div>
          </div>
          {/* social */}
          <Socials
            containerStyles=" flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-black hover:text-white duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
