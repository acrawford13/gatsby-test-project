import React from 'react';
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <div style={{ padding: '3rem' }}>
    <div className="sidebar__nav">
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
