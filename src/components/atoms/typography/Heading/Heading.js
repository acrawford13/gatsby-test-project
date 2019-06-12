import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  ${props => props.theme.typography.heading.l};
  text-align: center;
  margin: 0;
  position: relative;
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  font-weight: 500;
  color: ${props => props.theme.colors.n800};
  &::after {
    content: '';
    display: inline-block;
    width: 10rem;
    height: 0.4rem;
    background-color: ${props => props.theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export default Heading;
