import React from "react";
import PropTypes from "prop-types";

function QuestionResults(props) {
	const {
		optionOneText,
		optionTwoText,
		optionOneVotes,
		optionTwoVotes,
		userAnswer,
	} = props;
	return (
		<div className="content panel">
			<div
				className={`panel-block is-vertical ${
					userAnswer === "optionOne" && "has-background-primary-light"
				}`}>
				<div className="has-text-centered has-text-grey is-size-6 is-italic">{`${optionOneVotes} votes out of ${
					optionOneVotes + optionTwoVotes
				}`}</div>
				<progress
					className={`progress is-medium ${
						userAnswer === "optionOne" && "is-primary"
					}`}
					max="100"
					value={(optionOneVotes / (optionOneVotes + optionTwoVotes)) * 100}
				/>
				<div className=" has-text-centered">{`${optionOneText}`}</div>
			</div>
			<div
				className={`panel-block is-vertical ${
					userAnswer === "optionTwo" && "has-background-primary-light"
				}`}>
				{" "}
				<div className="has-text-centered has-text-grey is-size-6 is-italic">{`${optionTwoVotes} votes out of ${
					optionOneVotes + optionTwoVotes
				}`}</div>
				<progress
					className={`progress is-medium ${
						userAnswer === "optionTwo" && "is-primary"
					}`}
					max="100"
					value={(optionTwoVotes / (optionOneVotes + optionTwoVotes)) * 100}
				/>
				<div className=" has-text-centered">{`${optionTwoText}`}</div>
			</div>
		</div>
	);
}

QuestionResults.propTypes = {
	optionOneText: PropTypes.string.isRequired,
	optionTwoText: PropTypes.string.isRequired,
	optionOneVotes: PropTypes.number.isRequired,
	optionTwoVotes: PropTypes.number.isRequired,
	userAnswer: PropTypes.oneOf(["optionOne", "optionTwo"]).isRequired,
};
export default QuestionResults;
