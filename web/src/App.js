import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"></link>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
