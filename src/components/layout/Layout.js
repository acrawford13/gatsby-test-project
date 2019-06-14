import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
import '../../index.scss';
import { MDXProvider } from '@mdx-js/react';
import Panel, { PanelWrapper } from '../atoms/Panel/Panel';
import Note from '../atoms/Note/Note';
import Tooltip from '../atoms/Tooltip/Tooltip';
import LanguagePicker from '../atoms/LanguagePicker/LanguagePicker';
import GHSlugger from 'github-slugger';
import { stringifyChildren } from '../../utils/slugs';
import { StaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import menuToggle from '../../images/menu-toggle.svg';

const slugger = new GHSlugger();
const sluggerComps = {
  Panel: Panel,
  PanelWrapper: PanelWrapper,
  Note: Note,
  Tooltip: Tooltip,
  h1: function customH1({ children }) {
    const kids = stringifyChildren(children);
    return <h1 id={slugger.slug(kids).replace(/-\d+$/, '')}>{children}</h1>;
  },
  h2: function customH2({ children }) {
    return <h2 id={slugger.slug(children)}>{children}</h2>;
  },
  h3: function customH3({ children }) {
    return <h3 id={slugger.slug(children)}>{children}</h3>;
  },
  pre: 'div',
  code: 'div',
};

const Layout = ({ children, data: pageData, translations, language }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="layout layout--sidebar">
      <Sidebar setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} data={pageData} />
      <main className="content-wrapper">
        <div className="top-bar">
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="menu-toggle">
            <img src={menuToggle} />
          </div>
          <LanguagePicker langKey={language} translations={translations} />
        </div>
        <MDXProvider components={sluggerComps}>
          <div className="content">{children}</div>
        </MDXProvider>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
