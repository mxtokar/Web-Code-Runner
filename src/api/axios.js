import axios from 'axios';
const BASE_URL = 'https://programcompilapi.azurewebsites.net/Compilation';

export default axios.create({
  baseURL: BASE_URL
});

