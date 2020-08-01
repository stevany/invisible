const axios = require('axios').default;
const axiosCommon = require('@common/axios');

describe('Axios', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should success get', async () => {
    axios.get = jest.fn().mockReturnValue({
      status: 200,
      data: {}
    });

    const result = await axiosCommon.get('/api');
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('status', 200);
  });

  it('should return error get', async () => {
    axios.get = jest.fn().mockImplementation(async () => {
      throw {
        response: {
          status: 400,
          error: {
            cod: 400,
            message: 'error'
          }
        }
      }
    });

    const result = await axiosCommon.get('/api');
    expect(result).toHaveProperty('error');
    expect(result).toHaveProperty('status', 400);
  });
});