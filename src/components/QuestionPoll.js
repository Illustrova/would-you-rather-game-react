import React, { Component } from "react";
import PropTypes from "prop-types";

class QuestionPoll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			optionSelected: null,
		};
		this.onValueChange = this.onValueChange.bind(this);
	}

	onValueChange = (e) => {
		this.setState({
			optionSelected: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAnswerSubmit(this.state.optionSelected);
		this.setState({
			optionSelected: null,
		});
	};

	render() {
		const { id, optionOneText, optionTwoText, isTeaser } = this.props;
		const { optionSelected } = this.state;
		return (
			<div className="content has-text-centered is-fullheight">
				<form
					className="is-stacked-column is-fullheight"
					onSubmit={this.onSubmit}>
					<input
						id={`${id}_option1`}
						name={id}
						value="optionOne"
						type="radio"
						checked={optionSelected === "optionOne"}
						onChange={this.onValueChange}
						disabled={isTeaser}
					/>
					<label
						htmlFor={`${id}_option1`}
						className="panel-block has-text-centered py-3">
						{`${optionOneText}`}
					</label>
					<input
						id={`${id}_option2`}
						name={id}
						value="optionTwo"
						type="radio"
						checked={optionSelected === "optionTwo"}
						onChange={this.onValueChange}
						disabled={isTeaser}
					/>
					<label
						htmlFor={`${id}_option2`}
						className="panel-block has-text-centered py-3">
						{`${optionTwoText}`}
					</label>
					<div className="mt-auto">
						{!isTeaser && (
							<button
								className="button is-primary mt-3 mt-auto"
								type="submit"
								disabled={!optionSelected}>
								Submit
							</button>
						)}
					</div>
				</form>
			</div>
		);
	}
}
QuestionPoll.propTypes = {
	optionOneText: PropTypes.string.isRequired,
	optionTwoText: PropTypes.string.isRequired,
};
export default QuestionPoll;
