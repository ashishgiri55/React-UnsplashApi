//rmZR9MqT2c6HQqWLaq1ftz3L7mnemwV-cfqbwTCy8c0


import axios from 'axios';


const api = axios.create({
baseURL:"https://api.unsplash.com/",
headers: {
    Authorization: 'Client-ID rmZR9MqT2c6HQqWLaq1ftz3L7mnemwV-cfqbwTCy8c0',
},
});
export default api;