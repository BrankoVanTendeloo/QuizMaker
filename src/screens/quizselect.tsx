import type { Quiz } from "../quiz/types";

type QuizSelectProps = {
  quizzes: Quiz[];
  onSelect: (quiz: Quiz) => void;
};

export function QuizSelect({ quizzes, onSelect }: QuizSelectProps) {
  return (
    <div>
      <h1>Select a quiz</h1>

      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.title}>
            <button type="button" onClick={() => onSelect(quiz)}>
              {quiz.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
