import React from 'react';
import logo from '../../../images/GR_Logo2x.png';
import SidebarHeading from './components/SidebarHeading';

const Sidebar = ({ data }) => (
  <div className="sidebar">
    <div className="sidebar__content">
      <img className="sidebar__logo" src={logo} />
      <SidebarHeading title={data.mdx.frontmatter.title} subtitle={data.mdx.frontmatter.subtitle} />
      <div className="sidebar__nav">
        <ul>
          {data.mdx.tableOfContents.items.map(item => (
            <li key={item.url}>
              <a href={item.url}>{item.title}</a>
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
);

export default Sidebar;
