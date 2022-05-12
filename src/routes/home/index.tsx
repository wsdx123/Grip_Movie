import { useMount } from 'react-use'
import { getMovieWhatISearchApi } from 'services/gripMovie'
import { useRecoil } from 'hooks/state'
import { movieDataState } from 'states/movie'
import SearchBar from 'components/searchBar'
import MovieItem from 'components/movieItem'
import styles from './home.module.scss'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

const Home = () => {
  const [mData, setMData] = useRecoil(movieDataState)

  useMount(() => {
    getMovieWhatISearchApi({
      apikey: API_KEY,
      s: 'iron',
      page: 1,
    }).then((res) => {
      setMData(res.data)
    })
  })
  if (!mData) return null

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div>
        {mData.Response === 'True' ? (
          <ul>
            {mData.Search.map((_el, i): JSX.Element => {
              const mItemKey = `movieData__${i}`
              return <MovieItem key={mItemKey} index={i} />
            })}
          </ul>
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default Home
