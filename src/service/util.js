import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos?client_id=dj8hCr9csIJHEDRUJqBj1-QzTUx8hpLp18PUYMTVhdY&query=otter',
})

export default customFetch