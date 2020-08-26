import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout/layout';
import trainingCoursesStyles from './training-courses.module.scss';

const TrainingCoursesList = () => {

  // Get the training courses list from Contentful.
  const data = useStaticQuery(graphql`
    query {
      allContentfulTrainingCourse (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title,
            slug,
            publishedDate(formatString: "Do MMMM YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout title="Training Courses" description="The training courses that I have undertaken.">
      <h1>Training Courses</h1>
      <p>As I undertake my training journey whilst on furlough, see <Link to="/about/">About Me</Link> for more details, I am going to write about the courses and the apps that I create.</p>
      <p>At the moment, I am hosting any apps on free platforms. As such, it can take a little time for the app to come out of hibernation. The first load is going to probably be a little slow.</p>
      {data.allContentfulTrainingCourse.edges.length > 0 ?
        <ol className={trainingCoursesStyles.posts}>
          {data.allContentfulTrainingCourse.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={trainingCoursesStyles.post}>
              <Link to={`/training-course/${edge.node.slug}/`}>
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

export default TrainingCoursesList;
