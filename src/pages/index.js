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
                <div className="empty">
                    <div className="empty-icon">
                        <figure className="avatar avatar-xl">
                            <img src={profile} />
                        </figure>
                    </div>
                    <p className="empty-title h5">Hi! I'm Paul Peria!</p>
                    <p className="empty-subtitle">A Web Developer</p>
                    <div className="empty-action">
                        <button className="btn btn-primary">
                            Send a message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
