import React from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectChartProps } from '../../redux/chart/chart.selectors';

import './random-chart.styles.scss';

const RandomChart = ({ chartProps }) => (
  <div className="random-chart">
    <h2>Chart with random numbers by hour</h2>
    <Chart {...chartProps} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  chartProps: selectChartProps
});

export default connect(mapStateToProps)(RandomChart);
