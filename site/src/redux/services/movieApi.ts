import { API_URL } from '@/common/constants';
import { Movies, Movie, TypeReviews, Cinemas } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: "movie",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints:(builder) => ({
        getMovies: builder.query<Movies, void>({ query: () => "movies" }),
        getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}` }),

        getReview: builder.query<TypeReviews, string>({ query: (movieId) => `reviews?movieId=${movieId}` }),

        getCinemas: builder.query<Cinemas, void>({ query: () => 'cinemas' }),
    })
})

export const { 
    useGetMoviesQuery, 
    useGetMovieQuery,  
    useGetReviewQuery,
    useGetCinemasQuery,
} = movieApi;