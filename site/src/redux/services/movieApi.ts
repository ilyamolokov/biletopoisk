import { API_URL } from '@/common/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Movie {
    description: string,
    director: string,
    genre: string,
    id: string,
    posterUrl: string,
    rating: number,
    releaseYear: number,
    reviewIds:string[],
    title: string,
}
interface Review { 
    id: string, 
    name: string, 
    text:string, 
    rating: number
}
interface Cinema { 
    id: string, 
    name: string, 
    movieIds:string[],
}

export type Movies = Movie[]
export type Reviews = Review[]
export type Cinemas = Cinema[]

export const movieApi = createApi({
    reducerPath: "movie",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints:(builder) => ({
        getMovies: builder.query<Movies, void>({ query: () => "movies" }),
        getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}` }),

        getReview: builder.query<Reviews, string>({ query: (movieId) => `reviews?movieId=${movieId}` }),

        getCinemas: builder.query<Cinemas, void>({ query: () => 'cinemas' }),
    })
})

export const { 
    useGetMoviesQuery, 
    useGetMovieQuery,  
    useGetReviewQuery,
    useGetCinemasQuery,
} = movieApi;