import { MouseEvent } from 'react'
import { useRecoil } from 'hooks/state'

import { modalState, modalXState, modalYState } from 'states/movie'
import { InfoIcon } from 'assets/svgs'
import styles from './movieItem.module.scss'

interface Props {
  poster: string
  title: string
  year: string
  type: string
  imdbID: string
}

const MovieItem = (props: Props) => {
  const [, setFavModal] = useRecoil(modalState)
  const [, setModalY] = useRecoil(modalYState)
  const [, setModalX] = useRecoil(modalXState)
  const { poster, title, year, type, imdbID }: Props = props

  const handleModal = (e: MouseEvent<HTMLButtonElement>) => {
    setFavModal({
      visible: true,
      data: props,
    })
    setModalY(e.clientY)
    setModalX(e.clientX)
  }
  // eslint-disable-next-line no-console
  console.log(imdbID)

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
        <InfoIcon />
      </button>
    </li>
  )
}

export default MovieItem
