/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "troy lin",
    description: "troy's site, home to future personal projects and information.",
    twitterUsername: "@troyqlin",
    image: "/charlieBrown.jpg",
    siteUrl: "https://www.troylin.com.au",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.troylin.com.au',
        sitemap: 'https://www.troylin.com.au/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
