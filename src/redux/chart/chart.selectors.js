import { createSelector } from 'reselect';

const selectChart = state => state.chart;

export const selectChartProps = createSelector([selectChart], chart => chart.chartProps);
