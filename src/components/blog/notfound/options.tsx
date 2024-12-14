import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowRight, BsCardList } from "react-icons/bs";

export default function Options() {
  const t = useTranslations("blog.notFound.options");

  return (
    <article>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-lg bg-white">
          <span className="text-gray-500">
            <BsCardList className="w-6 h-6" />
          </span>

          <h3 className="mt-6 font-medium text-gray-700">
            {t("messages.title")}
          </h3>
          <p className="mt-2 text-gray-500">{t("messages.description")}</p>

          <Link
            href="/lembrancinhas-e-mensagens"
            className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 hover:underline"
          >
            <span>{t("messages.action")}</span>
            <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>

        <div className="p-6 rounded-lg bg-white">
          <span className="text-gray-500">
            <BsCardList className="w-6 h-6" />
          </span>

          <h3 className="mt-6 font-medium text-gray-700">
            {t("learning.title")}
          </h3>
          <p className="mt-2 text-gray-500">{t("learning.description")}</p>

          <Link
            href="/alfabetizacao"
            className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 hover:underline"
          >
            <span>{t("learning.action")}</span>
            <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>

        <div className="p-6 rounded-lg bg-white">
          <span className="text-gray-500">
            <BsCardList className="w-6 h-6" />
          </span>

          <h3 className="mt-6 font-medium text-gray-700">
            {t("contact.title")}
          </h3>
          <p className="mt-2 text-gray-500">{t("contact.description")}</p>

          <Link
            href="/blog/sugestoes"
            className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 hover:underline"
          >
            <span>{t("contact.action")}</span>
            <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </article>
  );
}
