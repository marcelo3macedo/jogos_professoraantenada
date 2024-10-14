"use client";
import Image from "next/image";
import { getCardsSrc } from "@/helpers/imageLoader";
import BackAction from "../backAction";
import useStore from "@/store/useStore";
import ActiveQuestion from "../activeQuestion";

export default function SelectImage({ question, slug, word, options }: any) {
  const {
    activeIndex,
    correctAnswers,
    setCorrectAnswers,
    setActiveIndex,
    setIsCorrect,
    setValidated,
  } = useStore((state: any) => ({
    activeIndex: state.activeIndex,
    correctAnswers: state.correctAnswers,
    setActiveIndex: state.setActiveIndex,
    setCorrectAnswers: state.setCorrectAnswers,
    setIsCorrect: state.setIsCorrect,
    setValidated: state.setValidated,
  }));

  function actionHandler(selected: string) {
    const isCorrect = selected === slug;

    if (isCorrect) {
      const newCorrectAnswers = correctAnswers + 1;
      setCorrectAnswers(newCorrectAnswers);
    }

    const newActiveIndex = activeIndex + 1;
    setActiveIndex(newActiveIndex);
    setIsCorrect(isCorrect);
    setValidated(true);

    setTimeout(() => {
      setValidated(false);
    }, 5000);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <BackAction />
      <div className="flex flex-col flex-1 justify-center items-center w-full pt-2 md:pt-14">
        <ActiveQuestion actual={question.actual} total={question.total} />
        <div className="text-slate-800 text-md md:text-xl text-center py-4 font-bold">
          Selecione a imagem referente a palavra
        </div>
        <h2 className="bg-slate-100 text-slate-800 border-2 border-slate-800 px-12 py-6 text-3xl md:text-5xl font-bold rounded-2xl text-center">
          {word}
        </h2>

        <div className="grid grid-cols-2 py-4 gap-2 content-center items-center justify-center">
          {options.map((o: string) => {
            return (
              <div
                className="p-2 hover:opacity-70 hover:cursor-pointer select-none"
                key={o}
                onClick={() => {
                  actionHandler(o);
                }}
              >
                <Image
                  src={getCardsSrc(o)}
                  width={150}
                  height={150}
                  alt=""
                  className="mx-auto w-32 md:w-52 rounded-2xl my-2 md:my-4"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
