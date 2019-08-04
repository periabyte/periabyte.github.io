import React from "react";

import Layout from "../components/_global/layout";
import SEO from "../components/_global/seo";
import P404 from "../../assets/images/404.gif";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className="hero hero-full">
            <div className="hero-body">

        <h1>What you're looking for is not here...</h1>
        <img src={P404} />
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
