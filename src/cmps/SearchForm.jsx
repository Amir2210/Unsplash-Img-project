import { useGlobalContext } from '../AppContext'

export function SearchForm() {
  const { onSearchImgs } = useGlobalContext()
  function handleSubmit(ev) {
    ev.preventDefault()
    const searchValue = ev.target.elements.search.value
    if (!searchValue) return
    onSearchImgs(searchValue)
  }
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='form-input search-input'
          type="text"
          placeholder='Otter'
          name='search'
        />
        <button type='submit' className='btn'>search</button>
      </form>
    </section>
  )
}