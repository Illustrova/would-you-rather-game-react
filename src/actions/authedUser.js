export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

export function login(id) {
	return (dispatch) =>
		Promise.resolve().then(
			dispatch({
				type: LOG_IN_USER,
				id,
			})
		);
}
export function logout() {
	return {
		type: LOG_OUT_USER,
	};
}
