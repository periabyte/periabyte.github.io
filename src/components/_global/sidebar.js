import React from "react";
import PropTypes from "prop-types";
import Logo from "./logo";

const Sidebar = ({ active, title }) => (
    <div className={`main-menu off-canvas-sidebar ${active ? "active" : ""}`}>
        <div className="columns col-gapless">
            <div className="column col-3">
                <Logo />
            </div>
            <div className="column col-9 siteTitle">
                <h4 className="text-primary">{title.toUpperCase()}</h4>
            </div>
        </div>
    </div>
);

Sidebar.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default Sidebar;
