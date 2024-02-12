export type TQuestion = {
  question: { id: number; title: string; text: string },
  onClick: () => void;
  isOpen: boolean;
};
