import React from 'react';
import { Link, graphql } from 'gatsby';
import '../index.scss';

const IndexPage = ({ data }) => (
  <div className="index-page">
    <h1>Index</h1>
    <ul>
      {data.allMdx.edges.map(edge => (
        <li key={edge.node.id}>
          <Link to={edge.node.fields.slug}>
            {edge.node.frontmatter.title}{' '}
            <small style={{ textTransform: 'uppercase', fontSize: '1rem' }}>({edge.node.frontmatter.language})</small>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const pageQuery = graphql`
  query IndexPageQuery {
    allMdx(filter: { frontmatter: { templateKey: { eq: "guides" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            language
          }
        }
      }
    }
  }
`;

export default IndexPage;
