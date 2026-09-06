export type MultipleChoiceQuestion = {
  id: string;
  name: string;
  type: "multiple-choice";
  prompt: string;
  choices: string[];
  correctAnswer: string;
};

export type QuizQuestion = MultipleChoiceQuestion;

export type QuizCategory = {
  name: string;
  questions: QuizQuestion[];
};

export type Quiz = {
  title: string;
  categories: QuizCategory[];
};
