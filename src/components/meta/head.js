import React from 'react';
import  { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Head = ({ title, description }) => {
  // Get the site title and description.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `);

  const metaDescription = description ? description : data.site.siteMetadata.description;

  return (
    <Helmet>
      <meta name="description" content={metaDescription} />
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" />
    </Helmet>
  )
};

export default Head;