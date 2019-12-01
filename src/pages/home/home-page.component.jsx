import React from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectChartProps } from '../../redux/chart/chart.selectors';

import './home-page.styles.scss';

const HomePage = ({ chartProps }) => (
  <main className="home-page">
    <Chart {...chartProps} />
  </main>
);

const mapStateToProps = createStructuredSelector({
  chartProps: selectChartProps
});

export default connect(mapStateToProps)(HomePage);
