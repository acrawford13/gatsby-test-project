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

const Guides = ({ data }) => {
  const { mdx: post } = data;
  return (
    <Layout data={data}>
      <GuidesTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.code.body}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
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
