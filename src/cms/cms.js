import CMS from 'netlify-cms-app';

import GuidesPreview from './preview-templates/GuidesPreview.js';
import React, { Component } from 'react';
import Panel, { PanelWrapper } from '../components/atoms/Panel/Panel';
import Note from '../components/atoms/Note/Note';
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx';
import { IntlProvider } from 'react-intl';
import messages_en from '../translations/en.json';

class MDXWidget extends Component {
  render() {
    return <MdxControl {...this.props} />;
  }
}

const PreviewWindow = props => {
  const mdxProps = {
    // This key represents html elements used in markdown; h1, p, etc
    components: {},
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: { Panel, PanelWrapper, Note },
    mdPlugins: [],
  };

  return (
    <IntlProvider locale="en" messages={messages_en}>
      <MdxPreview mdx={mdxProps} {...props} />
    </IntlProvider>
  );
};

CMS.registerWidget('mdx', MDXWidget, PreviewWindow);
CMS.registerPreviewTemplate('guides-en', GuidesPreview);
CMS.registerPreviewTemplate('guides-pt', GuidesPreview);
