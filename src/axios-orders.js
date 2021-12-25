import axios from 'axios';

const instance = axios.create({
    baseURL: "https://my-burger-builder-app-b26eb-default-rtdb.firebaseio.com/"
});


export default instance;