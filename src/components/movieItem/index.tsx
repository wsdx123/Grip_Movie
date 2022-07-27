import { MouseEvent, useState } from 'react'
import { useRecoil } from 'hooks/state'

import { modalState, modalXState, modalYState } from 'states/movie'
import { HeartIcon, InfoIcon } from 'assets/svgs'
import styles from './movieItem.module.scss'
import { cx } from 'styles'

interface Props {
  poster: string
  title: string
  year: string
  type: string
  imdbID: string
}

const MovieItem = (props: Props) => {
  // const [, setFavModal] = useRecoil(modalState)
  // const [, setModalY] = useRecoil(modalYState)
  // const [, setModalX] = useRecoil(modalXState)
  const [selectedFavorite, setSelectedFavorite] = useState(false)
  const { poster, title, year, type, imdbID }: Props = props

  const handleModal = () => {
    // setFavModal({
    //   visible: true,
    //   data: props,
    // })
    // setModalY(e.clientY)
    // setModalX(e.clientX)

    setSelectedFavorite((prev) => !prev)
  }
  // eslint-disable-next-line no-console
  // console.log(imdbID)

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
        {/* <InfoIcon /> */}
        <HeartIcon className={cx(styles.heartIcon, { [styles.selectFavorite]: selectedFavorite })} />
      </button>
    </li>
  )
}

export default MovieItem
