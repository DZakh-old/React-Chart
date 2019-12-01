import React from 'react';

import { ReactComponent as Logo } from './assets/chart.svg';

import './app-logo.styles.scss';

const AppLogo = () => (
  <div className="app-logo">
    <Logo className="app-logo__icon" />
    <h1 className="app-logo__title">React Chart</h1>
  </div>
);

export default AppLogo;
