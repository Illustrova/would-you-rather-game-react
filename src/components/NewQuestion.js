import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import { createQuestion } from "../actions/questions";

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			invalid: [],
		};
	}

	onSubmit(e) {
		e.preventDefault();
		const { authedUser, dispatch, history } = this.props;
		const question = {
			optionOneText: this.optionOneRef.value,
			optionTwoText: this.optionTwoRef.value,
			author: authedUser,
		};
		if (this.validate(question)) {
			dispatch(createQuestion(question))
				.then(() => history.push("/"))
				// eslint-disable-next-line no-console
				.catch((err) => console.error(err));
		}
	}

	validate(question) {
		const invalid = []; // array of all invalid fields
		Object.keys(question).map(
			(key) => question[key].length < 1 && invalid.push(key)
		);
		if (invalid.length > 0) {
			this.setState({
				invalid,
			});
			return false;
		}
		return true;
	}

	render() {
		const { invalid } = this.state;

		return (
			<div className="columns is-multiline is-centered">
				<div className="column is-one-third-widescreen is-half-desktop">
					<LoadingBar />
					<div className="card">
						<header className="card-header">
							<h3 className="card-header-title has-text-white has-background-primary">
								Create new question
							</h3>
						</header>
						<form className="card-content" onSubmit={this.onSubmit}>
							<div className="field">
								<label htmlFor="optionOne_input">
									Enter first option:
									<div className="control">
										<input
											className={
												invalid.includes("optionOne")
													? "input is-danger"
													: "input"
											}
											id="optionOne_input"
											type="text"
											placeholder="e.g get up early"
											ref={(optionOne) => (this.optionOneRef = optionOne)}
										/>
									</div>
									{invalid === "optionTwo" ? (
										<p className="help is-danger">validation text</p>
									) : (
										""
									)}{" "}
								</label>
							</div>
							<div className="field">
								<label htmlFor="optionTwo_input">
									Enter another option:
									<div className="control">
										<input
											className={
												invalid.includes("optionTwo")
													? "input is-danger"
													: "input"
											}
											id="optionTwo_input"
											type="text"
											placeholder="e.g stay up late"
											ref={(optionTwo) => (this.optionTwoRef = optionTwo)}
										/>
									</div>
									{invalid === "optionTwo" ? (
										<p className="help is-danger">validation text</p>
									) : (
										""
									)}
								</label>
							</div>
							<div className="control">
								<button className="button is-primary my-3" type="submit">
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser,
	};
}

NewQuestion.propTypes = {
	authedUser: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(NewQuestion));
