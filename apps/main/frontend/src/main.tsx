import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/fira-sans/latin-400.css';
import '@fontsource/fira-sans/latin-300.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  html {
    overflow-y: auto;
  }

  html, body {
    width: 100%;
    height: 100%;
    font: 400 16px 'Fira Sans', sans-serif;
  }

  body {
    background-color: #fefefe;
    color: #4b4b4b;
  }

  #root {
    height: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
