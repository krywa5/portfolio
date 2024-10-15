import { FunctionComponent } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

type Social = {
  icon: JSX.Element;
  path: string;
};

const socials: Social[] = [
  {
    icon: <FaGithub />,
    path: "#", // TODO_KW: add
  },
  {
    icon: <FaLinkedin />,
    path: "#", // TODO_KW: add
  },
  {
    icon: <FaYoutube />,
    path: "#", // TODO_KW: add
  },
  {
    icon: <FaTwitter />,
    path: "#", // TODO_KW: add
  },
];

interface SocialsProps {
  containerClassName?: string;
  iconsClassName?: string;
}

const Socials: FunctionComponent<SocialsProps> = ({
  containerClassName,
  iconsClassName,
}) => {
  return (
    <div className={containerClassName}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconsClassName}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
