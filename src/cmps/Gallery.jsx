import { useFetchPhotos } from '../service/GetPhotos'

export function Gallery() {
  const { isLoading, data, isError, error } = useFetchPhotos()
  // console.log(data)
  if (!data) return <div>Loading...</div>
  if (data.isError) return <h2>There was an error...</h2>
  const results = data.data.results
  if (!results.length) return <h4>No results founds...</h4>
  return (
    <section className='image-container'>
      {results.map(img => <img className='img' key={img.id} src={img.links.download} alt={img.alt_description}></img>)}
    </section>
  )
}