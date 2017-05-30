import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export {getSensorTemps};
var header = {
  headers: { Authorization: `Bearer ${getAccessToken()}` }
};

function getSensorTemps() {
  const url = `${BASE_URL}/api/sensors`;
  return axios.get(url, header).then(response => response.data);
}

function getSensorItems(){
  const url = `${BASE_URL}/api/sensors`;
  return axios.get(url, header).then(response => response.data);
}

function postNewSensor(data){
  const url = `${BASE_URL}/api/Sensor`;
  return axios.post(url, data, header).then(response => response.data);
}
