import React from 'react';
// import { cn } from '@bem-react/classname';

import './app.styles.scss';

import Header from '../components/header/header.component';

// const cnApp = cn('app');

const App = () => (
  <div className="app">
    <Header />
    <main className="app__main">Chart</main>
    <footer className="app__footer">Author</footer>
  </div>
);

export default App;
