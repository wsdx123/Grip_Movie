import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <form>
        <input className={styles.inputbox} type='text' />
        <button type='button'>
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
