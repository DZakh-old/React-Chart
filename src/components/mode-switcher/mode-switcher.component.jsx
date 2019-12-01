import React from 'react';

import './mode-switcher.styles.scss';

const displayModes = ['day', 'week', 'month'];

const ModeSwitcher = () => (
  <div className="mode-switcher">
    {displayModes
      .map(mode => <div className="mode-switcher__mode">{mode}</div>)
      .reduce((prev, curr) => [prev, <div className="mode-switcher__separator"></div>, curr])}
  </div>
);

export default ModeSwitcher;
