import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
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
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.startsWith('http')) {
          return <a href={node.data.uri} target="_blank" rel="noreferrer">{node.content[0].value}</a>;
        }
        else {
          return <Link to={node.data.uri}>{node.content[0].value}</Link>;
        }
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