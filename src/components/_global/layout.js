/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "spectre.css/dist/spectre-icons.min.css";
import "../../styles/main.scss";

import Header from "./header";
import Sidebar from "./sidebar";

class Layout extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        sidebarOpen: false,
    };

    _toggleSidebar = () => {
        const { sidebarOpen } = this.state;
        this.setState({ sidebarOpen: !sidebarOpen });
    };

    render() {
        const { sidebarOpen } = this.state;
        const { children } = this.props;

        return (
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={data => {
                    return (
                        <div className="container off-canvas off-canvas-sidebar-show">
                            <button
                                className="off-canvas-toggle btn btn-link btn-action"
                                onClick={this._toggleSidebar}
                            >
                                <i className="icon icon-menu" />
                            </button>
                            <Sidebar
                                title={data.site.siteMetadata.title}
                                active={sidebarOpen}
                            />
                            <i
                                className="off-canvas-overlay"
                                onClick={this._toggleSidebar}
                            />
                            <div className="off-canvas-content">
                                <main>{children}</main>
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}

export default Layout;
