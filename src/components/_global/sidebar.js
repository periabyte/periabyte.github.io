import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Logo from "./logo";

const Sidebar = ({ active, title }) => (
    <div className={`main-menu off-canvas-sidebar ${active ? "active" : ""}`}>
        <Link to="/" className="brand">
            <div className="columns col-gapless">
                <div className="column col-6 col-mx-auto">
                    <Logo />
                </div>
                {/* <div className="column col-9 siteTitle">
                    <h4 className="text-primary">{title.toUpperCase()}</h4>
                </div> */}
            </div>
        </Link>
        <div className="nav">
            <Link to="/" className="nav-item" activeClassName="active">
                Home
            </Link>
            <Link to="/blog" className="nav-item" activeClassName="active">
                Blog
            </Link>
            <Link
                to="/work-history"
                className="nav-item"
                activeClassName="active"
            >
                Work History
            </Link>
        </div>
    </div>
);

Sidebar.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default Sidebar;
