import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
import '../../index.scss';
import { MDXProvider } from '@mdx-js/react';
import Panel, { PanelWrapper } from '../atoms/Panel/Panel';
import GHSlugger from 'github-slugger';

const slugger = new GHSlugger();

const Layout = ({ children, data }) => (
  <MDXProvider
    components={{
      Panel: Panel,
      PanelWrapper: PanelWrapper,
      h1: function customH1({ children }) {
        return <h1 id={slugger.slug(children)}>{children}</h1>;
      },
    }}
  >
    <div className="layout layout--sidebar">
      <Sidebar data={data} />
      <main className="content-wrapper">
        <div className="content">{children}</div>
      </main>
    </div>
  </MDXProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
