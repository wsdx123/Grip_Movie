import { DraggableProvided } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { useMount } from 'react-use'
import { cx } from 'styles'
import store from 'storejs'

import { favoriteDataState } from 'states/movie'
import { ISearchItem } from 'types/home.d'
import { useRecoil } from 'hooks/state'

import styles from './movieItem.module.scss'
import { HeartIcon } from 'assets/svgs'

interface Props {
  Item: ISearchItem
  innerProvided?: DraggableProvided
}

const MovieItem = ({ Item, innerProvided }: Props) => {
  const [favData, setFavData] = useRecoil(favoriteDataState)
  const [selectedFavorite, setSelectedFavorite] = useState(false)

  const isFavorite = favData.filter((i) => i.imdbID === Item.imdbID)

  const handleModal = () => {
    if (selectedFavorite) {
      setFavData((prev) => prev.filter((v) => v.imdbID !== Item.imdbID))
      setSelectedFavorite((prev) => !prev)
    } else {
      setFavData((prev) => [...prev, Item])
      setSelectedFavorite((prev) => !prev)
    }
  }

  useMount(() => {
    if (isFavorite.length === 0) return
    setSelectedFavorite(true)
  })

  useEffect(() => {
    store.set('favorite', favData)
  }, [favData])

  return (
    <li
      ref={innerProvided?.innerRef}
      {...innerProvided?.draggableProps}
      {...innerProvided?.dragHandleProps}
      className={styles.container}
    >
      <div className={styles.item}>
        <img src={Item.Poster} alt={Item.Title} />
        <div className={styles.infor}>
          <div>
            <h1>{Item.Title}</h1>
            <span>{Item.Year}</span>
          </div>
          <span>{`Type : ${Item.Type}`}</span>
        </div>
      </div>
      <button type='button' onClick={handleModal}>
        <HeartIcon className={cx(styles.heartIcon, { [styles.selectFavorite]: selectedFavorite })} />
      </button>
    </li>
  )
}

export default MovieItem
