import React from 'react';
import  { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Head = ({ title, description = "test" }) => {
  // Get the site title.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <meta name="description" content={description} />
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" />
    </Helmet>
  )
};

export default Head;