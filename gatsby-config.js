/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  siteMetadata: {
      title: `Development Dojo`,
      author: `Andrew Lilley`,
      description: `I am a Full Stack Developer who is interesting in broadening my development knowledge. On this website we explore the training courses that I have undertaken.`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
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
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 750,
              withWebp: true
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Development Dojo`,
        short_name: `Development Dojo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        lang: `en`,
        icon: `src/static/dd.png`
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
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true
      }
    }
  ]
};
