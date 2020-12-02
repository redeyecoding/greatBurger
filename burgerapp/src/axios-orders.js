import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://recburgerapp.firebaseio.com/'
});

export default instance;