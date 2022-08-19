import { useEffect, useState } from 'react'
import { useMount } from 'react-use'
import { cx } from 'styles'
import store from 'store'

import { favoriteDataState } from 'states/movie'
import { useRecoil } from 'hooks/state'

import styles from './movieItem.module.scss'
import { HeartIcon } from 'assets/svgs'

interface Props {
  poster: string
  title: string
  year: string
  type: string
  imdbID: string
}

const MovieItem = (props: Props) => {
  const [favData, setFavData] = useRecoil(favoriteDataState)

  const [selectedFavorite, setSelectedFavorite] = useState(false)
  const { poster, title, year, type, imdbID }: Props = props
  const temp1 = favData.filter((item) => item.imdbID === imdbID)

  const handleModal = () => {
    if (selectedFavorite) {
      setFavData((prev) => prev.filter((v) => v.imdbID !== imdbID))
      setSelectedFavorite((prev) => !prev)
    } else {
      setFavData((prev) => [...prev, props])
      setSelectedFavorite((prev) => !prev)
    }
  }

  useMount(() => {
    if (temp1.length === 0) return
    setSelectedFavorite(true)
  })

  useEffect(() => {
    store.set('favorite', favData)
  }, [favData])

  return (
    <li className={styles.container}>
      <div className={styles.item}>
        <img src={poster} alt={title} />
        <div className={styles.infor}>
          <div>
            <h1>{title}</h1>
            <span>{year}</span>
          </div>
          <span>{`Type : ${type}`}</span>
        </div>
      </div>
      <button type='button' onClick={handleModal}>
        <HeartIcon className={cx(styles.heartIcon, { [styles.selectFavorite]: selectedFavorite })} />
      </button>
    </li>
  )
}

export default MovieItem
