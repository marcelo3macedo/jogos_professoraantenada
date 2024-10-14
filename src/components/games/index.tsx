import { getActivitiesSrc } from "@/helpers/imageLoader";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Index({ game }: { game: GamesInfo }) {
  const t = useTranslations("actions");

  return (
    <div
      key={game.title}
      className="hover:opacity-70 hover:cursor-pointer select-none mb-4 bg-white rounded-lg p-2 border border-slate-300"
    >
      <Link href={game.link}>
        <div className="relative">
          <Image
            className="object-fill object-center w-full rounded-lg lg:h-96"
            src={getActivitiesSrc(game.slug)}
            alt={game.title}
          />
        </div>

        <div className="inline-block mt-2 w-full text-center bg-violet-100 px-8 py-2 rounded-lg text-violet-600 font-bold text-md border border-violet-400">
          {t("start")}
        </div>
      </Link>
    </div>
  );
}
