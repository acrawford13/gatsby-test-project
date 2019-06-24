const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allPrismicGuide(limit: 1000) {
        edges {
          node {
            id
            slugs
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allPrismicGuide.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.slugs[0],
        component: path.resolve(`src/templates/guides.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };
