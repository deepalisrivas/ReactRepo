import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-1c49d.firebaseio.com'
});

export default instance;
