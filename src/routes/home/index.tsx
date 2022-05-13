import { useRecoil } from 'hooks/state'

import { modalState, movieDataState } from 'states/movie'
import SearchBar from 'components/searchBar'
import MovieItem from 'components/movieItem'
import FavModal from 'components/modal'

import styles from './home.module.scss'

const Home = () => {
  const [mData] = useRecoil(movieDataState)
  const [modalOpen] = useRecoil(modalState)

  if (!mData) return null

  return (
    <div className={styles.container}>
      {modalOpen ? <FavModal /> : null}
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div>
        {mData.Response === 'True' ? (
          <ul className={styles.movielist}>
            {mData.Search.map((_el, i) => {
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
