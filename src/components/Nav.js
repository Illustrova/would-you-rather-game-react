import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { logout } from "../actions/authedUser";

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuExpanded: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	componentDidMount() {
		// Bind ESC key handler.
		window.onkeydown = this.listenForClose.bind(this);
	}

	toggleMenu = () => {
		const { menuExpanded } = this.state;
		this.setState({
			menuExpanded: !menuExpanded,
		});
	};

	onLogout = () => {
		const { dispatch } = this.props;
		return dispatch(logout());
	};

	listenForClose(e) {
		const event = e || window.event;
		const { menuExpanded } = this.state;
		// Close on ESC, unless disabled
		if (menuExpanded && (event.key === "Escape" || event.keyCode === 27)) {
			this.toggleMenu();
		}
	}

	render() {
		const { currentUser } = this.props;
		const { menuExpanded } = this.state;

		return (
			<nav
				className="navbar is-spaced"
				role="navigation"
				aria-label="main navigation">
				<div className="navbar-brand">
					<Link
						className="navbar-item is-size-3 has-text-weight-bold is-primary	"
						to="/">
						WYR
					</Link>
					<Hamburger toggleMenu={this.toggleMenu} isActive={menuExpanded} />
				</div>
				<div className={`navbar-menu ${menuExpanded ? "is-active" : ""}`}>
					<div className="navbar-start">
						<Link to="/add" className="navbar-item">
							Ask a question
						</Link>
						<Link to="/leaderboard" className="navbar-item">
							Leaderboard
						</Link>
					</div>
					<div className="navbar-end">
						<div className="navbar-item has-dropdown is-hoverable">
							<div className="navbar-link">
								<div className="navbar-item">Hello, {currentUser.name}</div>
								<img
									className="is-rounded"
									src={currentUser.avatarURL}
									alt={`avatar ${currentUser.name}`}
								/>
							</div>
							<div className="navbar-dropdown">
								<a
									role="button"
									onClick={this.onLogout}
									className="navbar-item">
									Logout
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ authedUser, users }) => ({
	currentUser: users[authedUser],
});

Nav.propTypes = {
	currentUser: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Nav);
