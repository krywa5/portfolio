"use client";
import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/shared/navLinks";
import LocaleSwitcher from "./LocaleSwitcher";

const MobileNav: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-auto mb-auto text-center text-2xl">
          <Link href="/">
            <SheetClose>
              <h1 className="text-4xl font-semibold">
                WWWasilewski<span className="text-accent">.</span>
              </h1>
            </SheetClose>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}>
              <SheetClose
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </SheetClose>
            </Link>
          ))}
          <LocaleSwitcher variant="mobile" className="mt-6" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
