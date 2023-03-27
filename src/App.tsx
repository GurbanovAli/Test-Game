import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Container from './components/Container/Container';
import OptionBlock from './components/OptionsBlock/OptionBlock';
import { Theme } from './theme/themeConfig';

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

export const App = (): JSX.Element => (
  <ThemeProvider theme={Theme}>
    <StyledApp>
      <OptionBlock />
      <Container />
    </StyledApp>
  </ThemeProvider>
);
