"use client";
import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/shared/navLinks";

const MobileNav: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Krystian<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
