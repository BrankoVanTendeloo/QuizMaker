import { useState } from "react";
import { QuizBoard } from "./components/quizboard";
import { quizzes } from "./quiz/loadquizzes";
import type { Quiz } from "./quiz/types";
import { QuizSelect } from "./screens/quizselect";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  if (selectedQuiz) {
    return <QuizBoard quiz={selectedQuiz} />;
  }

  return <QuizSelect quizzes={quizzes} onSelect={setSelectedQuiz} />;
}

export default App;
