"use client";
import { StoreState } from "@/interfaces/store";
import useStore from "@/store/useStore";
import trophies from "@/assets/gamification/trophies.json";

const useTrophies = () => {
  const { points } = useStore((state: StoreState) => state);

  function checkUserTrophies() {
    return trophies.map((trophy) => ({
      ...trophy,
      unlocked: points >= trophy.requiredPoints,
    }));
  }

  return {
    checkUserTrophies,
  };
};

export default useTrophies;
