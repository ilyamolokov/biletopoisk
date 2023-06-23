import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit"

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

type Movies = Movie[]
type Reviews = Review[]


export const movieApi = createApi({
    reducerPath: "movie",
    baseQuery: fetchBaseQuery({ baseUrl:" http://localhost:3001/api/" }),
    endpoints:(builder) => ({
        getMovies: builder.query<Movies, void>({ query: () => "movies" }),
        getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}` }),
        getReview: builder.query<Reviews, string>({ query: (movieId) => `reviews?movieId=${movieId}` }),

    })
})

export const { useGetMoviesQuery, useGetMovieQuery,  useGetReviewQuery} = movieApi;