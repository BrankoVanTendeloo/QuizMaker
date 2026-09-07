import { QuizBoard } from "./components/quizboard";
import quiz from "./quiz/test-quiz.json";
import type { Quiz } from "./quiz/types";

const testQuiz = quiz as Quiz;

function App() {
  return (
    <div>
      <h1>{testQuiz.title}</h1>

      <QuizBoard quiz={testQuiz} />
    </div>
  );
}

export default App;
