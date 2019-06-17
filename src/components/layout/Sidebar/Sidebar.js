import React from 'react';
import logo from '../../../images/GR_Logo2x.png';
import SidebarHeading from './components/SidebarHeading';
import { IntlProvider, FormattedMessage } from 'react-intl';

const Sidebar = ({ post, isOpen, setIsOpen }) => (
  <>
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <img className="sidebar__logo" src={logo} />
      </div>
      <div className="sidebar__content">
        <SidebarHeading title={post.frontmatter.title} subtitle={post.frontmatter.subtitle} />
        <div className="sidebar__nav">
          <ul>
            {post.tableOfContents.items &&
              post.tableOfContents.items.map(h1 => (
                <>
                  <li className="sidebar__list-item sidebar__list-item--1" key={h1.url}>
                    <a onClick={() => setIsOpen(false)} href={h1.url}>
                      {h1.title}
                    </a>
                  </li>
                  {h1.items &&
                    h1.items.map(h2 => (
                      <>
                        <li className="sidebar__list-item sidebar__list-item--2" key={h2.url}>
                          <a onClick={() => setIsOpen(false)} href={h2.url}>
                            {h2.title}
                          </a>
                        </li>
                        {h2.items &&
                          h2.items.map(h3 => (
                            <li className="sidebar__list-item sidebar__list-item--3" key={h3.url}>
                              <a onClick={() => setIsOpen(false)} href={h3.url}>
                                {h3.title}
                              </a>
                            </li>
                          ))}
                      </>
                    ))}
                </>
              ))}
          </ul>
        </div>
      </div>
      <footer className="sidebar__footer">
        GuestReady © {new Date().getFullYear()}
        <a href="https://www.guestready.com">www.guestready.com</a>
      </footer>
    </div>
    <div onClick={() => setIsOpen(false)} className={`overlay ${isOpen ? 'overlay--visible' : ''}`} />
  </>
);

export default Sidebar;
