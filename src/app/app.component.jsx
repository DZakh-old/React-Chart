import React from 'react';

import './app.styles.scss';

import MainPage from '../pages/main/main-page.component';

import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

const App = () => (
  <div className="app">
    <Header />
    <MainPage />
    <Footer />
  </div>
);

export default App;
