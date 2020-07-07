/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingBar from "react-redux-loading-bar";

import { login } from "../actions/authedUser";

const CHARACTERS = ["Chip", "Dale", "Monty", "Gadget"];

class Login extends Component {
	state = {
		userSelected: null,
	};

	handleChange = (e) => {
		const userSelected = e.target.value;

		this.setState(() => ({
			userSelected,
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { userSelected } = this.state;
		const { dispatch } = this.props;

		return (
			dispatch(login(userSelected))
				.then(this.onSuccessLogin())
				// eslint-disable-next-line no-console
				.catch((err) => console.error(err))
		);
	};

	onSuccessLogin = () => {
		const { history, location } = this.props;
		if (location.state && location.state.from) {
			history.push(location.state.from);
		} else {
			history.push("/");
		}
	};

	render() {
		const { authedUser } = this.props;
		const { userSelected } = this.state;

		if (authedUser) {
			return <Redirect to="/" />;
		}
		return (
			<div className="column is-4 is-offset-4">
				<LoadingBar />
				<form className="box is-fullwidth px-5" onSubmit={this.handleSubmit}>
					<div className="is-stacked-column items-center">
						{CHARACTERS.map((char) => (
							<div key={char} className="control mx-6 my-2">
								<input
									id={`radio-avatar-${char}`}
									type="radio"
									value={char.toLowerCase()}
									checked={userSelected === char.toLowerCase()}
									onChange={this.handleChange}
								/>
								<label
									className="radio is-rounded"
									htmlFor={`radio-avatar-${char}`}>
									<figure className="image is-128x128">
										<img
											src={require(`../images/${char.toLowerCase()}_avatar_150.png`)}
											alt={`avatar ${char}`}
											className="is-rounded"
										/>
									</figure>
								</label>
								<h3 className="radio-title has-text-centered">{char}</h3>
							</div>
						))}
					</div>
					<button
						className="button is-primary is-fullwidth is-medium"
						type="submit"
						disabled={!userSelected}>
						That&apos;s me
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ authedUser }) => ({
	authedUser,
});

export default withRouter(connect(mapStateToProps)(Login));

Login.propTypes = {
	authedUser: PropTypes.string,
};
Login.defaultProps = {
	authedUser: null,
};
