"use client";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const DownloadCVButton: FunctionComponent = () => {
  const t = useTranslations();
  const params = useParams<{ locale: "pl" | "en" }>();
  const locale: "pl" | "en" = params?.locale ?? "en";

  return (
    <Link
      href={`/assets/KrystianWasilewski_CV_${locale}.pdf`}
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
