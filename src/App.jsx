import { Gallery } from './cmps/Gallery'
import { SearchForm } from './cmps/SearchForm'
import { ThemeToggle } from './cmps/ThemeToggle'

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}
export default App
