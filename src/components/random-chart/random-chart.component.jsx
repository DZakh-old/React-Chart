import React from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDefaultChartProps, selectRowData } from '../../redux/chart/chart.selectors';
import { selectCurMode } from '../../redux/mode/mode.selectors';

import { getChartDataByMode } from '../../utils/utils.functions';

import './random-chart.styles.scss';

const RandomChart = ({ defaultChartProps, rowData, curMode }) => {
  const chartData = getChartDataByMode(rowData, curMode);
  return (
    <div className="random-chart">
      <h2 className="random-chart__title">Chart with random numbers by hour</h2>
      <Chart series={[{ data: chartData || [] }]} {...defaultChartProps} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  defaultChartProps: selectDefaultChartProps,
  rowData: selectRowData,
  curMode: selectCurMode
});

export default connect(mapStateToProps)(RandomChart);
