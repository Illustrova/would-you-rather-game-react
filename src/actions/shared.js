import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

// eslint-disable-next-line import/prefer-default-export
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
		});
	};
}
