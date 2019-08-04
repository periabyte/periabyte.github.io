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
            <Link to="/" className="nav-item" activeClassName="active" >
                Home
            </Link>
            <Link to="/tech-stack" className="nav-item" activeClassName="active">
                Tech Stack
            </Link>
            <Link to="/experience" className="nav-item" activeClassName="active">
                Experience
            </Link>
            <Link to="/contact" className="nav-item" activeClassName="active">
                Reach Out
            </Link>
            <Link to="/blog" className="nav-item" activeClassName="active">
                Blog
            </Link>
        </div>
        <div className="divider text-center" data-content="Download" />
        <a className="resume btn btn-primary btn-block" href={'resume.pdf'} download="resume.pdf">
            <i className="fas fa-file-download" />
            Resume
        </a>
        <div className="divider text-center" data-content="social media" />
        <div className="social-media">
            <a href="https://m.me/periabytes" target="_blank">
                <i className="fab fa-facebook-messenger fa-2x" />
            </a>
            <a href="https://facebook.com/periabytes" target="_blank">  
                <i className="fab fa-facebook-square fa-2x" />
            </a>
            <a href="https://twitter.com/PeriaByte" target="_blank">
                <i className="fab fa-twitter fa-2x" />
            </a>

            <a href="https://github.com/periabyte" target="_blank">
                <i className="fab fa-github-alt fa-2x" />
            </a>

            <a href="https://www.linkedin.com/in/periabyte" target="_blank">
                <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="https://www.twitch.tv/periabyte" target="_blank">
                <i className="fab fa-twitch fa-2x" />
            </a>
        </div>
    </div>
);

Sidebar.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default Sidebar;
