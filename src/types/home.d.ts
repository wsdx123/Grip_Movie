export interface ISearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IMovieAPIRes {
  Search: ISearchItem[]
  totalResults: number
  Response: 'True' | 'False'
}
