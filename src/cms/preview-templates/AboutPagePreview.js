import React from 'react';
import PropTypes from 'prop-types';

const AboutPagePreview = ({ entry, widgetFor }) => <h1>dajskldj</h1>;

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
