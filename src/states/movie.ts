import { atom } from 'hooks/state'
import { IMovieAPIRes } from 'types/home.d'

export const movieDataState = atom<IMovieAPIRes>({
  key: '#movieDataState',
  default: { Search: [], totalResults: 0, Response: 'False' },
})
