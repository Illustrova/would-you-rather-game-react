import React from "react";
import PropTypes from "prop-types";

function Tabs(props) {
	const { tabNames, activeTab, setActiveTab } = props;
	return (
		<div className="tabs is-centered">
			<ul>
				{tabNames.map((tab, index) => (
					<li
						key={index}
						data-index={index}
						onClick={setActiveTab}
						onKeyDown={(e) => e.key === "Enter" && setActiveTab(e)}
						className={tab === tabNames[activeTab] ? "is-active" : ""}
						role="tab"
						tabIndex="0"
						aria-selected={tab === tabNames[activeTab]}
						aria-controls={`tab_${index}`}>
						<a href="##">{tab}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
Tabs.propTypes = {
	tabNames: PropTypes.array.isRequired,
	activeTab: PropTypes.number,
};

Tabs.defaultProps = {
	activeTab: 0,
};

export default Tabs;
