import { useRecoil } from 'hooks/state'
import { useInView } from 'react-intersection-observer'

import { movieDataState } from 'states/movie'
import SearchBar from 'components/searchBar'
import MovieItem from 'components/movieItem'
import FavModal from 'components/modal'

import styles from './home.module.scss'
import { useEffect, useState } from 'react'
import { getMovieWhatISearchApi } from 'services/gripMovie'

const Home = () => {
  const [mData] = useRecoil(movieDataState)
  const [pages, setPages] = useState(1)
  const [ref, inView] = useInView()

  if (!mData) return null

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div>
        {mData.Response === 'True' ? (
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
            <li ref={ref}>{inView.toString()}</li>
          </ul>
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
        <FavModal />
      </div>
    </div>
  )
}

export default Home
