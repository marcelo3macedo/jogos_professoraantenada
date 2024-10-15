"use client";
import Image from "next/image";
import { getCardsSrc } from "@/helpers/imageLoader";
import BackAction from "../backAction";
import ActiveQuestion from "../activeQuestion";
import useSession from "@/hooks/useSession";
import { useTranslations } from "next-intl";

export default function IdentifyImage({
  session,
  question,
}: {
  readonly session: any;
  readonly question: any;
}) {
  const t = useTranslations("activities.identifyImages");
  const { selectAnswer } = useSession();
  const imageSrc = getCardsSrc(session.slug);

  function actionHandler(selected: string) {
    const isCorrect = selected === session.word;
    selectAnswer(isCorrect);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <BackAction />
      <div className="flex flex-col flex-1 justify-center items-center w-full pt-2 md:pt-14">
        <ActiveQuestion actual={question.actual} total={question.total} />
        <div className="text-slate-800 text-xl text-center py-4 font-bold">
          {t("title")}
        </div>
        <Image
          src={imageSrc}
          width={180}
          height={180}
          alt=""
          className="mx-auto rounded-2xl md:my-4"
        />

        <div className="grid grid-cols-2 py-4 gap-2 content-center items-center justify-center px-2 w-full md:w-auto">
          {session.options.map((o: string) => {
            return (
              <button
                className="p-2 w-full hover:opacity-70 hover:cursor-pointer select-none text-center"
                key={o}
                onClick={() => {
                  actionHandler(o);
                }}
              >
                <h2 className="bg-slate-100 text-slate-800 px-10 md:px-12 py-8 md:py-10 text-3xl md:text-5xl font-bold rounded-2xl text-center border-2 border-slate-800">
                  {o}
                </h2>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
