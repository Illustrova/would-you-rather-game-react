import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
// import { setAuthedUser } from '../actions/authedUser'

// eslint-disable-next-line import/prefer-default-export
export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			// dispatch(setAuthedUser(AUTHED_ID))
			dispatch(hideLoading());
		});
	};
}
