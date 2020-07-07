import React from "react";
import { withRouter } from "react-router-dom";
import QuestionContainer from "./QuestionContainer";

function QuestionPage(props) {
	const { id } = props.match.params;

	return (
		<div className="columns is-centered is-vcentered">
			<QuestionContainer id={id} isTeaser={false} />
		</div>
	);
}

export default withRouter(QuestionPage);
