import { useRecoil } from 'hooks/state'
import store from 'store'
import { favoriteDataState, modalState, modalXState, modalYState } from 'states/movie'
import styles from './favModal.module.scss'
import { useMount } from 'react-use'

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
    if (favData?.some((el) => el.imdbID === favModal.data.imdbID)) {
      const nextData = favData.filter((el) => el.imdbID !== favModal.data.imdbID)
      setFavData(nextData)
      store.set('favorite', nextData)
    } else {
      const nextData = [...favData, favModal.data]
      setFavData(nextData)
      store.set('favorite', nextData)
    }
    closeModal()
  }

  useMount(() => {
    const getStorage = store.get('favorite')
    if (getStorage && getStorage.length > 0) {
      setFavData(getStorage)
    }
  })
  return (
    <div
      style={{ top: `${modalY}px`, left: `${modalX - 160}px`, display: favModal.visible ? 'block' : 'none' }}
      className={styles.container}
    >
      <div className={styles.btn}>
        <button type='button' onClick={handleFav}>
          {favData?.some((el) => el.imdbID === favModal.data.imdbID) ? '즐겨찾기 제거' : '즐겨찾기'}
        </button>
        <button type='button' onClick={closeModal}>
          취소
        </button>
      </div>
    </div>
  )
}

export default FavModal
