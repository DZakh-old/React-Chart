import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectModes, selectCurMode } from '../../redux/mode/mode.selectors';

import './mode-switcher.styles.scss';

import ModeItem from '../mode-item';

const ModeSwitcher = ({ modes, curMode }) => (
  <div className="mode-switcher">
    {modes
      .map(mode => {
        const isActive = curMode.id === mode.id;
        return <ModeItem key={mode.id} mode={mode} active={isActive} />;
      })
      .reduce((prev, curr, idx) => [
        prev,
        <div key={-idx} className="mode-switcher__separator"></div>,
        curr
      ])}
  </div>
);

const mapStateToProps = createStructuredSelector({
  modes: selectModes,
  curMode: selectCurMode
});

export default connect(mapStateToProps)(ModeSwitcher);
