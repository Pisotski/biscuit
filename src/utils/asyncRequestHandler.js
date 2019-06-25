import axios from 'axios';

export const getCallApi = apiUrl => axios.get(apiUrl)
  .then(data => Promise.resolve(data.data))
  .catch(error => Promise.reject(console.log('axios get error '.red, error)));

export const postCallApi = (apiUrl, body) => axios.post(apiUrl, body)
  .then(data => Promise.resolve(data.data))
  .catch(error => Promise.reject(error));
