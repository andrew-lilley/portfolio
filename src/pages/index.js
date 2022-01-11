import React from 'react';
import { Link, graphql } from 'gatsby';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/layout/layout';
import PulseImage from '../components/pulse-image/pulse-image.component';
import * as indexStyles from './index.module.scss';

const IndexPage = (props) => {

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

      {props.data.allContentfulTech.edges.length > 0 &&
        <ul className={indexStyles.techGrid}>
        {props.data.allContentfulTech.edges.map((edge) => {
            return (
              <li key={edge.node.id}>
                <PulseImage
                  id={edge.node.id}
                  url={edge.node.url}
                  image={edge.node.logo}
                  title={edge.node.title}
                />
              </li>
            )
          })}
        </ul>
      }

    </Layout>
  )
};

export const query = graphql`
  query {
    allContentfulTech {
      edges {
        node {
          id
          title
          url
          logo {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              jpegProgressive: true
              placeholder: BLURRED
              sizes: "maxHeight: 200, maxWidth: 200"
              aspectRatio: 1
              resizingBehavior: SCALE
              width: 200
              height: 200
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    contentfulPage(slug: {eq: "home-page"}) {
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
  }
`;

export default IndexPage;
