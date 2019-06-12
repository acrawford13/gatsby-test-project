import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-mdx';

export const HTMLContent = ({ content }) => (
  <div className="inner-content">
    <MDXRenderer>{content}</MDXRenderer>
  </div>
);

const Content = ({ content }) => <div className="inner-content">{content}</div>;

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
