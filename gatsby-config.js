/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  siteMetadata: {
      title: `Furlough Times`,
      author: `Andrew Lilley`,
      description: `I am a Full Stack Developer who is interesting in broadening my development knowledge. On this website we explore the training courses that I have undertaken.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: path.join(__dirname, `src`)
        }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-external-links`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Furlough Times`,
        short_name: `Furlough Times`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        lang: `en`,
        icon: `src/static/ft.png`
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: null,
        host: null
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`
  ]
};
