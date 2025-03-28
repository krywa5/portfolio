import DownloadCVButton from "@/components/DownloadCVButton";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Senior Frontend Developer</span>
            <h1 className="h1 mb-6">
              {t.rich("hello-im", {
                me: (chunks) => (
                  <>
                    <br /> <span className="text-accent">{chunks}</span>
                  </>
                ),
                myName: "Krystian Wasilewski",
              })}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{t("short-bio")}</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCVButton />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerClassName="flex gap-6"
                  iconsClassName="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
