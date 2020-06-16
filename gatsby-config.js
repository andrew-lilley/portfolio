/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: "Furlough Times",
      author: "Andrew Lilley",
      description: "I am a Full Stack Developer who is interesting in broadening my development knowledge. On this website we explore the training courses that I have undertaken."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "src",
          path: `${__dirname}/src/`
        }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ],
        icon: "/src/static/ft.png"
      }
    }
  ]
};
