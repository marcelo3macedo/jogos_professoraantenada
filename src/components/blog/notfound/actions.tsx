"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function Actions() {
  const t = useTranslations("blog.notFound.actions");
  const router = useRouter();

  return (
    <article>
      <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
        >
          <BsArrowLeft className="w-5 h-5 rtl:rotate-180" />

          <span>{t("back")}</span>
        </button>

        <Link href={"/"}>
          <span className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-violet-500 rounded-lg shrink-0 sm:w-auto hover:bg-violet-700">
            {t("home")}
          </span>
        </Link>
      </div>
    </article>
  );
}
