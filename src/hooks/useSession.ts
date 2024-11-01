"use client";
import { useRouter } from "next/navigation";
import { generate } from "@/helpers/sessionHelper";
import { StoreState } from "@/interfaces/store";
import useStore from "@/store/useStore";
import { PlaySound } from "@/helpers/soundHelper";

const useSession = () => {
  const router = useRouter();
  const {
    setSession,
    setActiveIndex,
    setValidated,
    setCorrectAnswers,
    setIsCorrect,
    session,
    activeIndex,
    correctAnswers,
    validated,
    isCorrect,
  } = useStore((state: StoreState) => state);

  async function handleActivityStart(slug: string) {
    const session = await generate("level1", slug);
    setSession(session);
    setActiveIndex(0);
    setCorrectAnswers(0);
    setValidated(false);
    router.push("/atividades/atividade");
  }

  function selectAnswer(isCorrect: boolean) {
    if (isCorrect) {
      const newCorrectAnswers = correctAnswers + 1;
      setCorrectAnswers(newCorrectAnswers);
    }

    const soundUrl = isCorrect
      ? "/jogos/audios/correct.mp3"
      : "/jogos/audios/incorrect.mp3";
    PlaySound(soundUrl);

    const newActiveIndex = activeIndex + 1;
    setActiveIndex(newActiveIndex);
    setIsCorrect(isCorrect);
    setValidated(true);

    setTimeout(() => {
      setValidated(false);
    }, 5000);
  }

  return {
    handleActivityStart,
    selectAnswer,
    session,
    activeIndex,
    validated,
    isCorrect,
  };
};

export default useSession;
