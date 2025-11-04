"use client";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Locales } from "@/shared/enums/Locales";

const DownloadCVButton: FunctionComponent = () => {
  const t = useTranslations();
  const params = useParams<{ locale: Locales }>();
  const locale = params?.locale ?? "en";

  return (
    <Link
      href={`/assets/Krystian_Wasilewski_CV_${locale.toUpperCase()}.pdf`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>{`${t("General.download")} CV`}</span>
        <FiDownload className="text-xl" />
      </Button>
    </Link>
  );
};

export default DownloadCVButton;
