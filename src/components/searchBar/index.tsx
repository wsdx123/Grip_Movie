import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoil } from 'hooks/state'

import { apiInputState, movieDataState, pageState } from 'states/movie'
import { getMovieWhatISearchApi } from 'services/gripMovie'
import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [inputChange, setInputChange] = useState('')
  const [, setApiInput] = useRecoil(apiInputState)
  const [, setMData] = useRecoil(movieDataState)
  const [pages] = useRecoil(pageState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setApiInput(inputChange)
    getMovieWhatISearchApi({
      s: inputChange,
      page: pages,
    }).then((res) => setMData(res.data))
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
