import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/home'

const MOVIE_BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

interface Params {
  s: string
  page: number
}

export const getMovieWhatISearchApi = (params: Params) => {
  return axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}`, {
    params,
  })
}
