import axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import process from 'process';

/**
 *
 *
 * define StreamingQuery type for RapidAPI
 * endpoint param
 */
export type Param = {
  country: string
  services: string
  type: string
  order_by: string
  year_min?: string
  year_max?: string
  page?: string
  genres?: string
  genres_relation?: string
  desc?: string
  language?: string
  min_imdb_rating?: string
  max_imdb_rating?: string
  min_imdb_vote_count?: string
  max_imdb_vote_count?: string
}

/**
 *
 *
 */
export enum Method {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE',
  PUT = 'PUT'
}

/**
 *
 *
 * List of supported counties
 */
export enum Country {
  US = 'us',
  CANADA = 'canada',
  MEXICO = 'mexico'
}

/**
 *
 *
 * List of supported streaming services
 */
export enum Service {
  NETFLIX = 'netflix',
  PRIME = 'prime',
  DISNEY = 'disney',
  HBO = 'hbo',
  HULU = 'hulu',
  PEACOCK = 'peacock',
  STARZ = 'starz',
  SHOWTIME = 'showtime',
  APPLE = 'apple',
  MUBI = 'mubi'
}

/**
 *
 *
 * List of supported content type options
 */
export enum Type {
  MOVIE = 'movie',
  SERIES = 'series'
}

/**
 *
 *
 * List of supported ordering options
 */
export enum Order {
  TITLE = 'original_title',
  YEAR = 'year',
  VOTE = 'imdb_vote_count',
  RATING = 'imdb_rating'
}

/**
 *
 *
 * Lists of genres
 */
export const GenresObject: {[key: string]: string} = {
  "Biography": "1",
  "Film Noir": "2",
  "Game Show": "3",
  "Musical":  "4",
  "Sport":  "5",
  "Short":  "6",
  "Adult":  "7",
  "Adventure": "12",
  "Fantasy": "14",
  "Animation": "16",
  "Drama": "18",
  "Horror": "27",
  "Action": "28",
  "Comedy": "35",
  "History": "36",
  "Western": "37",
  "Thriller": "53",
  "Crime": "80",
  "Documentary": "99",
  "Science Fiction": "878",
  "Mystery": "9648",
  "Music": "10402",
  "Romance": "10749",
  "Family": "10751",
  "War": "10752",
  "News": "10763",
  "Reality": "10764",
  "Talk Show": "10767"
};

/**
 *
 * Query class
 *
 * @class {Query}
 */
export class Query {
  public country  = Country.US
  public services = Service.NETFLIX
  public type = Type.MOVIE
  public order = Order.RATING
  public minYear: string|null = null
  public maxYear: string|null = null
  public page: string|null = null
  public genres: string|null = null
  public genresRelation: string|null = null
  public desc: string|null = null
  public language: string|null = null
  public minRating: string|null = null
  public maxRating: string|null = null
  public minVote: string|null = null
  public maxVote: string|null = null

  /**
   *
   *
   * @returns {StreamingQuery}
   */
  public buildQuery (): Param {
    const query: Param = {
      country: this.country,
      services: this.services,
      type: this.type,
      order_by: this.order
    };

    if (this.minYear) {
      query.year_min = this.minYear;
    }

    if (this.maxYear) {
      query.year_max = this.maxYear;
    }

    if (this.page) {
      query.page = this.page;
    }

    if (this.genres) {
      query.genres = this.genres;
    }

    if (this.genresRelation) {
      query.genres_relation = this.genresRelation;
    }

    if (this.desc) {
      query.desc = this.desc;
    }

    if (this.language) {
      query.language = this.language;
    }

    if (this.minRating) {
      query.min_imdb_rating = this.minRating;
    }

    if (this.maxRating) {
      query.max_imdb_rating = this.maxRating;
    }

    if (this.minVote) {
      query.min_imdb_vote_count = this.minVote;
    }

    if (this.maxVote) {
      query.max_imdb_vote_count = this.maxVote;
    }

    return query;
  }

  /**
   *
   * Fetch results
   *
   * @returns {AxiosPromise}
   */
  public search (): AxiosPromise {
    const config: AxiosRequestConfig = {
      method: Method.GET,
      url: `https://${process.env.RAPID_API_HOST}/search/ultra`,
      params: this.buildQuery(),
      headers: {
        'x-rapidapi-host': process.env.RAPID_API_HOST,
        'x-rapidapi-key': process.env.RAPID_API_KEY,
      }
    };

    return axios.request(config);
  }
}
