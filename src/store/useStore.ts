import { StoreState } from "@/interfaces/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      name: "Pessoa",
      points: 0,
      profile: "student",
      session: null,
      activeIndex: 0,
      validated: false,
      isCorrect: false,
      correctAnswers: 0,
      setName: (name: any) => set({ name }),
      setPoints: (points: any) => set({ points }),
      setProfile: (profile: any) => set({ profile }),
      setSession: (session: any) => set({ session }),
      setActiveIndex: (activeIndex: any) => set({ activeIndex }),
      setValidated: (validated: any) => set({ validated }),
      setIsCorrect: (isCorrect: any) => set({ isCorrect }),
      setCorrectAnswers: (correctAnswers: any) => set({ correctAnswers }),
    }),
    {
      name: "zustand-store",
    },
  ),
);

export default useStore;
