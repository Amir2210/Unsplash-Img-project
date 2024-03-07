import { useFetchPhotos } from '../service/GetPhotos'

export function Gallery() {
  const { isLoading, data, isError, error } = useFetchPhotos()
  if (!data) return <div>Loading...</div>
  return (
    <section className='image-container'>
      {data.data.results.map(img => <img className='img' key={img.id} src={img.links.download}></img>)}
    </section>
  )
}