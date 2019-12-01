import { withBemMod } from '@bem-react/core';
import { cnModeItem } from '../mode-item';

import './mode-item_active.scss';

export const ModeItemActive = withBemMod(cnModeItem(), { active: true });
