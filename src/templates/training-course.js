import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/layout/layout';

const TrainingCourse = (props) => {

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file['en-US'].contentType
        const mimeGroup = mimeType.split('/')[0]

        switch (mimeGroup) {
          case 'image':
            return <img
              title={title ? title['en-US'] : null}
              alt={description ? description['en-US'] : null}
              src={file['en-US'].url}
            />
          case 'application':
            return <a
              alt={description ? description['en-US'] : null}
              href={file['en-US'].url}
            >{title ? title['en-US'] : file['en-US'].details.fileName}
            </a>
          default:
            return <span style={{ backgroundColor: 'red', color: 'white' }}> {mimeType} embedded asset </span>
        }
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.startsWith('http')) {
          return <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{node.content[0].value}</a>;
        }
        else {
          return <Link to={node.data.uri}>{node.content[0].value}</Link>;
        }
      }
    }
  }

  return (
    <Layout title={props.data.contentfulTrainingCourse.seoTitle} description={props.data.contentfulTrainingCourse.seoDescription.childMarkdownRemark.rawMarkdownBody}>
      <h1>{props.data.contentfulTrainingCourse.title}</h1>
      <p>{props.data.contentfulTrainingCourse.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulTrainingCourse.body.json, options)}
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulTrainingCourse(slug: { eq: $slug }) {
      title,
      seoTitle,
    	seoDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      },
      publishedDate(formatString: "Do MMMM YYYY"),
      body {
        json
      }
    }
  }`;

export default TrainingCourse;