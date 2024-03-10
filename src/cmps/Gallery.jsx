import { useFetchPhotos } from '../service/GetPhotos'
import { Hourglass } from 'react-loader-spinner'
export function Gallery() {
  const { isLoading, data, isError, error } = useFetchPhotos()
  if (!data) return (
    <div className='loader'>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  )
  if (data.isError) return <h2>There was an error...</h2>
  const results = data.data.results
  if (!results.length) return <h4>No results founds...</h4>
  return (
    <section className='image-container'>
      {results.map(img => <img className='img' key={img.id} src={img.links.download} alt={img.alt_description}></img>)}
    </section>
  )
}