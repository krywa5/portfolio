"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface LocaleSwitcherProps {
  className?: string;
}

const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = ({
  className,
}) => {
  // const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const handleFlagClick = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale }
    );
  };

  return (
    <div className={className}>
      <ul className="relative flex items-center gap-3">
        {/* TODO: zrobić z tego komponent i zrobić array z localesów i użyc jako typ w handleFlagClick */}
        <li className="w-[20px] h-[12px] relative">
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  onClick={() => handleFlagClick("pl")}
                  src="/assets/pl-flag.jpg"
                  fill
                  alt="Polish language"
                  className="cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>
                {/* TODO: zmniejszyć font-size */}
                <span>Język polski</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li className="w-[20px] h-[12px] relative">
          <Image
            onClick={() => handleFlagClick("en")}
            src="/assets/en-flag.jpg"
            fill
            alt="English language"
            className="cursor-pointer"
          />
        </li>
      </ul>
    </div>

    // <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
    //   {routing.locales.map((cur) => (
    //     <option key={cur} value={cur}>
    //       {t("locale", {
    //         locale: cur,
    //       })}
    //     </option>
    //   ))}
    // </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
