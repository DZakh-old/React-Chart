import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectModes, selectCurModeId } from '../../redux/mode/mode.selectors';

import './mode-switcher.styles.scss';

const ModeSwitcher = ({ modes, curModeId }) => (
  <div className="mode-switcher">
    {modes
      .map(mode => (
        <div
          key={mode.id}
          className={`mode-switcher__mode ${curModeId === mode.id ? 'active' : ''}`}
        >
          {mode.text}
        </div>
      ))
      .reduce((prev, curr) => [prev, <div className="mode-switcher__separator"></div>, curr])}
  </div>
);

const mapStateToProps = createStructuredSelector({
  modes: selectModes,
  curModeId: selectCurModeId
});

export default connect(mapStateToProps)(ModeSwitcher);
