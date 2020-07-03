import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				authedUser ? (
					<Component {...rest} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							isRelativePath: true,
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

// pulls state from auth reducer
const mapStateToProps = (state) => {
	return {
		authedUser: state.authedUser || null,
	};
};
PrivateRoute.propTypes = {
	authedUser: PropTypes.string,
};
PrivateRoute.defaultProps = {
	authedUser: null,
};

export default connect(mapStateToProps)(PrivateRoute);
