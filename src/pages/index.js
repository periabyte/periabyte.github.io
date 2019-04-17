import React from "react";
import { Link } from "gatsby";

import Layout from "../components/_global/layout";
import Logo from "../components/_global/logo";
import SEO from "../components/_global/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Test</h1>
        <p>resultssssssssssssss</p>
    </Layout>
);

export default IndexPage;
