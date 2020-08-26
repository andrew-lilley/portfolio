import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulTrainingCourse(slug: { eq: $slug }) {
      title,
      publishedDate(formatString: "Do MMMM YYYY"),
      body {
        json
      }
    }
  }`;

const TrainingCourse = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout title={props.data.contentfulTrainingCourse.title}>
      <h1>{props.data.contentfulTrainingCourse.title}</h1>
      <p>{props.data.contentfulTrainingCourse.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulTrainingCourse.body.json, options)}
    </Layout>
  )
};

export default TrainingCourse;