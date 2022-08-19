import { useEffect, useState } from 'react'

import { favoriteDataState } from 'states/movie'
import { IFavoriteArr } from 'types/favorite.d'
import { useRecoil } from 'hooks/state'

import MovieItem from 'components/movieItem'
import styles from './favorite.module.scss'

const Favorite = () => {
  const [ifavData, setIFavData] = useState<IFavoriteArr>([])
  const [favData] = useRecoil(favoriteDataState)

  useEffect(() => {
    setIFavData(favData)
  }, [favData])

  return (
    <div className={styles.container}>
      <div>
        {ifavData.length === 0 && <div>즐겨찾기를 추가해주세요.</div>}
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
      </div>
    </div>
  )
}

export default Favorite
