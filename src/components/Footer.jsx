import Image from "next/image";
import Link from "next/link";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";

import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Logo and info */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image
                src="/assets_2/logo.svg"
                width={230}
                height={48}
                alt="Urban Builder Logo"
              />
            </Link>
            <p className="mt-6 mb-8 max-w-[270px] text-border">
              Professional construction services for residential and commercial
              projects.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-1 gap-12 text-border">
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <RiMapPin2Fill className="text-accent" />
                  <p>123 Construction Ave, Building City</p>
                </div>
                <div className="flex items-center gap-2">
                  <RiPhoneFill className="text-accent" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <RiMailFill className="text-accent" />
                  <p>info@urbanbuilder.com</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
          </div>
        </div>
      </div>

      <div className=" pl-4 py-6 mt-12 border-t border-white/10 text-border flex flex-col">
        <Socials
          containerStyles="flex gap-4 justify-center"
          iconStyles="text-white text-lg hover:text-accent transition-all"
        />
        <p className="flex justify-center mt-2.5">
          © {new Date().getFullYear()} Urban Builder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
