// See nodeJS, https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
const path = require("path");

// Gatsby Internal API, see https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get the path to the training course template.
  const trainingCourseTemplate = path.resolve("./src/templates/training-course.js");

  const res = await graphql(`
    query {
      allContentfulTrainingCourse {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulTrainingCourse.edges.forEach((edge) => {
    createPage({
      component: trainingCourseTemplate,
      path: `training-course/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });

};