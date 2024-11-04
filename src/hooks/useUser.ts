"use client";
import { StoreState } from "@/interfaces/store";
import useStore from "@/store/useStore";
import trophies from "@/assets/gamification/trophies.json";

const useUser = () => {
  const { points } = useStore((state: StoreState) => state);

  function getHighestUnlockedTrophy() {
    const unlockedTrophies = trophies.filter(
      (trophy) => points >= trophy.requiredPoints,
    );

    if (unlockedTrophies.length === 0) {
      return null;
    }

    return unlockedTrophies.reduce(
      (highest, trophy) => {
        return trophy.requiredPoints > highest.requiredPoints
          ? trophy
          : highest;
      },
      { requiredPoints: 0 },
    );
  }

  return {
    getHighestUnlockedTrophy,
    points,
  };
};

export default useUser;
