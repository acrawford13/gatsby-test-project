import React from 'react';

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
      headings {
        value
        depth
      }
      tableOfContents
    }
  }
`;

export default Guides;
