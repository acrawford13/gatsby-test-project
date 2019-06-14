import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../components/theme/globalStyle';
import * as theme from '../../components/theme/theme';

import SEO from '../../components/seo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  width: 100%;
`;

const Panel = styled.div`
  width: 50%;
  box-shadow: ${props => props.theme.boxShadow.m};
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.4rem;
  padding: ${props => props.theme.spacing.m};
  text-align: center;
  max-width: 50rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Wrapper>
        <Panel>
          <SEO title="404: Not found" />
          <h1>Not found</h1>
          <p>The page you're looking for could!! be found</p>
        </Panel>
      </Wrapper>
    </>
  </ThemeProvider>
);

export default NotFoundPage;
