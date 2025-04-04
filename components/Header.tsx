import { FunctionComponent } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

const Header: FunctionComponent = () => {
  const t = useTranslations("Nav");

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-4 ">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              WWWasilewski<span className="text-accent">.</span>
            </h1>
          </Link>
          <LocaleSwitcher className="hidden xl:block" />
        </div>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t("contact")}</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
