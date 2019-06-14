import React from 'react';
import logo from '../../../images/GR_Logo2x.png';
import SidebarHeading from './components/SidebarHeading';

const Sidebar = ({ data, isOpen, setIsOpen }) => (
  <>
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <img className="sidebar__logo" src={logo} />
      </div>
      <div className="sidebar__content">
        <SidebarHeading title={data.mdx.frontmatter.title} subtitle={data.mdx.frontmatter.subtitle} />
        <div className="sidebar__nav">
          <ul>
            {data.mdx.tableOfContents.items &&
              data.mdx.tableOfContents.items.map(h1 => (
                <li key={h1.url}>
                  <a onClick={() => setIsOpen(false)} href={h1.url}>
                    {h1.title}
                  </a>
                  {h1.items &&
                    h1.items.map(h2 => (
                      <li key={h2.url}>
                        <a onClick={() => setIsOpen(false)} href={h2.url}>
                          {h2.title}
                        </a>
                        {h2.items &&
                          h2.items.map(h3 => (
                            <li key={h3.url}>
                              <a onClick={() => setIsOpen(false)} href={h3.url}>
                                {h3.title}
                              </a>
                            </li>
                          ))}
                      </li>
                    ))}
                </li>
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
