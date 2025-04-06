"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locales, localesArray } from "@/shared/enums/Locales";

interface LocaleSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = ({
  className,
  variant = "mobile",
}) => {
  const isMobile = variant === "mobile";

  return (
    <div className={className}>
      <ul className={`relative flex items-center gap-${isMobile ? "8" : "4"}`}>
        {localesArray.map((locale) => (
          <LocaleFlagButton locale={locale} key={locale} variant={variant} />
        ))}
      </ul>
    </div>
  );
};

interface LocaleFlagButtonProps {
  locale: Locales;
  variant: "desktop" | "mobile";
}

const LocaleFlagButton: FunctionComponent<LocaleFlagButtonProps> = ({
  locale,
  variant,
}) => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const isMobile = variant === "mobile";
  const sizeClassName = isMobile ? "w-[30px] h-[18px]" : "w-[20px] h-[12px]";

  const handleFlagClick = (locale: Locales) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale }
    );
  };

  return (
    <li className={`${sizeClassName} relative`}>
      <Image
        onClick={() => handleFlagClick(locale)}
        src={`/assets/${locale}-flag.jpg`}
        fill
        alt={`${locale} flag`}
        className="cursor-pointer"
      />
    </li>
  );
};

export default LocaleSwitcher;
