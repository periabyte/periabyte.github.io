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
                <img src={profile} className="s-circle" width={200} />
                <h1>Hi! I'm Paul Peria!</h1>
                <p className="description">
                    I am a web and mobile developer who is always ready to
                    explore new tools to be used in new projects
                </p>
            </div>
        </div>
        <div className="hero hero-lg">
            <div className="hero-body">
                <h2>My Current Tech-Stack</h2>
            </div>
        </div>
        <div className="hero hero-lg bg-dark">
            <div className="hero-body">
                <h2>Work Experience</h2>
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
