import CMS from 'netlify-cms-app';

import GuidesPreview from './preview-templates/GuidesPreview.js';
import React, { Component } from 'react';
import Panel, { PanelWrapper } from '../components/atoms/Panel/Panel';
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx';
import { StyleSheetManager } from 'styled-components';

class MDXWidget extends Component {
  render() {
    return <MdxControl {...this.props} />;
  }
}

const PreviewWindow = props => {
  const iframe = document.getElementsByTagName('iframe')[0];
  const iframeHeadElem = iframe.contentDocument.head;

  const mdxProps = {
    // This key represents html elements used in markdown; h1, p, etc
    components: { Panel, PanelWrapper },
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: { Panel, PanelWrapper },
    mdPlugins: [],
  };

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <MdxPreview mdx={mdxProps} {...props} />
    </StyleSheetManager>
  );
};

CMS.registerWidget('mdx', MDXWidget, PreviewWindow);
CMS.registerPreviewTemplate('guides', GuidesPreview);
