import { genresForFilter, genres } from "@/common/constants";
import { rootReducer } from "@/redux/features/cart/selector";

export type RootState = ReturnType<typeof rootReducer>;

export interface Movie {
    description: string,
    director: string,
    genre: GenreKeys,
    id: string,
    posterUrl: string,
    rating: number,
    releaseYear: number,
    reviewIds:string[],
    title: string,
}
export interface TypeReview { 
    id: string, 
    name: string, 
    text:string, 
    rating: number
}
export interface Cinema { 
    id: string, 
    name: string, 
    movieIds:string[],
}

export type Movies = Movie[]
export type TypeReviews = TypeReview[]
export type Cinemas = Cinema[]

export type GenreKeys = keyof typeof genres;

export  type GenresForFilterType = typeof genresForFilter