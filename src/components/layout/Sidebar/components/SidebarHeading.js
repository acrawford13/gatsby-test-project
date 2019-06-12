import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SidebarHeading = ({ title, subtitle }) => (
  <div className="sidebar-heading">
    <h2 className="sidebar-heading__title">{title}</h2>
    <h3 className="sidebar-heading__subtitle">{subtitle}</h3>
  </div>
);

export default SidebarHeading;
