import Link from "next/link";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "",
  },
  {
    icon: <RiYoutubeFill />,
    path: "",
  },
  {
    icon: <RiTwitterFill />,
    path: "",
  },
  {
    icon: <RiLinkedinFill />,
    path: "",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
