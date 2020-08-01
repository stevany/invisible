const axios = require('axios').default;

const get = async(url) => {
  try {
    const response = await axios.get(url);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      status: error.response.status,
      error: error.response.data
    }
  }
}
module.exports = {
  get
};