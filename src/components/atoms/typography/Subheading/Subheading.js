import React from 'react';
import styled from 'styled-components';

const StyledSubheading = styled.h2`
  ${props => props.theme.typography.heading.l};
  text-align: center;
  margin: 0;
  font-weight: 300;
  color: ${props => props.theme.colors.n800};
`;

const Subheading = ({ children }) => <StyledSubheading>{children}</StyledSubheading>;

export default Subheading;
