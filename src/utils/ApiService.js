import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:52369';

export {getSensorTemps};
var header = {

  headers: { "Content-Type": "application/x-www-form-urlencoded"
              }
};

function getSensorTemps() {
  const url = `${BASE_URL}/api/Sensor`;
  return axios.get(url, header).then(response => response.data);
}

export function registerUser(data) {
  const url = `${BASE_URL}/api/Account/Register`;
  console.log(data);
  return axios.post(url, header, {email: 'kappa1222@live.nl', password: 'Kappa123!', confirmpassword: 'Kappa123!'}).then(response => console.log(response.data)).catch();

}

export function loginUser(data){
  const url = `${BASE_URL}/api/Account/Login`;
  return axios.post(url, data).then(response => response.data);
}

/*function getSensorItems(){
  const url = `${BASE_URL}/api/sensors`;
  return axios.get(url, header).then(response => response.data);
}

function postNewSensor(data){
  const url = `${BASE_URL}/api/Sensor`;
  return axios.post(url, data, header).then(response => response.data);
}
*/
