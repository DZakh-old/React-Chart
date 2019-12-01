import React from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import { switchMode } from '../../redux/mode/mode.actions';

import './mode-item.styles.scss';

export const cnModeItem = cn('mode-item');

const ModeItem = ({ mode, className, switchMode }) => (
  <button className={cnModeItem(null, [className])} onClick={() => switchMode(mode)}>
    {mode.text}
  </button>
);

const mapDispatchToProps = dispatch => ({
  switchMode: mode => dispatch(switchMode(mode))
});

export default connect(null, mapDispatchToProps)(ModeItem);
