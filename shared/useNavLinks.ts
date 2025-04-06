"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Locales } from "./enums/Locales";

type NavLink = {
  name: string;
  path: string;
};

export const useNavLinks = (): NavLink[] => {
  const t = useTranslations("Nav");
  const params = useParams<{ locale: Locales }>();
  const locale = params?.locale ?? "en";

  // TODO: przy przejściach coś nie tak
  return [
    {
      name: t("home"),
      path: `/${locale}`,
    },
    {
      name: t("services"),
      path: "/services",
    },
    {
      name: t("resume"),
      path: "/resume",
    },
    {
      name: t("projects"),
      path: "/projects",
    },
    {
      name: t("contact"),
      path: "/contact",
    },
  ];
};
