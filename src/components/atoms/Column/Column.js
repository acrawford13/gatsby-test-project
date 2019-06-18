import React from 'react';
import PropTypes from 'prop-types';

export const ColumnWrapper = ({ children }) => {
  return <div className="column-wrapper">{children}</div>;
};

const Column = ({ children }) => {
  return <div className="column">{children}</div>;
};

export default Column;
