import { useTranslations } from "next-intl";
import Image from "next/image";
import lockedSrc from "@/assets/img/trophies/locked.gif";

export default function TrophyLocked() {
  const t = useTranslations("trophies");

  return (
    <div className="select-none mb-4 bg-white rounded-lg p-4 border border-slate-100">
      <div className="relative">
        <Image
          className="border-4 border-slate-400 object-contain w-auto mx-auto object-center rounded-lg lg:h-96"
          src={lockedSrc}
          alt={""}
        />
      </div>

      <div className="inline-block mt-2 w-full text-center px-8 py-2 rounded-lg">
        <h2 className="text-violet-600 font-bold text-3xl">
          {t(`types.locked.title`)}
        </h2>
        <h3 className="my-2 text-lg">{t(`types.locked.description`)}</h3>
      </div>
    </div>
  );
}