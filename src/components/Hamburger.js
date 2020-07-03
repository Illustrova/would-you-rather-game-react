import React from "react";
import PropTypes from "prop-types";

const Hamburger = (props) => {
	const { isActive, toggleMenu } = props;
	return (
		<button
			type="button"
			aria-label="menu"
			aria-expanded={isActive}
			data-target="navbarBasicExample"
			onClick={toggleMenu}
			className={`navbar-burger burger ${isActive ? "is-active" : ""}`}>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
	);
};

Hamburger.propTypes = {
	isActive: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};

export default Hamburger;
