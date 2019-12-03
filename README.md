# React-Chart
A small React App, that was done as a test task for a job. It shows a chart of some data with ability to switch between day, week and month modes. Data takes from json, that imitates server's response. I wrote special script to generate the json and fill it with random numbers for every hour in a month period. To start the script write the following command: `npm run new-data`.

## Technologies

- React
- Redux
- BEM-React
- ApexCharts.js

### Afterwords
Unwittingly I misread the task and instead of day, month and year modes I did day, week and month ones. But I did the project flexible enough and to fix the small issue the only thing to do is to adjust the `mode.data.js` file and increase number of generated elements by `chart.json-generator.js`.

