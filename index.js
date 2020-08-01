const { getWeather } = require('./src/weather');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = [];
let fileName = '';
const start = async() => {
  for await (const line of readline) {
    input = line.split(',');
    const cleanInput = input[0].replace(/[./]/g, "").split(' ');
    fileName = cleanInput.shift();
    input[0] = cleanInput.join(' ');
    const result = await getWeather(fileName, input);
    console.log(`Request has finished writing, result has been saved in ${fileName}`, result.data);
  }
}

start();

module.exports = {
  start
};