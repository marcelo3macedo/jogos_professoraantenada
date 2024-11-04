"use client";
import { getTrophySrc } from "@/helpers/imageLoader";
import useUser from "@/hooks/useUser";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function UserInfo() {
  const t = useTranslations("trophies");
  const { getHighestUnlockedTrophy, points } = useUser();
  const trophy = getHighestUnlockedTrophy();
  const level =
    trophy && trophy.name ? t(`types.${trophy.name}.title`) : t("starting");
  const image = trophy && trophy.name ? trophy.name : "novice";

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-24 overflow-hidden bg-purple-950"></div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-white">
        <Image
          className="object-fill object-center h-32"
          src={getTrophySrc(image)}
          alt={""}
        />
      </div>
      <div className="text-center my-2">
        <h2 className="font-semibold">
          {t("level")}: {level}
        </h2>
        <p className="text-gray-500">
          {points} {t("points")}
        </p>
      </div>
      <div className="p-2">
        <Link href={"/trofeus"}>
          <div className="inline-block mt-2 w-full text-center bg-violet-100 px-8 py-2 rounded-lg text-violet-600 font-bold text-md border border-violet-400">
            {t("trophies")}
          </div>
        </Link>
      </div>
    </div>
  );
}
