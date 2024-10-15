import games_container from "@/assets/games/list.json";
import { getActivitiesSrc } from "@/helpers/imageLoader";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SingleDetails({
  slug,
  action,
}: {
  readonly slug: string;
  readonly action: any;
}) {
  const t = useTranslations("actions");
  const { title, description } =
    games_container.find((x) => x.slug === slug) || {};

  return (
    <div className="w-full h-lvh flex flex-col mt-4 md:mt-0 md:justify-center items-center">
      <div>
        <Image
          className="object-cover object-center w-full h-52 rounded-lg lg:h-52 mb-8"
          src={getActivitiesSrc(slug)}
          alt={slug}
        />
      </div>
      <div className="text-center max-w-4xl px-8 md:px-0">
        <h1 className="text-xl md:text-3xl font-bold text-slate-700">
          {title}
        </h1>
        <h3 className="text-sm md:text-xl my-1 md:my-4 text-slate-700">
          {description}
        </h3>
      </div>
      <div>
        <button
          onClick={action}
          className="select-none hover:cursor-pointer hover:opacity-80 active:top-1 active:relative"
        >
          <div className="inline-block mt-4 w-full text-center bg-violet-100 px-24 py-4 rounded-lg text-violet-600 font-bold text-md border border-violet-400">
            <span className="text-lg md:text-2xl font-bold italic">
              {t("start")}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
