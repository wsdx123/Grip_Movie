import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoil } from 'hooks/state'

import { movieDataState } from 'states/movie'
import { getMovieWhatISearchApi } from 'services/gripMovie'
import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [inputChange, setInputChange] = useState('')
  const [, setMData] = useRecoil(movieDataState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getMovieWhatISearchApi({
      apikey: process.env.REACT_APP_MOVIE_API_KEY,
      s: inputChange,
      page: 1,
    }).then((res) => {
      setMData(res.data)
    })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputChange(e.currentTarget.value)
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input value={inputChange} onChange={handleChange} className={styles.inputbox} type='text' />
      <button type='submit' className={styles.submitBtn}>
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchBar
