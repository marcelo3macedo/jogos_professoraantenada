"use client";
import Image from "next/image";
import { getCardsSrc } from "@/helpers/imageLoader";
import BackAction from "../backAction";
import ActiveQuestion from "../activeQuestion";
import DragResult from "../dragResult";
import { useState } from "react";
import OptionsPage from "../options";
import useSession from "@/hooks/useSession";
import { useTranslations } from "next-intl";

export default function CreateWord({
  session,
  question,
}: {
  session: any;
  question: any;
}) {
  const t = useTranslations("activities.createWord");
  const { selectAnswer } = useSession();
  const imageSrc = getCardsSrc(session.slug);
  const [word, setWord] = useState<string[]>([]);

  function actionHandler(selected: string) {
    if (selected === session.syllables[word.length]) {
      setWord((prevWord: string[]) => [...prevWord, selected]);
    }

    if (word.length === session.syllables.length - 1) {
      selectAnswer(true);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <BackAction />
      <div className="flex flex-col flex-1 justify-center items-center w-full md:pt-14">
        <ActiveQuestion actual={question.actual} total={question.total} />
        <div className="text-slate-800 text-xl text-center md:py-4 font-bold">
          {t("title")}
        </div>
        <Image
          src={imageSrc}
          width={180}
          height={180}
          alt=""
          className="w-44 md:w-auto mx-auto rounded-2xl my-4"
        />

        <div className="px-4">
          <DragResult syllables={word} />
        </div>
        <OptionsPage options={session.possibilities} action={actionHandler} />
      </div>
    </div>
  );
}
