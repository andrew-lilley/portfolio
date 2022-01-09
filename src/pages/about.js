import React from 'react';
import { Link, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/layout/layout';

const AboutPage = (props) => {

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
    <Layout title={props.data.contentfulPage.seoTitle} description={props.data.contentfulPage.seoDescription.childMarkdownRemark.rawMarkdownBody}>
      <h1>{props.data.contentfulPage.title}</h1>
      {renderRichText(props.data.contentfulPage.body, options)}
    </Layout>
  )
};

export const query = graphql`
  query {
    contentfulPage(slug: {eq: "about-me"}) {
      title
      seoTitle
    	seoDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      body {
        raw
      }
    }
  }`;

export default AboutPage;
