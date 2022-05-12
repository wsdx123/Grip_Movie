import { useRecoil } from 'hooks/state'
import { movieDataState } from 'states/movie'

import styles from './movieItem.module.scss'

interface Props {
  index: number
}

const MovieItem = ({ index }: Props) => {
  const [mData] = useRecoil(movieDataState)
  const { Search: msd } = mData

  return (
    <li className={styles.container}>
      <img src={msd[index].Poster} alt={msd[index].Title} />
      <div className={styles.infor}>
        <div>
          <h1>{msd[index].Title}</h1>
          <span>{msd[index].Year}</span>
        </div>
        <span>{`Type : ${msd[index].Type}`}</span>
      </div>
    </li>
  )
}

export default MovieItem
