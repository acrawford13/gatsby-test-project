import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';
import PageHeading from '../components/molecules/PageHeading/PageHeading';
import Content, { HTMLContent } from '../components/Content';
import { graphql } from 'gatsby';

export const GuidesTemplate = ({ title, subtitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <PageHeading title={title} subtitle={subtitle} />
      <PageContent content={content} />
    </>
  );
};

GuidesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

class Guides extends React.Component {
  render() {
    const { mdx: post } = this.props.data;
    return (
      <Layout post={post} translations={post.frontmatter.translations}>
        <GuidesTemplate
          title={post.frontmatter.title}
          subtitle={post.frontmatter.subtitle}
          content={post.code.body}
          contentComponent={HTMLContent}
        />
      </Layout>
    );
  }
}

Guides.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        translations: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              language: PropTypes.string.isRequired,
            }).isRequired,
          }),
        ),
      }),
      tableOfContents: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        ),
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query GuideById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        title
        subtitle
        language
        description
        translations {
          id
          fields {
            slug
          }
          frontmatter {
            language
          }
        }
      }
      tableOfContents
    }
  }
`;

export default Guides;
