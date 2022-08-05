import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.fruityvice.com/api/fruit/'
})

export default api