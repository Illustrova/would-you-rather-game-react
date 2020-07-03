import { saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}
export function saveQuestionAnswer(authedUser, id, answer) {
	return {
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		id,
		answer,
	};
}
export function createQuestion({ optionOneText, optionTwoText, author }) {
	return (dispatch) =>
		saveQuestion({ optionOneText, optionTwoText, author }).then((question) =>
			dispatch({
				type: SAVE_QUESTION,
				question,
			})
		);
}
