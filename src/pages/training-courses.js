import React from 'react';
import {Link, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/layout/layout';
import * as trainingCoursesStyles from './training-courses.module.scss';

const TrainingCoursesList = (props) => {

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
      {renderRichText(props.data.contentfulPage.body, options)}
      {props.data.allContentfulTrainingCourse.edges.length > 0 ?
        <ol className={trainingCoursesStyles.posts}>
          {props.data.allContentfulTrainingCourse.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={trainingCoursesStyles.post}>
              <Link to={`/training-courses/${edge.node.slug}/`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
        : <p>No details of training courses undertaken have been published yet. Please check back later.</p> }
    </Layout>
  )
};

export const query = graphql`
  query {
    contentfulPage(slug: {eq: "training-courses-introduction"}) {
      id
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
    allContentfulTrainingCourse (
      sort: {
        fields: publishedDate
        order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "Do MMMM YYYY")
        }
      }
    }   
  }`;

export default TrainingCoursesList;
