require('dotenv').config();
const axios = require('./../common/axios');
const HttpStatusCode = require('http-status-codes');
const fs = require('fs');
const moment = require('moment');
const url = process.env.WEATHER_URL;
const apiKey = process.env.WEATHER_API_KEY;

const getWeather = async(fileName, params) => {
  let result = '';
  const pattern = /^[0-9]+$/g;
  let successTotal = 0;
  let errorTotal = 0;

  for await (const param of params) {
    let query = 'q';
    const modifiedParams = replaceDiacritics(param);
    if (pattern.test(Number(param))) query = 'zip';
    const urlModified = `${url}${query}=${modifiedParams.trim()}&appid=${apiKey}`;
    const response = await axios.get(urlModified);
    const { data, error } = response;

    if (error) {
      result += `${modifiedParams} ${error.message}\n`;
      errorTotal += 1;
    } else {
      const weather = data.weather[0].description;
      const timezone = Math.round(data.timezone / 3600);
      const { temp, pressure, humidity } = data.main;

      const currentDate = moment().utc().add(timezone, 'hours').format('YYYY-MM-DD HH:mm:ss');
      const timezoneString = timezone > 0 ? `GMT+${timezone}` : `GMT${timezone}`;

      result += `${data.name} weather: ${weather}, temp: ${temp}, pressure: ${pressure}, humidity: ${humidity}, current date: ${currentDate}, timezone: ${timezoneString}\n`;
      successTotal += 1;
    }
  }

  const file = fs.createWriteStream(`${fileName}.txt`);
  file.write(result);
  file.end();

  return {
    status: HttpStatusCode.OK,
    data: {
      success: successTotal,
      error: errorTotal,
    }
  };
}

const replaceDiacritics = (str) => {
  const diacritics = [
    { char: 'A', base: /[\300-\306]/g },
    { char: 'a', base: /[\340-\346]/g },
    { char: 'E', base: /[\310-\313]/g },
    { char: 'e', base: /[\350-\353]/g },
    { char: 'I', base: /[\314-\317]/g },
    { char: 'i', base: /[\354-\357]/g },
    { char: 'O', base: /[\322-\330]/g },
    { char: 'o', base: /[\362-\370]/g },
    { char: 'U', base: /[\331-\334]/g },
    { char: 'u', base: /[\371-\374]/g },
    { char: 'N', base: /[\321]/g },
    { char: 'n', base: /[\361]/g },
    { char: 'C', base: /[\307]/g },
    { char: 'c', base: /[\347]/g }
  ];
  diacritics.forEach(function(letter) {
    str = str.replace(letter.base, letter.char);
  });
  return str;
};
module.exports = {
  getWeather
};