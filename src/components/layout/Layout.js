import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import GHSlugger from 'github-slugger';
import { stringifyChildren } from '../../utils/slugs';

import '../../index.scss';
import menuToggle from '../../images/menu-toggle.svg';

import Sidebar from './Sidebar/Sidebar';
import SEO from '../../components/seo';
import Panel, { PanelWrapper } from '../atoms/Panel/Panel';
import Column, { ColumnWrapper } from '../atoms/Column/Column';
import CollapsiblePanel from '../atoms/CollapsiblePanel/CollapsiblePanel';
import Note from '../atoms/Note/Note';
import ActionButton from '../atoms/ActionButton/ActionButton';
import Highlight from '../atoms/Highlight/Highlight';
import LanguagePicker from '../atoms/LanguagePicker/LanguagePicker';

import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_pt from 'react-intl/locale-data/pt';

import messages_pt from '../../translations/pt.json';
import messages_en from '../../translations/en.json';

addLocaleData([...locale_en, ...locale_pt]);

const messages = {
  pt: messages_pt,
  en: messages_en,
};

const slugger = new GHSlugger();
const sluggerComps = {
  Panel,
  PanelWrapper,
  CollapsiblePanel,
  Column,
  ColumnWrapper,
  Highlight,
  Note,
  ActionButton,
  h1: function customH1({ children }) {
    const kids = stringifyChildren(children);
    return <h1 id={slugger.slug(kids).replace(/-\d+$/, '')}>{children}</h1>;
  },
  h2: function customH2({ children }) {
    const kids = stringifyChildren(children);
    return <h2 id={slugger.slug(kids).replace(/-\d+$/, '')}>{children}</h2>;
  },
  h3: function customH3({ children }) {
    const kids = stringifyChildren(children);
    return <h3 id={slugger.slug(kids).replace(/-\d+$/, '')}>{children}</h3>;
  },
  pre: 'div',
  code: 'div',
};

const Layout = ({ children, post, translations }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <IntlProvider locale={post.frontmatter.language} messages={messages[post.frontmatter.language]}>
      <>
        <SEO title={post.frontmatter.title} lang={post.frontmatter.language} />
        <div className="layout layout--sidebar">
          <Sidebar setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} post={post} />
          <main className="content-wrapper">
            <div className="top-bar">
              <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="menu-toggle">
                <img src={menuToggle} />
              </div>
              <LanguagePicker currentLanguage={post.frontmatter.language} translations={translations} />
            </div>
            <MDXProvider components={sluggerComps}>
              <div className="content">{children}</div>
            </MDXProvider>
          </main>
        </div>
      </>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
