import store from 'store'

import MovieItem from 'components/movieItem'
import styles from './favorite.module.scss'
import { favoriteDataState } from 'states/movie'
import { useRecoil } from 'hooks/state'
import { useMount } from 'react-use'
import FavModal from 'components/modal'

const Favorite = () => {
  const [ifavData, setIFavData] = useRecoil(favoriteDataState)

  useMount(() => {
    setIFavData(store.get('favorite'))
  })

  return (
    <div className={styles.container}>
      <div>
        {ifavData?.length !== 0 ? (
          <ul className={styles.movielist}>
            {ifavData?.map((el) => {
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
      <FavModal />
    </div>
  )
}

export default Favorite
