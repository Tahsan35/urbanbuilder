"use clint";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white text-3xl flex items-center justify-between"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="text-white bg-black border-none">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>

          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    spy={true}
                    activeClass="text-accent"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/* <Socials /> */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
      {/* <SheetTrigger
        className="text-white text-3xl flex items-center justify-items-center"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger> */}
    </Sheet>
  );
};

export default NavMobile;
