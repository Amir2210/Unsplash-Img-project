import { useQuery } from '@tanstack/react-query'
import customFetch from './util'
import { useGlobalContext } from '../AppContext'

export const useFetchPhotos = () => {
  const { searchInput } = useGlobalContext();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['photos', searchInput],
    queryFn: async () => {
      try {
        const url = `https://api.unsplash.com/search/photos?client_id=dj8hCr9csIJHEDRUJqBj1-QzTUx8hpLp18PUYMTVhdY&query=${searchInput}`;
        const response = await customFetch.get(url);
        return response;
      } catch (error) {
        throw new Error('Failed to fetch photos')
      }
    }
  })

  return { isLoading, data, isError, error }
}
