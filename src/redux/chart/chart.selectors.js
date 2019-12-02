import { createSelector } from 'reselect';

const selectChart = state => state.chart;

export const selectDefaultChartProps = createSelector(
  [selectChart],
  chart => chart.defaultChartProps
);
