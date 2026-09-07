import type { Quiz } from "./types";

const quizFiles = import.meta.glob("../quizzes/*.json", {
	eager: true,
	import: "default",
});

export const quizzes = Object.values(quizFiles) as Quiz[];