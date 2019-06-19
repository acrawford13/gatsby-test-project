import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../images/GR_Logo2x.png';

const Highlight = ({ children, heading, withPanel, withLogo }) => {
  return (
    <section className="highlight">
      {withPanel ? (
        <div className="panel">
          {withLogo && <img className="highlight__logo" src={logo} />}
          {heading && <h3 className="panel__heading">{heading}</h3>}
          <div className="panel__content">{children}</div>
        </div>
      ) : (
        children
      )}
    </section>
  );
};

Highlight.propTypes = {
  withPanel: PropTypes.bool,
  withLogo: PropTypes.bool,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Highlight;
