import React from 'react';
import PropTypes from 'prop-types';
export const HTMLContent = ({ content }) => <div className="inner-content"></div>;

const Content = ({ content }) => <div className="inner-content">{content}</div>;

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
