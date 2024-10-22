import { FunctionComponent } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
