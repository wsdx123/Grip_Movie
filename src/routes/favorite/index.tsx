import store from 'store'

import MovieItem from 'components/movieItem'
import styles from './favorite.module.scss'
import { IFavoriteArr } from 'types/favorite.d'
import { useMount } from 'react-use'
import FavModal from 'components/modal'
import { useState } from 'react'

const Favorite = () => {
  const [ifavData, setIFavData] = useState<IFavoriteArr>([])

  useMount(() => {
    setIFavData(store.get('favorite'))
  })

  console.log(ifavData)

  if (ifavData.length === 0) return <div>즐겨찾기를 추가해주세요.</div>

  return (
    <div className={styles.container}>
      <div>
        {ifavData && (
          <ul className={styles.movielist}>
            {ifavData.map((el) => {
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
        )}
        {/* {ifavData?.length !== 0 ? (
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
        )} */}
      </div>
      <FavModal />
    </div>
  )
}

export default Favorite
