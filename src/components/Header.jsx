"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Logo from "./Logo";
const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];
const Header = () => {
  return (
    <header className="bg-black py-4 text-gray-400 sticky top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* logo */}
          <Logo />

          {/* nav and btn */}
          <nav className="hidden xl:flex items-center gap-10">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-white text-sm uppercase font-medium tracking-[1.2px] after:content-['/'] after:px-4 last:after:content-none"
                  >
                    <Link
                      to={link.path}
                      smooth={true}
                      and
                      spy={true}
                      //className="cursor-pointer"
                      //activeClass="text-gray-400"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* btn */}
            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-center min-w-[200px] group bg-white rounded-l-2xl">
              <div className="flex-1 text-center tracking-[1.2px] font-bold text-black text-sm font-serif uppercase">
                Get a quote
              </div>
              <div className="w-11 h-11 bg-black flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
