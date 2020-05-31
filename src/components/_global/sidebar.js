import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import moment from "moment";
import Logo from "./logo";

const Sidebar = ({ active, posts }) => (
    <div className={`main-menu off-canvas-sidebar ${active ? "active" : ""}`}>
        <div className="content-container p-sticky">
            <Link to="/" className="brand">
                <div className="columns col-gapless">
                    <div className="column col-6 col-mx-auto">
                        <Logo />
                    </div>
                </div>
            </Link>

            <div className="nav">
                <Link to="/" className="nav-item" activeClassName="active">
                    Home
                </Link>
                <Link
                    to="/tech-stack"
                    className="nav-item"
                    activeClassName="active"
                >
                    Tech Stack
                </Link>
                <Link
                    to="/experience"
                    className="nav-item"
                    activeClassName="active"
                >
                    Experience
                </Link>
                <Link
                    to="/contact"
                    className="nav-item"
                    activeClassName="active"
                >
                    Reach Out
                </Link>
                <Link to="/blog" className="nav-item" activeClassName="active">
                    Blog
                </Link>
            </div>

            <div className="divider text-center" data-content="Download" />
            <a
                className="resume btn btn-primary btn-block"
                href={"resume.pdf"}
                download="resume.pdf"
            >
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

            <div className="divider text-center" data-content="Latest Posts" />

            <div className="latest-blog">
                {posts.map(({ node: post }) => {
                    return (
                        <Link
                            to={post.frontmatter.path}
                            key={post.frontmatter.path}
                        >
                            <div className="link-container">
                                <div className="link-title">
                                    {post.frontmatter.title}
                                </div>
                                <small className="link-date">
                                    {moment(post.frontmatter.date).fromNow()}
                                </small>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>
);

Sidebar.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default Sidebar;
