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
                <p>A Web Developer</p>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
