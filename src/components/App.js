import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Login from "./Login";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}

	render() {
		const { authedUser } = this.props;
		return (
			<Router>
				<>
					<LoadingBar />
					<div className="container">
						{authedUser && <Nav />}
						<div className="container">
							<Switch>
								<PrivateRoute path="/" exact component={Dashboard} />
								<PrivateRoute path="/add" component={NewQuestion} />
								<PrivateRoute path="/leaderboard" component={Leaderboard} />
								<PrivateRoute path="/question/:id" component={QuestionPage} />
								<Route path="/login" component={Login} />
							</Switch>
						</div>
					</div>
				</>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null,
		authedUser,
	};
}

export default connect(mapStateToProps)(App);
