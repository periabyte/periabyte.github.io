import React from "react";
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../../components/_global/layout";
import SEO from "../../components/_global/seo";

const BlogPage = ({data}) => {
    console.log('data', data.allMarkdownRemark.edges[0])
    return (
        <Layout>
            <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />

            <div className="page">
                <h1 className="page-title">Blog</h1>
                <div className="page-main-container">
                    {data.allMarkdownRemark.edges.map(
                        ({ node: { id, frontmatter, excerpt } }) => (
                            <Link to={frontmatter.path} key={id}>
                                <div className="blog-entry-container">
                                    <Img
                                        className="blog-entry-feature-img"
                                        fluid={
                                            frontmatter.featuredImage
                                                .childImageSharp.fluid
                                        }
                                    />
                                    <div className="blog-entry-details">
                                        <h3>{frontmatter.title}</h3>
                                        <p>{excerpt}</p>
                                        <small>{frontmatter.date}</small>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage;

export const query = graphql`
           {
               allMarkdownRemark(
                   sort: { fields: [frontmatter___date], order: DESC }
               ) {
                   edges {
                       node {
                           id
                           excerpt
                           frontmatter {
                               date(fromNow: true)
                               title
                               path
                               featuredImage {
                                   childImageSharp {
                                       fluid(maxWidth: 300) {
                                           ...GatsbyImageSharpFluid
                                       }
                                   }
                               }
                               tags
                           }
                       }
                   }
               }
           }
       `;
