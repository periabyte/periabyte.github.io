import React from "react";
import { Link } from "gatsby";

import Layout from "../components/_global/layout";
import Logo from "../components/_global/logo";
import SEO from "../components/_global/seo";

const TechStackPage = () => (
    <Layout>
        <SEO title="Tech Stack" keywords={[`gatsby`, `application`, `react`]} />
        <div id="tech-stack" className="page">
            <h1 className="page-title text-center">WHAT'S IN MY TECH-STACK?</h1>
            <div className="my-tech">
                <i alt="html" className="fab fa-4x fa-html5" />
                <i alt="css" className="fab fa-4x fa-css3" />
                <i alt="javascript" className="fab fa-4x fa-js" />
                <i alt="node.js" className="fab fa-4x fa-node-js" />
                <i alt="react.js" className="fab fa-4x fa-react" />
                <i alt="git" className="fab fa-4x fa-git" />
            </div>
            <div className="page-content">
                <p>
                    In my current job, I use a full <strong>JavaScript</strong>{" "}
                    stack to do our web and mobile applications. Here are the
                    tools that I currently use for developing applications. I also included some of the tech that I'm interested in or currently studying for me to possible offer and use for future projects.
                </p>
                <div className="columns">
                    <div className="column">
                        <h4>Back End</h4>
                        <ul>
                            <li>Express.js</li>
                            <li>Koa.js</li>
                            <li>Feathers.js</li>
                            <li>
                                Strapi <sup>***</sup>
                            </li>
                            <li>
                                Loopback <sup>***</sup>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Web</h4>
                        <ul>
                            <li>React.js</li>
                            <li>
                                Svelte <sup>***</sup>
                            </li>
                            <li>
                                Gatsby.js <sup>***</sup>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Mobile</h4>
                        <ul>
                            <li>React Native</li>
                        </ul>

                        <h4>Database</h4>
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <h5 className="text-right text-italic">
                    <sup>***</sup> - Tech that I'm currently studying.
                </h5>
            </div>
        </div>
    </Layout>
);

export default TechStackPage;
