"use client";

import { navLinks } from "@/shared/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

const Nav: FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
