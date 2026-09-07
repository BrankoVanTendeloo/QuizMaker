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
						<a
							href="#"
							onClick={(event) => {
								event.preventDefault();
								onSelect(quiz);
							}}
						>
							{quiz.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}