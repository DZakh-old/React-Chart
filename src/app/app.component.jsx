import React from 'react';

import './app.styles.scss';

import HomePage from '../pages/home/home-page.component';

import Header from '../components/header/header.component';

const App = () => (
  <div className="app">
    <Header />
    <HomePage />
    <footer className="app__footer">Author</footer>
  </div>
);

export default App;
