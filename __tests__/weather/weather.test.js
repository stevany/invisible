const axios = require('@common/axios');
const { getWeather } = require('@weather');
jest.mock('fs');

describe('Weather', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should success get weather', async () => {
    axios.get = jest.fn().mockReturnValue({
      status: 200,
      data: { "coord": { "lon": -74.01, "lat": 40.71 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base": "stations", "main": { "temp": 297.09, "feels_like": 300.16, "temp_min": 295.37, "temp_max": 298.71, "pressure": 1012, "humidity": 83 }, "visibility": 10000, "wind": { "speed": 1.5, "deg": 250 }, "clouds": { "all": 1 }, "dt": 1596256144, "sys": { "type": 1, "id": 4610, "country": "US", "sunrise": 1596275588, "sunset": 1596327085 }, "timezone": -14400, "id": 0, "name": "New York", "cod": 200 }
    });
    const params = ['New York'];
    const weather = await getWeather('weather', params);
    expect(weather).toHaveProperty('data');
    expect(weather).toHaveProperty('status', 200);
    expect(weather.data).toHaveProperty('success', 1);
    expect(weather.data).toHaveProperty('error', 0);
  });

  it('should success get weather with diacritics', async () => {
    axios.get = jest.fn().mockReturnValue({
      status: 200,
      data: { "coord": { "lon": -74.01, "lat": 40.71 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base": "stations", "main": { "temp": 297.09, "feels_like": 300.16, "temp_min": 295.37, "temp_max": 298.71, "pressure": 1012, "humidity": 83 }, "visibility": 10000, "wind": { "speed": 1.5, "deg": 250 }, "clouds": { "all": 1 }, "dt": 1596256144, "sys": { "type": 1, "id": 4610, "country": "US", "sunrise": 1596275588, "sunset": 1596327085 }, "timezone": -14400, "id": 0, "name": "New York", "cod": 200 }
    });
    const params = ['São Paulo'];
    const weather = await getWeather('weather', params);
    expect(weather).toHaveProperty('data');
    expect(weather).toHaveProperty('status', 200);
    expect(weather.data).toHaveProperty('success', 1);
    expect(weather.data).toHaveProperty('error', 0);
  });

  it('should failed get weather, invalid zip code', async () => {
    axios.get = jest.fn().mockReturnValue({
      status: 400,
      error: { code: 400, message: "invalid zip code" }
    });
    const params = ['1'];
    const weather = await getWeather('weather', params);
    expect(weather).toHaveProperty('data');
    expect(weather).toHaveProperty('status', 200);
    expect(weather.data).toHaveProperty('success', 0);
    expect(weather.data).toHaveProperty('error', 1);
  });

  it('should failed get weather, invalid city', async () => {
    axios.get = jest.fn().mockReturnValue({
      status: 400,
      error: { code: 400, message: "invalid city" }
    });
    const params = ['d'];
    const weather = await getWeather('weather', params);
    expect(weather).toHaveProperty('data');
    expect(weather).toHaveProperty('status', 200);
    expect(weather.data).toHaveProperty('success', 0);
    expect(weather.data).toHaveProperty('error', 1);
  });
});