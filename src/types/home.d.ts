export interface ISearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IMovieAPIRes {
  Search: ISearchItem[]
}

export interface IFavoriteArr extends Array<ISearchItem> {}
