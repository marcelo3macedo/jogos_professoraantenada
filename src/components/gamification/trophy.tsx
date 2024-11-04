import { getTrophySrc } from "@/helpers/imageLoader";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TrophyLocked from "./locked";

export default function Trophy({ trophy }: { trophy: any }) {
  const t = useTranslations("trophies");

  if (!trophy.unlocked) {
    return <TrophyLocked />;
  }

  return (
    <div className="select-none mb-4 bg-white rounded-lg p-4 border border-slate-100">
      <div className="relative">
        <Image
          className="border-4 border-slate-400 object-contain w-auto mx-auto object-center rounded-lg lg:h-96"
          src={getTrophySrc(trophy.name)}
          alt={""}
        />
      </div>

      <div className="inline-block mt-2 w-full text-center px-8 py-2 rounded-lg">
        <h2 className="text-violet-600 font-bold text-3xl">
          {t(`types.${trophy.name}.title`)}
        </h2>
        <h3 className="my-2 text-lg">
          {t(`types.${trophy.name}.description`)}
        </h3>
        <h4 className="mt-2 text-md italic">{t(`conquered`)} 10/01/2000</h4>
      </div>
    </div>
  );
}
