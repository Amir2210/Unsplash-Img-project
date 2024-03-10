import axios from 'axios';

let customFetch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`,
})

export default customFetch