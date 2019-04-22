import React from "react";
import { Link } from "gatsby";

import Layout from "../components/_global/layout";
import Logo from "../components/_global/logo";
import SEO from "../components/_global/seo";

const WorkHistoryPage = () => (
    <Layout>
        <SEO
            title="Work History"
            keywords={[`gatsby`, `application`, `react`]}
        />
        <h1>Work History</h1>
    </Layout>
);

export default WorkHistoryPage;
