import { atom } from 'hooks/state'
import { IMovieAPIRes } from 'types/home.d'

export const movieDataState = atom<IMovieAPIRes>({
  key: '#movieDataState',
  default: { Search: [], totalResults: 0, Response: 'False' },
})

export const modalState = atom<boolean>({
  key: '#modalState',
  default: false,
})

export const modalYState = atom<number>({
  key: '#modalYState',
  default: 0,
})

export const modalXState = atom<number>({
  key: '#modalXState',
  default: 0,
})
