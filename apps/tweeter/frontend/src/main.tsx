import '@fontsource/fira-sans/latin-300.css';
import '@fontsource/fira-sans/latin-400.css';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import App from './app/app';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font: 400 16px 'Fira Sans', sans-serif;
  }

  body {
    width: 100%;
    min-height: 100vh;
  }

  #root {
    height: 100vh;
  }
`

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/tweeter">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
