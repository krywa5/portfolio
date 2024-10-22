"use client";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const DownloadCVButton: FunctionComponent = () => {
  const location: "pl" | "en" = "en";
  return (
    <Link
      href={`/assets/KrystianWasilewski_CV_${location}.pdf`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </Link>
  );
};

export default DownloadCVButton;
