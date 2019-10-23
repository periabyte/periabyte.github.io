import React from "react";
import { Link } from "gatsby";

import Layout from "../components/_global/layout";
import Logo from "../components/_global/logo";
import SEO from "../components/_global/seo";
import profile from "../../assets/images/profile.jpg";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="hero hero-full bg-dark">
            <div className="hero-body">
                <img src={profile} className="s-circle profile-img" />
                <h1>Hi! I'm Paul!</h1>
                <p className="description">
                    A <strong>software developer</strong> who currently
                    specializes in <strong>web and mobile applications</strong>.
                    I enjoy learning <i>new technologies</i> and using it to
                    improve the quality of the products that I make.
                </p>
                <Link to="/about" className="btn btn-primary">
                    MORE ABOUT ME
                </Link>
            </div>
        </div>
        <div id="tech-stack" className="hero hero-full">
            <div className="hero-body">
                <h2 style={{ textTransform: "uppercase" }}>
                    WHAT'S IN MY TECH-STACK?
                </h2>
                <div className="my-tech">
                    <i alt="html" className="fab fa-5x fa-html5" />
                    <i alt="css" className="fab fa-5x fa-css3" />
                    <i alt="javascript" className="fab fa-5x fa-js" />
                    <i alt="node.js" className="fab fa-5x fa-node-js" />
                    <i alt="react.js" className="fab fa-5x fa-react" />
                    <i alt="git" className="fab fa-5x fa-git" />
                </div>
                <Link to="/tech-stack" className="btn btn-primary">
                    LEARN MORE
                </Link>
            </div>
        </div>
        <div className="hero hero-lg bg-dark">
            <div className="hero-body">
                <h2>Work Experience</h2>
                <div class="timeline">
                    <div className="timeline-item" id="timeline-example-1">
                        <div className="timeline-left">
                            <a
                                className="timeline-icon"
                                href="#timeline-example-1"
                            ></a>
                        </div>
                        <div className="timeline-content">
                            <div className="tile">
                                <p className="tile-subtitle">Present Day</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item" id="timeline-example-2">
                        <div className="timeline-left">
                            <a
                                className="timeline-icon icon-lg"
                                href="#timeline-example-2"
                            ></a>
                        </div>
                        <div className="timeline-content">
                            <div className="tile">
                                <p className="tile-subtitle">
                                    December 8, 2014
                                </p>
                                <p className="tile-title">
                                    Started Job at{" "}
                                    <strong>CynderTech Corp.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/experience">see more</Link>
                </div>
            </div>
        </div>
        <div className="hero hero-lg">
            <div className="hero-body">
                <h2>Contact Me</h2>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
