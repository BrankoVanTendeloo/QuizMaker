import quiz from "./quiz/test-quiz.json";
import type { Quiz } from "./quiz/types";

const testQuiz: Quiz = quiz as Quiz;

function App() {
  const pointValues =
    testQuiz.categories[0]?.questions.map((_, index) => (index + 1) * 100) ??
    [];

  return (
    <div>
      <h1>{testQuiz.title}</h1>

      <table>
        <thead>
          <tr>
            {testQuiz.categories.map((category) => (
              <th key={category.name}>{category.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {pointValues.map((points, rowIndex) => (
            <tr key={points}>
              {testQuiz.categories.map((category) => {
                const question = category.questions[rowIndex];

                return <td key={question?.id}>{question ? points : ""}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
