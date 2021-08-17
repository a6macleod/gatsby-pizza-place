module.exports = {
  siteMetadata: {
    title: `Pizza Place - The best pizza in Kalamazoo`,
    description: `The Pizza Place is the best pizza in Kalamazoo Michigan. Bringing you delicious family friendly pizza since 2021.`,
    author: `Andrew MacLeod`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pizza-place`,
        short_name: `pizza`,
        start_url: `/`,
        background_color: `#CF1717`,
        theme_color: `#F5F0F0`,
        display: `minimal-ui`,
        icon: `src/images/pizza-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
