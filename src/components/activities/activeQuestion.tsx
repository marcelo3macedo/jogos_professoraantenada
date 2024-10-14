"use client";
import { useTranslations } from "next-intl";
import { Question } from "./activitiesProps";

export default function ActiveQuestion({ actual, total }: Question) {
  const t = useTranslations("activities");

  return (
    <div className="text-pink-800 text-sm md:text-lg">
      {t("question")} {actual} {t("of")} {total}
    </div>
  );
}
