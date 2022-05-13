import store from 'store'
import { useRecoil } from 'hooks/state'
import { favoriteDataState } from 'states/movie'
import MovieItem from 'components/movieItem'

import styles from './favorite.module.scss'
import { useMount } from 'react-use'

const Favorite = () => {
  const [favData] = useRecoil(favoriteDataState)

  useMount(() => {
    store.set('favorite', favData)
  })

  return (
    <div className={styles.container}>
      <div>
        {favData.length !== 0 ? (
          <ul className={styles.movielist}>
            {favData.map((el) => {
              return (
                <MovieItem
                  key={el.imdbID}
                  poster={el.poster}
                  title={el.title}
                  year={el.year}
                  type={el.type}
                  imdbID={el.imdbID}
                />
              )
            })}
          </ul>
        ) : (
          <div>즐겨찾기를 추가해주세요.</div>
        )}
      </div>
    </div>
  )
}

export default Favorite
