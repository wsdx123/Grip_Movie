import { IFavoriteArr } from 'types/favorite.d'
import { ISearchItem } from 'types/home.d'
import { atom } from 'hooks/state'

export const movieDataState = atom<ISearchItem[]>({
  key: '#movieDataState',
  default: [],
})

export const favoriteDataState = atom<IFavoriteArr>({
  key: '#favoriteDataState',
  default: [],
})

export const apiInputState = atom<string>({
  key: '#apiInputState',
  default: '',
})

export const pageState = atom<number>({
  key: '#pageState',
  default: 1,
})
