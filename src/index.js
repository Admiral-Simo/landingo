import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "rgb(0, 51, 51, 0.94)",
  },
  mobile: '768px'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
  </React.StrictMode>
);

