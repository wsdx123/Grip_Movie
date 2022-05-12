import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/home'

const MOVIE_BASE_URL = 'http://www.omdbapi.com/'

interface Params {
  apikey: string | undefined
  s: string
  page: number
}

export const getMovieWhatISearchApi = (params: Params) =>
  axios.get<IMovieAPIRes>(MOVIE_BASE_URL, {
    params,
  })
