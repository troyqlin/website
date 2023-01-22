/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Troy Lin | Personal Website",
    description: "Troy Lin's personal website, home to projects and more information.",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
}
