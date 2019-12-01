import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectModes, selectCurModeId } from '../../redux/mode/mode.selectors';

import './mode-switcher.styles.scss';

import ModeItem from '../mode-item';

const ModeSwitcher = ({ modes, curModeId }) => (
  <div className="mode-switcher">
    {modes
      .map(mode => {
        const isActive = curModeId === mode.id;
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
  curModeId: selectCurModeId
});

export default connect(mapStateToProps)(ModeSwitcher);
