import axios from 'axios';
import Config from 'react-native-config';
console.log('CONFIG', Config);
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
