import { useQuery } from '@tanstack/react-query'
import customFetch from './util'


export const useFetchPhotos = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['photos'],
    queryFn: async () => await customFetch.get('/')
  }
  )
  return { isLoading, data, isError, error }
}