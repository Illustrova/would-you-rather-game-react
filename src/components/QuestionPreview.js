import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function QuestionPreview(props) {
	const { optionOneText, optionTwoText, id } = props;
	return (
		<div className="card-content">
			<div className=" has-text-centered">{`${optionOneText},`}</div>
			<div className="is-size-4 has-text-centered has-text-weight-bold">or</div>
			<div className=" has-text-centered">{`${optionTwoText}?`}</div>
			<br />
			<Link to={`/question/${id}`} className="card-footer-item">
				Reply
			</Link>
		</div>
	);
}

QuestionPreview.propTypes = {
	optionOneText: PropTypes.string.isRequired,
	optionTwoText: PropTypes.string.isRequired,
};
export default QuestionPreview;
