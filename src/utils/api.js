import axios from 'axios';
import Config from 'react-native-config';

const apiCall = async ({url, params}) => {
  const request = axios({
    baseURL: 'https://api.themoviedb.org/3/',
    url: url,
    method: 'GET',
    params: {
      api_key: '8571934db346822c0fb8d3724b254baa',
      language: 'en',
      page: 1,
      ...params,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(oResp => oResp)
    .catch(oErr => console.log(oErr));

  return request;
};

export default apiCall;
