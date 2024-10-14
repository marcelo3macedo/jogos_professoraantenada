"use client";
import Image from "next/image";
import { getFingerSrc } from "@/helpers/imageLoader";
import BackAction from "../backAction";
import ActiveQuestion from "../activeQuestion";
import { useTranslations } from "next-intl";
import useSession from "@/hooks/useSession";

export default function FingerContable({
  session,
  question,
}: {
  session: any;
  question: any;
}) {
  const t = useTranslations("activities.fingerContable");
  const { selectAnswer } = useSession();

  function actionHandler(selected: string) {
    const isCorrect = selected === session.response;
    selectAnswer(isCorrect);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <BackAction />
      <div className="flex flex-col flex-1 justify-center items-center w-full pt-4 md:pt-14">
        <ActiveQuestion actual={question.actual} total={question.total} />
        <div className="text-slate-800 text-xl text-center py-2 md:py-4 font-bold">
          {t("title")}
        </div>
        <div className="flex">
          <Image
            src={getFingerSrc(session.firstNumber)}
            width={150}
            height={150}
            alt=""
            className="w-32 md:w-auto mx-auto rounded-2xl my-4"
          />
          <h2 className=" text-pink-900 items-center justify-center flex text-7xl md:text-9xl font-bold mx-2 md:mx-4 rounded-2xl text-center">
            {session.operation}
          </h2>
          <Image
            src={getFingerSrc(session.secondNumber)}
            width={150}
            height={150}
            alt=""
            className="w-32 md:w-auto mx-auto rounded-2xl my-4"
          />
        </div>

        <div className="grid grid-cols-2 py-4 gap-2 content-center items-center justify-center">
          {session.options.map((o: string) => {
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
    </div>
  );
}
