import React from 'react';
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

const slugger = new GHSlugger();

const Layout = ({ children, data: pageData, translations }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `}
    render={data => {
      const url = location.pathname;
      const { langs, defaultLangKey } = data.site.siteMetadata.languages;
      const langKey = getCurrentLangKey(langs, defaultLangKey, url);
      const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
      const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
        ...item,
        link: item.link.replace(`/${defaultLangKey}/`, '/'),
      }));

      console.log('url:', url);
      console.log('langKey:', langKey);
      console.log('homeLink:', homeLink);
      console.log('langsMenu:', langsMenu);

      return (
        <MDXProvider
          components={{
            Panel: Panel,
            PanelWrapper: PanelWrapper,
            Note: Note,
            Tooltip: Tooltip,
            h1: function customH1({ children }) {
              const kids = stringifyChildren(children);
              return <h1 id={slugger.slug(kids)}>{children}</h1>;
            },
            h2: function customH2({ children }) {
              return <h2 id={slugger.slug(children)}>{children}</h2>;
            },
            h3: function customH3({ children }) {
              return <h3 id={slugger.slug(children)}>{children}</h3>;
            },
            pre: 'div',
            code: 'div',
          }}
        >
          <div className="layout layout--sidebar">
            <Sidebar data={pageData} />
            <main className="content-wrapper">
              <LanguagePicker langKey={langKey} translations={translations} />
              <div className="content">{children}</div>
            </main>
          </div>
        </MDXProvider>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
