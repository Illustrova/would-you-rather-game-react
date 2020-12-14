/* eslint-disable global-require */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { relativeTime } from "../utils/helpers";
import QuestionPoll from "./QuestionPoll";
import QuestionResults from "./QuestionResults";
import { saveQuestionAnswer } from "../actions/questions";

class QuestionContainer extends Component {
	constructor(props) {
		super(props);
		this.onAnswerSubmit = this.onAnswerSubmit.bind(this);
	}

	onAnswerSubmit(answer) {
		const { id, authedUser } = this.props;
		const { dispatch } = this.props;
		dispatch(saveQuestionAnswer(authedUser, id, answer));
	}

	render() {
		const {
			id,
			question,
			authedUserAnswer,
			showResults,
			authorData,
			isTeaser,
		} = this.props;
		const { optionOne, optionTwo } = question;
		const timeCreated = relativeTime(new Date(question.timestamp));
		return (
			<div className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-narrow">
				<div className="card">
					<header className="card-header">
						<h3 className="card-header-title has-text-white has-background-primary">
							Would you rather...?{showResults}
						</h3>
					</header>
					<div className="card-content has-flex-grow">
						{showResults ? (
							<QuestionResults
								id={id}
								optionOneText={optionOne.text}
								optionTwoText={optionTwo.text}
								optionOneVotes={optionOne.votes.length}
								optionTwoVotes={optionTwo.votes.length}
								userAnswer={authedUserAnswer}
							/>
						) : (
							<QuestionPoll
								id={id}
								optionOneText={optionOne.text}
								optionTwoText={optionTwo.text}
								onAnswerSubmit={this.onAnswerSubmit}
								isTeaser={isTeaser}
							/>
						)}
					</div>
					<footer className="card-footer">
						{isTeaser && (
							<div className="card-footer-item">
								<Link to={`/question/${id}`}>View</Link>
							</div>
						)}
						<div className="card-footer-item media has-flex-grow">
							<figure className="media-left image is-48x48">
								<img
									src={
										authorData.avatarURL ||
										require("../images/anonymous_avatar.png")
									}
									alt={`${authorData.name}_avatar`}
									className="is-rounded has-background-light"
								/>
							</figure>
							<div className="media-content">
								<p className="is-size-7 has-text-grey is-italic has-text-right">{`Asked by ${authorData.name}`}</p>
								<p className="is-size-7 has-text-grey is-italic has-text-right">
									{timeCreated}
								</p>
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];
	const authedUserAnswer = users[authedUser].answers[id];
	const authorData = {
		name: users[question.author].name,
		avatarURL: users[question.author].avatarURL,
	};
	const showResults = id in users[authedUser].answers; // commented out to pass Udacity review
	return {
		id,
		question,
		authedUser,
		authedUserAnswer,
		showResults,
		authorData,
	};
}

QuestionContainer.propTypes = {
	id: PropTypes.string.isRequired,
	authedUserAnswer: PropTypes.oneOf(["optionOne", "optionTwo"]),
	question: PropTypes.object.isRequired,
	showResults: PropTypes.bool,
	authorData: PropTypes.shape({
		name: PropTypes.string,
		avatarURL: PropTypes.string,
	}).isRequired,
};

QuestionContainer.defaultProps = {
	showResults: false,
	authedUserAnswer: undefined,
};

export default connect(mapStateToProps)(QuestionContainer);
