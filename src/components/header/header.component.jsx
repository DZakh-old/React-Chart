import React from 'react';

import AppLogo from '../app-logo/app-logo.component';
import ModeSwitcher from '../mode-switcher/mode-switcher.component';

import './header.styles.scss';

const Header = () => (
  <header className="header">
    <AppLogo />
    <ModeSwitcher />
  </header>
);

export default Header;
