import React from "react";

import Layout from "../components/_global/layout";
import SEO from "../components/_global/seo";
import lego from "../../assets/images/under-construction.gif";

const ContactPage = () => (
    <Layout>
        <SEO
            title="Reach Out"
            keywords={[`gatsby`, `application`, `react`]}
        />

        <div className="page">
            <h1 className="page-title">Reach Out</h1>
            <img src={lego} />
            <p>
                This section is still under construction, please download my
                resume at the sidebar
            </p>
        </div>
    </Layout>
);

export default ContactPage;
