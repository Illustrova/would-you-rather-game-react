import React from "react";
import PropTypes from "prop-types";
import QuestionContainer from "./QuestionContainer";

function QuestionPage(props) {
	const { id } = props.match.params;

	return (
		<div className="columns is-centered is-vcentered">
			<QuestionContainer id={id} />
		</div>
	);
}

QuestionPage.propTypes = {
	id: PropTypes.string.isRequired,
};

export default QuestionPage;
