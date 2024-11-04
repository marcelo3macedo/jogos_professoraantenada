"use client";
import correct from "@/assets/animations/correct.json";
import error from "@/assets/animations/error.json";
import LottieAnimation from "../animations/lottie";

export default function Validation({
  isCorrect,
}: {
  readonly isCorrect: boolean;
}) {
  const animation = isCorrect ? correct : error;
  const message = isCorrect
    ? "Parabéns! Você acertou"
    : "Que pena, você errou!";

  return (
    <div className="w-full h-svh flex flex-col items-center justify-center">
      <LottieAnimation animationData={animation} />
      <h2 className="mt-4 font-bold text-2xl text-slate-600">{message}</h2>
    </div>
  );
}
