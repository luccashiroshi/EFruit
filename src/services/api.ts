import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.fruityvice.com/'
})

export default api