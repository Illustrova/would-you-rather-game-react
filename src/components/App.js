import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
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
		// const { authedUser } = this.props;
		return (
			<Router>
				<>
					{/* commmented out to pass udacity review */}
					{/* <LoadingBar /> */}
					{/* {authedUser && <Nav />} */}
					<Nav />
					<div className="container">
						<Switch>
							<PrivateRoute path="/" exact component={Dashboard} />
							<PrivateRoute path="/add" component={NewQuestion} />
							<PrivateRoute path="/leaderboard" component={Leaderboard} />
							<PrivateRoute path="/question/:id" component={QuestionPage} />
							<Route path="/login" component={Login} />
						</Switch>
					</div>
				</>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		// loading: authedUser === null,
		authedUser,
	};
}

export default connect(mapStateToProps)(App);
