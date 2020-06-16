// See nodeJS, https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
const path = require("path");

// Gatsby Internal API, see https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // Create url for pages.
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

// Gatsby Internal API, see https://www.gatsbyjs.org/docs/node-apis/#createPages
module.exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;

  // Get the path to the portfolio template.
  const portfolioTemplate = path.resolve("./src/templates/portfolio.js");

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: portfolioTemplate,
      path: `portfolio/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    });
  });

};