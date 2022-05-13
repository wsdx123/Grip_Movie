export interface IFavoriteItem {
  title: string
  year: string
  imdbID: string
  type: string
  poster: string
}

export interface IFavoriteArr extends Array<IFavoriteItem> {}
