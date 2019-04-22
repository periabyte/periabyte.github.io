import React from "react";
import { Link } from "gatsby";

import Layout from "../components/_global/layout";
import Logo from "../components/_global/logo";
import SEO from "../components/_global/seo";

const Blog = () => (
    <Layout>
        <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Blog</h1>
    </Layout>
);

export default Blog;
