import { useTranslations } from "next-intl";
import picture from "@/assets/img/person/chapeuzinho_surpresa.png";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("blog.notFound");

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto text-center">
      <Image
        src={picture.src}
        width={picture.width}
        height={picture.height}
        className="w-64 my-8"
        alt={t("title")}
      />
      <p className="text-sm font-large text-purple-700 font-bold">
        {t("title")}
      </p>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800">
        {t("message")}
      </h1>
      <p className="mt-4 text-gray-500">{t("details")}</p>
    </div>
  );
}
