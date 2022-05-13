import { useRecoil } from 'hooks/state'
import { modalState, modalXState, modalYState } from 'states/movie'
import styles from './favModal.module.scss'

const FavModal = () => {
  const [, setModalOpen] = useRecoil(modalState)
  const [modalY] = useRecoil(modalYState)
  const [modalX] = useRecoil(modalXState)

  return (
    <div style={{ top: `${modalY}px`, left: `${modalX - 160}px` }} className={styles.container}>
      <div className={styles.btn}>
        <button type='button' onClick={() => setModalOpen(false)}>
          즐겨찾기
        </button>
        <button type='button' onClick={() => setModalOpen(false)}>
          취소
        </button>
      </div>
    </div>
  )
}

export default FavModal
