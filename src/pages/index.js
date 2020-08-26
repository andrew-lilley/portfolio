import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/layout/layout';
import PulseImage from '../components/pulse-image/pulse-image.component';
import indexStyles from './index.module.scss';

const IndexPage = (props) => {

  const company_logos = {
    gatsby: {
      name: 'Gatsby',
      url: 'https://www.gatsbyjs.org/'
    },
    netlify: {
      name: 'Netlify',
      url: 'https://www.netlify.com/'
    },
    graphql: {
      name: 'GraphQL',
      url: 'https://graphql.org/'
    },
    react: {
      name: 'React',
      url: 'https://reactjs.org/'
    },
    github: {
      name: 'Github',
      url: 'https://github.com/'
    },
    webpack: {
      name: 'Webpack',
      url: 'https://webpack.js.org/'
    },
    heroku: {
      name: 'Heroku',
      url: 'https://www.heroku.com/'
    },
    node: {
      name: 'NodeJS',
      url: 'https://nodejs.org/'
    },
    redux: {
      name: 'Redux',
      url: 'https://redux.js.org/'
    },
    jest: {
      name: 'Jest',
      url: 'https://jestjs.io/'
    },
    enzyme: {
      name: 'Enzyme',
      url: 'https://enzymejs.github.io/enzyme/'
    },
    firebase: {
      name: 'Firebase',
      url: 'https://firebase.google.com/'
    },
    stripe: {
      name: 'Stripe',
      url: 'https://stripe.com/'
    },
    apollo: {
      name: 'Apollo',
      url: 'https://www.apollographql.com/'
    }
  };

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
    <Layout title={props.data.contentfulPage.seoTitle} description={props.data.contentfulPage.seoDescription.childMarkdownRemark.rawMarkdownBody}>
      <h1>{props.data.contentfulPage.title}</h1>
      {documentToReactComponents(props.data.contentfulPage.body.json, options)}

      {props.data.allFile.edges.length > 0 &&
        <ul className={indexStyles.techGrid}>
          {props.data.allFile.edges.map((edge) => {
            return (
              <li><PulseImage edge={edge} collection={company_logos} /></li>
            )
          })}
        </ul>
      }

    </Layout>
  )
};

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/company-logos/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxHeight: 200, maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
    contentfulPage(slug: {eq: "home-page"}) {
      title,
      seoTitle,
    	seoDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      },
      body {
        json
      }
    }
  }
`;

export default IndexPage;
