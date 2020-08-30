/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [`@nehalist/gatsby-theme-nehalem`,
  {
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: process.env.API_URL || "http://localhost:1337",
      contentTypes: [
        // List of the Content Types you want to be able to request from Gatsby.
        "article",
        "category",
      ],
      queryLimit: 1000,
    },
  },],
  
};
