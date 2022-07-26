import { useRecoil } from 'hooks/state'
import { useInView } from 'react-intersection-observer'
import * as _ from 'lodash'

import { apiInputState, movieDataState, pageState } from 'states/movie'
import MovieItem from 'components/movieItem'
import FavModal from 'components/modal'

import styles from './home.module.scss'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { getMovieWhatISearchApi } from 'services/gripMovie'
import Loading from './Loading'
import NoSearch from './NoSearch'
import { SearchIcon } from 'assets/svgs'

const Home = () => {
  const [inputChange, setInputChange] = useState('')
  const [mData, setMData] = useRecoil(movieDataState)
  const [apiInput, setApiInput] = useRecoil(apiInputState)
  const [pages, setPages] = useRecoil(pageState)
  const [ref, inView] = useInView()

  // const getNextPageData = (nextPage: number) => {
  //   getMovieWhatISearchApi({
  //     s: apiInput,
  //     page: nextPage,
  //   }).then((res) =>
  //     setMData((prev) => ({
  //       Search: prev.Search.concat(res.data.Search),
  //       totalResults: res.data.totalResults,
  //       Response: res.data.Response,
  //     }))
  //   )
  // }
  useEffect(() => {
    if (inView) {
      console.log(333)
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
      }).then((res) => console.log(_.uniqBy(res.Search, 'imdbID')))
    }

    // else {
    //   console.log(222)
    //   getMovieWhatISearchApi({
    //     s: apiInput,
    //     page: pages,
    //   }).then((res) =>
    //     setMData((prev) => ({
    //       Search: prev.Search.concat(res.data.Search),
    //       totalResults: res.data.totalResults,
    //       Response: res.data.Response,
    //     }))
    //   )
    // }
  }, [apiInput, pages, setMData])
  // console.log(mData)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if (inputChange === '') return
    setApiInput(inputChange)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputChange(e.currentTarget.value)
  }
  // console.log(inView)

  // if (!mData) return null

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
