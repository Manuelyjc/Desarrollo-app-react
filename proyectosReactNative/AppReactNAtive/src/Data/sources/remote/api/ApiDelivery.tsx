import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.128.3:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }

