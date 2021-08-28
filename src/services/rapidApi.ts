// import axios from 'axios';

export type StreamingQuery = {
  country: string // us
  services: string // netflix prime disney hbo hulu peacock paramount starz showtime apple mubi
  type: string // movie or series
  order_by: string // original_title year imdb_vote_count imdb_rating
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
