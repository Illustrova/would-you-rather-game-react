import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "./Tabs";
import QuestionContainer from "./QuestionContainer";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0,
		};
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	setActiveTab = (e) => {
		this.setState({
			activeTab: parseFloat(e.currentTarget.dataset.index),
		});
	};

	render() {
		const { answeredQuestionsIds, nonAnsweredQuestionsIds } = this.props;
		const { activeTab } = this.state;

		return (
			<>
				<Tabs
					tabNames={["Not Answered", "Already answered"]}
					activeTab={activeTab}
					setActiveTab={this.setActiveTab}
				/>
				<div className="columns is-multiline">
					{activeTab === 0 &&
						(nonAnsweredQuestionsIds.length > 0 ? (
							nonAnsweredQuestionsIds.map((q) => {
								return <QuestionContainer id={q} key={q} isTeaser />;
							})
						) : (
							<div className="notification is-warning is-light column content-center">
								You don&apos;t have any questions to answer.&nbsp;
								<strong>
									<Link to="/add">Ask one yourself!</Link>
								</strong>
							</div>
						))}

					{activeTab === 1 &&
						(answeredQuestionsIds.length > 0 ? (
							answeredQuestionsIds.map((q) => (
								<QuestionContainer id={q} key={q} isTeaser />
							))
						) : (
							<div className="notification is-warning is-light column content-center">
								You didn&apos;t answer any question yet.
							</div>
						))}
				</div>
			</>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	const answeredIds = Object.keys(users[authedUser].answers);
	return {
		answeredQuestionsIds: answeredIds.sort((a, b) => b.timestamp - a.timestamp),
		nonAnsweredQuestionsIds: Object.keys(questions)
			.filter((q) => answeredIds.indexOf(q) === -1)
			.sort((a, b) => b.timestamp - a.timestamp),
	};
}

Dashboard.propTypes = {
	answeredQuestionsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
	nonAnsweredQuestionsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Dashboard);
