import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import PulseImage from '../components/pulse-image/pulse-image.component';
import indexStyles from './index.module.scss';

const IndexPage = ({ data }) => {

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
    }
  };

  return (
    <Layout title="Home" description="I am a Full Stack Developer who is interesting in broadening my development knowledge. On this website we explore the training courses that I have undertaken.">
      <h1>Welcome to my website</h1>
      <p>This is a website that I am using to collate the details of all the training courses that I have undertaken whilst on furlough. You can read more by visiting <Link to="/about/">About Me</Link>.</p>
      <p>I will not be regurgitating the content of the courses. This is not a training programme. It is merely a record of what I have been doing. I will include links to the codebase and the apps that I have deployed. I will also document any thoughts that I had whilst doing the courses.</p>
      <p>If you are interested in what I have been upto, you can find out by visiting <Link to="/portfolio/">My Portfolio</Link>.</p>
      <p>I started to do some light training using <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a> but then I moved over to paid for courses on <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy</a> after being sucked in by a pricing promotion.</p>
      <p>Some technologies and services that I have been exposed to so far include:</p>

      {data.allFile.edges.length > 0 &&
        <ul className={indexStyles.techGrid}>
          {data.allFile.edges.map((edge) => {
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
  }
`;

export default IndexPage;
