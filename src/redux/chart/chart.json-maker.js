const fs = require('fs');

const HOURS_IN_DAY = 24;
const DAYS_IN_MONTH = 30;
const MILLISECONDS_IN_HOUR = 3.6e6;

const getNewDataElement = restNumOfElements => {
  const date = new Date() - MILLISECONDS_IN_HOUR * restNumOfElements;
  return {
    id: date,
    date: date,
    value: ~~(Math.random(10) * 100)
  };
};

const getRandomChartData = (restNumOfElements, curData = []) => {
  if (restNumOfElements !== 0) {
    return getRandomChartData(restNumOfElements - 1, [
      ...curData,
      getNewDataElement(restNumOfElements)
    ]);
  }
  return curData;
};

const numOfElements = HOURS_IN_DAY * DAYS_IN_MONTH;
const data = getRandomChartData(numOfElements);

const jsonData = JSON.stringify(data);

fs.writeFile('./src/redux/chart/chart.data.json', jsonData, function(err) {
  if (err) throw err;
  console.log('Saved!');
});
