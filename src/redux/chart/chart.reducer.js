import rowData from './chart.data.json';

const getFormattedDate = (date, options) => {
  const lang = 'en-US';
  return new Intl.DateTimeFormat(lang, options).format(date);
};

const makeChart = data => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  const formattedDate = getFormattedDate(new Date(), options);
  console.log(formattedDate);
  // return data.map(item => [getFormattedDate(item.date, options), item.value]).slice(0, 14);
  return data.map(item => ({ x: getFormattedDate(item.date, options), y: item.value })).slice(-24);
};

const initialState = {
  chartProps: {
    options: {
      chart: {
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      tooltip: {
        enabled: false
      }
    },
    series: [
      {
        data: makeChart(rowData)
      }
    ],
    type: 'line',
    width: 700
  }
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chartReducer;
