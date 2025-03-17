"use client";
import { Link } from "react-scroll";
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
        <ul className="flex gap-11 text-white">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.path}
                  smooth={true}
                  and
                  spy={true}
                  className="cursor-pointer"
                  //activeClass="text-gray-400"
                  activeClass="text-accent"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
