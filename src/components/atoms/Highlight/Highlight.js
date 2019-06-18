import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({ children, heading, withPanel }) => {
  return (
    <section className="highlight">
      {withPanel ? (
        <div className="panel">
          {heading && <h3 className="panel__heading">{heading}</h3>}
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

Highlight.propTypes = {
  withPanel: PropTypes.bool,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Highlight;
