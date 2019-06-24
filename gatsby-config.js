require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `GuestReady`,
    description: ``,
    author: `@GuestReadyNow`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/uploads`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: ['.mdx', '.md'],
    //     remarkPlugins: [require('remark-abbr')],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: 'gatsby-remark-relative-images',
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 1035,
    //         },
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GuestReady Guides`,
        short_name: `GuestReady Guides`,
        start_url: `/`,
        background_color: `#2accdd`,
        theme_color: `#2accdd`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `guide-testing`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
  ],
  mapping: {
    // 'Mdx.frontmatter.translations': 'Mdx.frontmatter.title',
    'PrismicGuide.alternate_languages.id': 'PrismicGuide.prismicId',
  },
};
