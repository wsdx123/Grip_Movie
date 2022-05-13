import { MouseEvent } from 'react'
import { useRecoil } from 'hooks/state'

import { modalState, modalXState, modalYState, movieDataState } from 'states/movie'
import { InfoIcon } from 'assets/svgs'
import styles from './movieItem.module.scss'

interface Props {
  index: number
}

const MovieItem = ({ index }: Props) => {
  const [mData] = useRecoil(movieDataState)
  const [, setModalOpen] = useRecoil(modalState)
  const [, setModalY] = useRecoil(modalYState)
  const [, setModalX] = useRecoil(modalXState)

  const { Search: msd } = mData

  const handleModal = (e: MouseEvent<HTMLButtonElement>) => {
    setModalOpen(true)
    setModalY(e.clientY)
    setModalX(e.clientX)
  }

  return (
    <li className={styles.container}>
      <div className={styles.item}>
        <img src={msd[index].Poster} alt={msd[index].Title} />
        <div className={styles.infor}>
          <div>
            <h1>{msd[index].Title}</h1>
            <span>{msd[index].Year}</span>
          </div>
          <span>{`Type : ${msd[index].Type}`}</span>
        </div>
      </div>
      <button type='button' onClick={handleModal}>
        <InfoIcon />
      </button>
    </li>
  )
}

export default MovieItem
