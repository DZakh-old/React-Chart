export const getFormattedDate = (date, options) => {
  const lang = 'en-US';
  return new Intl.DateTimeFormat(lang, options).format(date);
};

export const getLabel = (element, idx, curMode) => {
  const condition = idx % ~~(curMode.showHours / curMode.labels) === 0;
  return condition ? getFormattedDate(element.date, curMode.intlOptions) : '';
};

export const getChartDataByMode = (rowData, curMode) => {
  const data = rowData.slice(-curMode.showHours);
  const chartData = data.map((element, idx) => {
    return {
      x: getLabel(element, idx, curMode),
      y: element.value
    };
  });
  return chartData;
};
