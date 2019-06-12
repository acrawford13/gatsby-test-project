import React from 'react';
import PropTypes from 'prop-types';
import { GuidesTemplate } from '../../templates/guides';

const GuidesPreview = ({ entry, widgetFor }) => (
  <GuidesTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
  />
);
GuidesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GuidesPreview;
