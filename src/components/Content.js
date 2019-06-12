import React from 'react';
import PropTypes from 'prop-types';
import rehypeReact from 'rehype-react';
import Panel from './atoms/Panel/Panel';
import { MDXRenderer } from 'gatsby-mdx';

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: { panel: Panel },
// }).Compiler;

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
