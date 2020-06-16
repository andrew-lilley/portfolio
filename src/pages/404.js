import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const NotFound = () => {
  return (
    <Layout title="Page not found" description="The page that you are trying to access could not be found.">
      <h1>Page not found</h1>
      <p>The page that you are trying to access could not be found. Try navigating to the content from the <Link to={"/"}>home page</Link></p>
    </Layout>
  )
};

export default NotFound;