import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title,
        date(formatString: "Do MMMM YYYY")
      },
      fields {
        slug
      }
      html
    }
  }`;

const Portfolio = (props) => {

  return (
    <Layout title={props.data.markdownRemark.frontmatter.title}>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html} }></div>
    </Layout>
  )
};

export default Portfolio;