import { useRecoil } from 'hooks/state'
import { useInView } from 'react-intersection-observer'

import { apiInputState, movieDataState, pageState } from 'states/movie'
import SearchBar from 'components/searchBar'
import MovieItem from 'components/movieItem'
import FavModal from 'components/modal'

import styles from './home.module.scss'
import { useEffect } from 'react'
import { getMovieWhatISearchApi } from 'services/gripMovie'
import Loading from './Loading'
import NoSearch from './NoSearch'

const Home = () => {
  const [mData, setMData] = useRecoil(movieDataState)
  const [apiInput] = useRecoil(apiInputState)
  const [, setPages] = useRecoil(pageState)
  const [ref, inView] = useInView()

  const getNextPageData = (nextPage: number) => {
    getMovieWhatISearchApi({
      s: apiInput,
      page: nextPage,
    }).then((res) =>
      setMData((prev) => ({
        Search: prev.Search.concat(res.data.Search),
        totalResults: res.data.totalResults,
        Response: res.data.Response,
      }))
    )
  }

  useEffect(() => {
    if (inView) {
      setPages((prev) => {
        const nextPage = prev + 1
        getNextPageData(nextPage)
        return nextPage
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, setPages])

  if (!mData) return null

  console.log(mData)

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div>
        <NoSearch isView={mData.Response} />
        {mData.Response === 'True' && (
          <ul className={styles.movielist}>
            {mData.Search.map((el) => {
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
