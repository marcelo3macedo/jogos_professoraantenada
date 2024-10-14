export interface StoreState {
  name: string;
  points: number;
  profile: string;
  session: any | null;
  activeIndex: number;
  validated: boolean;
  isCorrect: boolean;
  correctAnswers: number;
  setName: (name: string) => void;
  setPoints: (points: number) => void;
  setProfile: (profile: string) => void;
  setSession: (session: any) => void;
  setActiveIndex: (index: number) => void;
  setValidated: (validated: boolean) => void;
  setIsCorrect: (isCorrect: boolean) => void;
  setCorrectAnswers: (correctAnswers: number) => void;
}
