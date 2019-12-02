import React from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDefaultChartProps } from '../../redux/chart/chart.selectors';

import './random-chart.styles.scss';

const RandomChart = ({ defaultChartProps }) => {
  const series = [{ data: [] }];
  return (
    <div className="random-chart">
      <h2 className="random-chart__title">Chart with random numbers by hour</h2>
      <Chart series={series} {...defaultChartProps} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  defaultChartProps: selectDefaultChartProps
});

export default connect(mapStateToProps)(RandomChart);
