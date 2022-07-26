import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRecoil } from 'hooks/state'
import * as _ from 'lodash'

import { apiInputState, movieDataState, pageState } from 'states/movie'
import { getMovieWhatISearchApi } from 'services/gripMovie'
import { SearchIcon } from 'assets/svgs'

import MovieItem from 'components/movieItem'
import FavModal from 'components/modal'
import NoSearch from './NoSearch'
import Loading from './Loading'
import styles from './home.module.scss'

const Home = () => {
  const [inputChange, setInputChange] = useState('')
  const [mData, setMData] = useRecoil(movieDataState)
  const [apiInput, setApiInput] = useRecoil(apiInputState)
  const [pages, setPages] = useRecoil(pageState)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setPages((prev) => prev + 1)
    }
  }, [inView, setPages])

  useEffect(() => {
    if (pages === 1) {
      getMovieWhatISearchApi({
        s: apiInput,
        page: 1,
      }).then((res) => setMData(_.uniqBy(res.Search, 'imdbID')))
    } else {
      getMovieWhatISearchApi({
        s: apiInput,
        page: pages,
      }).then((res) => setMData((prev) => _.uniqBy(prev.concat(res.Search), 'imdbID')))
    }
  }, [apiInput, pages, setMData])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setApiInput(inputChange)
    setPages(1)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputChange(e.currentTarget.value)
  }

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input value={inputChange} onChange={handleChange} className={styles.inputbox} type='text' />
        <button type='submit' className={styles.submitBtn}>
          <SearchIcon />
        </button>
      </form>
      <div>
        <NoSearch isView={mData.length} />
        {mData.length !== 0 && (
          <ul className={styles.movielist}>
            {mData.map((el) => {
              return (
                <MovieItem
                  key={el.imdbID}
                  poster={el.Poster}
                  title={el.Title}
                  year={el.Year}
                  type={el.Type}
                  imdbID={el.imdbID}
                />
              )
            })}
            <div ref={ref}>
              <Loading />
            </div>
          </ul>
        )}
        <FavModal />
      </div>
    </div>
  )
}

export default Home
