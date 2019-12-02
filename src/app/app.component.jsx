import React from 'react';

import './app.styles.scss';

import MainPage from '../pages/main/main-page.component';

import Header from '../components/header/header.component';

const App = () => (
  <div className="app">
    <Header />
    <MainPage />
    <footer className="app__footer">Author</footer>
  </div>
);

export default App;
