
export function SearchForm() {
  function handleSubmit(ev) {
    ev.preventDefault()
    const searchValue = ev.target.elements.search.value
    if (!searchValue) return
    console.log(searchValue)
  }
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='form-input search-input'
          type="text"
          placeholder='cat'
          name='search'
        />
        <button type='submit' className='btn'>search</button>
      </form>
    </section>
  )
}