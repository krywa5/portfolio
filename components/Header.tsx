import { FunctionComponent } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { navLinks } from "@/shared/navLinks";

const Header: FunctionComponent = () => {
  const t = useTranslations("Nav");
  const homePath = navLinks.find((link) => link.name === "home")?.path ?? "/";
  const contactPath =
    navLinks.find((link) => link.name === "contact")?.path ?? "/contact";

  return (
    <header className="py-8 xl:py-12 text-white sticky bg-primary top-0 left-0 right-0 z-30 xl:static">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Link href={homePath}>
            <h1 className="text-4xl font-semibold">
              WWWasilewski<span className="text-accent">.</span>
            </h1>
          </Link>
          <LocaleSwitcher className="hidden xl:block" variant="desktop" />
        </div>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={contactPath}>
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
