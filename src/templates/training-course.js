import React from 'react';
import { Link, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/layout/layout';

const TrainingCourse = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (
          typeof node.data !== 'undefined'
          && typeof node.data.target !== 'undefined'
        ) {
          const { title, description, file } = node.data.target;
          const mimeType = file.contentType
          const mimeGroup = mimeType.split('/')[0]

          switch (mimeGroup) {
            case 'image':
              return <img
                title={title ? title : null}
                alt={description ? description : null}
                src={file.url}
              />
            case 'application':
              return <a
                alt={description ? description : null}
                href={file.url}
              >{title ? title : file.details.fileName}
              </a>
            default:
              return <span style={{ backgroundColor: 'red', color: 'white' }}> {mimeType} embedded asset </span>
          }
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
      {renderRichText(props.data.contentfulTrainingCourse.body, options)}
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulTrainingCourse(slug: { eq: $slug }) {
      title
      seoTitle
    	seoDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      publishedDate(formatString: "Do MMMM YYYY")
      body {
        raw
        references {
          contentful_id
          __typename
          title
          description
          file {
            contentType
            details {
              size
              image {
                height
                width
              }
            }
            fileName
            url
          }
        }
      }
    }
  }`;

export default TrainingCourse;