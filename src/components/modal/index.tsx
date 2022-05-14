import { useRecoil } from 'hooks/state'
import store from 'store'
import { favoriteDataState, modalState, modalXState, modalYState } from 'states/movie'
import styles from './favModal.module.scss'

const FavModal = () => {
  const [favModal, setFavModal] = useRecoil(modalState)
  const [favData, setFavData] = useRecoil(favoriteDataState)
  const [modalY] = useRecoil(modalYState)
  const [modalX] = useRecoil(modalXState)

  const closeModal = () => {
    setFavModal({
      visible: false,
      data: favModal.data,
    })
  }

  const handleFav = () => {
    setFavData([...favData, favModal.data])
    store.set('favorite', [...favData, favModal.data])
    console.log(store.get('favorite'))
    closeModal()
  }

  return (
    <div
      style={{ top: `${modalY}px`, left: `${modalX - 160}px`, display: favModal.visible ? 'block' : 'none' }}
      className={styles.container}
    >
      <div className={styles.btn}>
        <button type='button' onClick={handleFav}>
          즐겨찾기
        </button>
        <button type='button' onClick={closeModal}>
          취소
        </button>
      </div>
    </div>
  )
}

export default FavModal
