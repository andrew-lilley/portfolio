import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout/layout';
import portfolioStyles from './portfolio.module.scss';

const PortfolioList = () => {

  // Get the portfolio list.
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id,
            frontmatter {
              title,
              date(formatString: "Do MMMM YYYY")
            },
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout title="My Portfolio" description="My portfolio illustrates the training courses that I have undertaken.">
      <h1>My Portfolio</h1>
      <p>As I undertake my training journey whilst on furlough, see <Link to="/about/">About Me</Link> for more details, I am going to write about the courses and the apps that I create.</p>
      <p>At the moment, I am hosting any apps on free platforms. As such, it can take a little time for the app to come out of hibernation. The first load is going to probably be a little slow.</p>
      {data.allMarkdownRemark.edges.length > 0 ?
       <ol className={portfolioStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={portfolioStyles.post}>
              <Link to={`/portfolio/${edge.node.fields.slug}/`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
        : <p>No portfolio have been published yet. Please check back later.</p> }
    </Layout>
  )
};

export default PortfolioList;
