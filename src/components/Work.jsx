import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import Pretitle from "./Pretitle";
import Image from "next/image";
import Link from "next/link";

// Add project data
const workData = [
  {
    img: "/assets_2/img/work/restoration.jpg",
    category: "restoration",
    description:
      "Residential restoration project in downtown area with modern design",
    href: "",
  },
  {
    img: "/assets_2/img/work/construction.jpg",
    category: "construction",
    description: " Construction project in downtown area with modern design.",
  },
  {
    img: "/assets_2/img/work/renovation.jpg",
    category: "renovation",
    description: "Renovation project in downtown area with modern design ",
  },
  {
    img: "/assets_2/img/work/consulting.jpg",
    category: "consulting",
    description: "Preserving architectural heritage with modern techniques",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Our work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designer to deliver quality and innovation
            in every project we undertake.
          </p>
        </div>
      </div>
      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt=""
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8 pr-16 xl:pr-20">
                  <h4 className="text-white font-semibold uppercase tracking-[1px]">
                    {item.category}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href || "#"}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
