import axios from 'axios';

const instance = axios.create({ baseURL: 'https://burger-builder-74139.firebaseio.com/' });

export default instance;
