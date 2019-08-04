import React from "react";

import Layout from "../components/_global/layout";
import SEO from "../components/_global/seo";
import lego from "../../assets/images/under-construction.gif";

const BlogPage = () => (
    <Layout>
        <SEO
            title="Blog"
            keywords={[`gatsby`, `application`, `react`]}
        />

        <div className="page">
            <h1 className="page-title">Blog</h1>
            <img src={lego} />
            <p>
                This section is still under construction
            </p>
        </div>
    </Layout>
);

export default BlogPage;
