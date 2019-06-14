import CMS from 'netlify-cms-app';
import { List, fromJS } from 'immutable';

import GuidesPreview from './preview-templates/GuidesPreview.js';
import React, { Component } from 'react';
import Panel, { PanelWrapper } from '../components/atoms/Panel/Panel';
import Note from '../components/atoms/Note/Note';
import Tooltip from '../components/atoms/Tooltip/Tooltip';
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
    components: {},
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: { Panel, PanelWrapper, Note, Tooltip },
    mdPlugins: [],
  };

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <MdxPreview mdx={mdxProps} {...props} />
    </StyleSheetManager>
  );
};

CMS.registerWidget('mdx', MDXWidget, PreviewWindow);
CMS.registerPreviewTemplate('guide-en', GuidesPreview);
CMS.registerPreviewTemplate('guide-pt', GuidesPreview);

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: 'panel',
//   // Visible label
//   label: 'Panel',
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     { name: 'heading', label: 'Heading', widget: 'string' },
//     { name: 'content', label: 'Content', widget: 'markdown' },
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^<Panel heading="(.*?)">(.*?)<\/Panel>$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       heading: match[1],
//       content: match[2],
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return '<Panel heading="' + obj.heading + '">' + obj.content + '</Panel>';
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     return '<Panel heading="' + obj.heading + '">' + obj.content + '</Panel>';
//   },
// });

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: 'panels',
//   // Visible label
//   label: 'Panels',
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {
//       name: 'panels',
//       label: 'Panels',
//       widget: 'list',
//       fields: [
//         { name: 'heading', label: 'Heading', widget: 'string' },
//         { name: 'content', label: 'Content', widget: 'string' },
//       ],
//     },
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^<PanelWrapper>(.*?)<\/PanelWrapper>$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       panels: fromJS(
//         match[1]
//           .split(',')
//           .filter(val => val)
//           .map(panel => ({
//             heading: panel.match(/heading=["'](.*?)["']/) && panel.match(/heading=["'](.*?)["']/)[1],
//             content: panel.match(/<Panel.*?>(.*?)<\/Panel>/) && panel.match(/<Panel.*?>(.*?)<\/Panel>/)[1],
//           })),
//       ),
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     const panels = fromJS(obj.panels || []);
//     return (
//       '<PanelWrapper>' +
//       panels.map(panel => `<Panel heading="${panel.get('heading', '')}">${panel.get('content', '')}</Panel>`).join('') +
//       '</PanelWrapper>'
//     );
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     const panels = fromJS(obj.panels || []);
//     return (
//       '<PanelWrapper>' +
//       panels.map(panel => `<Panel heading="${panel.get('heading', '')}">${panel.get('content', '')}</Panel>`).join('') +
//       '</PanelWrapper>'
//     );
//   },
// });

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: 'panels',
//   // Visible label
//   label: 'Panels',
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {
//       name: 'panels',
//       label: 'Panels',
//       widget: 'markdown',
//     },
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^<PanelWrapper>(.*?)<\/PanelWrapper>$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       content: match[1],
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return `<PanelWrapper>${obj.content}</PanelWrapper>`;
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     return `<PanelWrapper>${obj.content}</PanelWrapper>`;
//   },
// });
