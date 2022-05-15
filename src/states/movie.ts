import { atom } from 'hooks/state'
import { IFavoriteArr } from 'types/favorite.d'
import { IMovieAPIRes } from 'types/home.d'
import { IFavModal } from 'types/modal.d'

export const movieDataState = atom<IMovieAPIRes>({
  key: '#movieDataState',
  default: { Search: [], totalResults: 0, Response: 'False' },
})

export const favoriteDataState = atom<IFavoriteArr>({
  key: '#favoriteDataState',
  default: [],
})

export const modalState = atom<IFavModal>({
  key: '#modalState',
  default: {
    visible: false,
    data: {
      poster: '',
      title: '',
      year: '',
      type: '',
      imdbID: '',
    },
  },
})

export const modalYState = atom<number>({
  key: '#modalYState',
  default: 0,
})

export const modalXState = atom<number>({
  key: '#modalXState',
  default: 0,
})

export const apiInputState = atom<string>({
  key: '#apiInputState',
  default: '',
})

export const pageState = atom<number>({
  key: '#pageState',
  default: 1,
})
