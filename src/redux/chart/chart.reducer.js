import rowData from './chart.data.json';

const computedStyles = getComputedStyle(document.documentElement);
const lineThikness = ~~computedStyles.getPropertyValue('--switcher-line-thickness').slice(0, -2);
const strokeClr = computedStyles.getPropertyValue('--brand-clr').trim();

const initialState = {
  /* Without series */
  defaultChartProps: {
    options: {
      chart: {
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        animations: {
          enabled: false
        }
      },
      tooltip: {
        enabled: false
      },
      stroke: {
        width: lineThikness,
        colors: [strokeClr],
        curve: 'smooth',
        lineCap: 'round'
      }
    },
    type: 'line',
    width: 700
  },
  rowData
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chartReducer;
