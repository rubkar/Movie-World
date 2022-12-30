export interface IMovie {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

export interface IMovieResponse {
  Response: string;
  Search: IMovie[];
  totalResults: string;
}
