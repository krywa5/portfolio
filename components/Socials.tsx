import { FunctionComponent } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

type Social = {
  icon: JSX.Element;
  path: string;
};

const socials: Social[] = [
  {
    icon: <FaGithub />,
    path: "https://github.com/krywa5",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/krystianwasilewski/",
  },
  {
    icon: <MdAlternateEmail />,
    path: "mailto:krystian.wasilewski@o2.pl",
  },
  {
    icon: <FiPhone />,
    path: "tel:889487298",
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
        <Link
          key={index}
          href={social.path}
          className={iconsClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
