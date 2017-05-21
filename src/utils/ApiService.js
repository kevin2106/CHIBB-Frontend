import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export {getSensorTemps};

function getSensorTemps() {
  const url = `${BASE_URL}/api/sensors`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}

function getSensorItems(){
  const url = `${BASE_URL}/api/sensors`
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}
