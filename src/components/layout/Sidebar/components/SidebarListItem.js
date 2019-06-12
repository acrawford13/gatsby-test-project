import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.n800};
  padding: ${props => props.theme.spacing.m} 0;
  display: block;
  border-bottom: 1px solid ${props => props.theme.colors.n200};
  ${props => props.theme.typography.heading.s};
`;

const SidebarListItem = ({ link, children }) => (
  <li>
    <StyledLink href={`#${children}`}>{children}</StyledLink>
  </li>
);

export default SidebarListItem;
