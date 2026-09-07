import { useState } from "react";
import quiz from "./quiz/test-quiz.json";
import type { Quiz } from "./quiz/types";
import { QuizBoard } from "./components/quizboard";
import { QuizSelect } from "./screens/quizselect";

const testQuiz = quiz as Quiz;

function App() {
	const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

	if (selectedQuiz) {
		return <QuizBoard quiz={selectedQuiz} />;
	}

	return (
		<QuizSelect
			quizzes={[testQuiz]}
			onSelect={setSelectedQuiz}
		/>
	);
}

export default App;