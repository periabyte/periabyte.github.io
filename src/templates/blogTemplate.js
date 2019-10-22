import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/_global/layout';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

export default ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { fluid } = frontmatter.featuredImage.childImageSharp;
    return (
        <Layout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <BackgroundImage fluid={fluid}>
                        <div className="hero blog-hero">
                            <div className="hero-body">
                                <h1>{frontmatter.title}</h1>
                            </div>
                        </div>
                    </BackgroundImage>
                    <div className="blog-main-container">
                        <div className="blog-post-content">
                            <h5 className="blog-post-date text-dark">
                                {frontmatter.date}
                            </h5>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                        <div className="blog-post-tags-container">
                            <h3>Tags</h3>
                            {frontmatter.tags &&
                                frontmatter.tags.map(tag => (
                                    <span class="chip tag">{tag}</span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;