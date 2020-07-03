/* eslint-disable no-case-declarations */
import {
	RECEIVE_QUESTIONS,
	SAVE_QUESTION_ANSWER,
	SAVE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case SAVE_QUESTION:
			const { question } = action;
			return {
				...state,
				[question.id]: question,
			};
		case SAVE_QUESTION_ANSWER:
			const { id, answer, authedUser } = action;
			return {
				...state,
				[id]: {
					...state[id],
					[answer]: {
						...state[id][answer],
						votes: state[id][answer].votes.concat(authedUser),
					},
				},
			};
		default:
			return state;
	}
}
