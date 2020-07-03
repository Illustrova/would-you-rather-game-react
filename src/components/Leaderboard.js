/* eslint-disable global-require */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Leaderboard(props) {
	const { leaders } = props;
	return (
		<table className="table is-fullwidth is-hoverable">
			<thead>
				<tr>
					<th>#</th>
					<th colSpan="2">User</th>
					<th>Answers</th>
					<th>New Questions</th>
					<th>Total Rating</th>
				</tr>
			</thead>
			<tbody>
				{leaders.map((user, index) => (
					<tr key={user.id}>
						<th>{index + 1}</th>
						<td>
							<figure className="image is-48x48">
								<img
									src={
										user.avatarURL || require("../images/anonymous_avatar.png")
									}
									alt={`${user.name}_avatar`}
									className="is-rounded has-background-light"
								/>
							</figure>
						</td>
						<td>{user.name}</td>
						<td>{user.answers}</td>
						<td>{user.questions}</td>
						<td>
							<div className="tag is-success is-medium">{user.rating}</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

function mapStateToProps({ users }) {
	const leaders = Object.values(users)
		.map((user) => ({
			id: user.id,
			name: user.name,
			avatarURL: user.avatarURL,
			answers: Object.keys(user.answers).length,
			questions: user.questions.length,
			rating: Object.keys(user.answers).length + user.questions.length,
		}))
		.sort((a, b) => b.rating - a.rating);

	return {
		leaders,
	};
}

Leaderboard.propTypes = {
	leaders: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			avatarURL: PropTypes.string,
			answers: PropTypes.number.isRequired,
			questions: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
		})
	).isRequired,
};
export default connect(mapStateToProps)(Leaderboard);
