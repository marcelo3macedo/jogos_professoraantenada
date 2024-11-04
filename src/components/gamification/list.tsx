"use client";
import useTrophies from "@/hooks/useTrophies";
import Trophy from "./trophy";

export default function Trophies() {
  const { checkUserTrophies } = useTrophies();
  const trophies = checkUserTrophies();

  return (
    <div className="grid grid-cols-1 gap-8 mt-4 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
      {trophies.map((t) => (
        <Trophy key={t.id} trophy={t} />
      ))}
    </div>
  );
}
