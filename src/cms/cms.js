import CMS from 'netlify-cms-app';

import GuidesPreview from './preview-templates/GuidesPreview.js';
import React from 'react';
import Panel, { PanelWrapper } from '../components/atoms/Panel/Panel';
import CollapsiblePanel from '../components/atoms/CollapsiblePanel/CollapsiblePanel';
import Column, { ColumnWrapper } from '../components/atoms/Column/Column';
import Highlight from '../components/atoms/Highlight/Highlight';
import Note from '../components/atoms/Note/Note';
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx';
import { IntlProvider } from 'react-intl';
import messages_en from '../translations/en.json';

const PreviewWindow = props => {
  const mdxProps = {
    // This key represents html elements used in markdown; h1, p, etc
    components: {},
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: { Panel, CollapsiblePanel, PanelWrapper, Note, Highlight, Column, ColumnWrapper },
    mdPlugins: [],
  };

  return (
    <IntlProvider locale="en" messages={messages_en}>
      <MdxPreview mdx={mdxProps} {...props} />
    </IntlProvider>
  );
};

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'definition',
  // Visible label
  label: 'Definition',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: 'text', label: 'Text', widget: 'string' },
    { name: 'definition', label: 'Definition', widget: 'string' },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^\*\[(.*?)\]: (.*?)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      text: match[1],
      definition: match[2],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '*[' + obj.text + ']: ' + obj.definition;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return '*[' + obj.text + ']: ' + obj.definition;
  },
});

CMS.registerWidget('mdx', MdxControl, PreviewWindow);
CMS.registerPreviewTemplate('guides-en', GuidesPreview);
CMS.registerPreviewTemplate('guides-pt', GuidesPreview);
CMS.registerPreviewTemplate('all-guides', GuidesPreview);
