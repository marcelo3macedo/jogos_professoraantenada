"use client";
import congrats from "@/assets/animations/congrats.json";
import LottieAnimation from "../animations/lottie";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Completed() {
  const t = useTranslations("completed");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <LottieAnimation animationData={congrats} />
      <h1 className="text-2xl font-bold mb-2 text-center">{t("title")}</h1>

      <Link href={"/"}>
        <p className="bg-pink-400 mt-8 px-10 py-4 rounded-lg text-lg font-bold text-pink-100">
          {t("back")}
        </p>
      </Link>
    </div>
  );
}
