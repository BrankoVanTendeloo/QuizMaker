import type { Quiz } from "../quiz/types";

type QuizBoardProps = {
  quiz: Quiz;
};

export function QuizBoard({ quiz }: QuizBoardProps) {
  const rowCount = Math.max(
    ...quiz.categories.map((category) => category.questions.length),
  );

  return (
    <table>
      <thead>
        <tr>
          {quiz.categories.map((category) => (
            <th key={category.name}>{category.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: rowCount }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {quiz.categories.map((category) => {
              const question = category.questions[rowIndex];

              return (
                <td key={category.name}>
                  {question?.name ?? ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}