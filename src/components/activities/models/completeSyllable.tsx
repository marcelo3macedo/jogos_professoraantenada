"use client";
import { useTranslations } from "next-intl";
import ActiveQuestion from "../activeQuestion";
import BackAction from "../backAction";
import Syllables from "../syllables";
import Image from "next/image";
import { getCardsSrc } from "@/helpers/imageLoader";
import useSession from "@/hooks/useSession";

export default function CompleteSyllable({
  session,
  question,
}: {
  session: any;
  question: any;
}) {
  const t = useTranslations("activities.completeSyllable");
  const { selectAnswer } = useSession();
  const imageSrc = getCardsSrc(session.slug);

  function actionHandler(selected: string) {
    const isCorrect = selected === session.missSyllable;
    selectAnswer(isCorrect);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <BackAction />
      <div className="flex flex-col flex-1 md:justify-center items-center w-full pt-2 px-2 md:px-0 md:pt-14">
        <ActiveQuestion actual={question.actual} total={question.total} />
        <div className="text-slate-800 text-xl text-center py-2 md:py-4 font-bold">
          {t("title")}
        </div>
        <Syllables
          syllables={session.syllables}
          missSyllable={session.missSyllable}
        />
      </div>
      <Image
        src={imageSrc}
        width={180}
        height={180}
        alt=""
        className="mx-auto rounded-2xl my-4"
      />
      <div className="grid grid-cols-2 py-4 gap-2 content-center items-center justify-center">
        {session.possibilities.map((o: string) => {
          return (
            <div
              className="p-2 hover:opacity-70 hover:cursor-pointer select-none"
              key={o}
              onClick={() => {
                actionHandler(o);
              }}
            >
              <h2 className="bg-slate-100 text-slate-800 px-10 md:px-12 py-6 md:py-10 text-3xl md:text-5xl font-bold rounded-2xl text-center border-2 border-slate-800">
                {o}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
