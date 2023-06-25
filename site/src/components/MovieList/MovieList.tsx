import { Cinemas, Movies, useGetMoviesQuery } from "@/redux/services/movieApi"
import styles from "./styles.module.css"
import { GenreKey, MovieCard } from "../MovieCard/MovieCard";
import Link from "next/link";
import { FunctionComponent } from "react";

interface MovieListProps {
    cinemas: Movies
    input: string,
    genre: string,
}
interface useQueryProps { 
    data: Movies, 
    isLoading: boolean, 
    error: any 
}

export const MovieList: FunctionComponent<MovieListProps> = ({ cinemas, input, genre }) => {
    const { data: moviesData, isLoading: isLoadingMovies, error: isErrorMovies } = useGetMoviesQuery() as useQueryProps;


    if (isLoadingMovies) {
        return <span>Loading...</span>
    }
    if (!moviesData || isErrorMovies) {
        return <span>NotFound</span>
    }

    return (
        <div className={styles.movieList}>
            {
                (cinemas.length === 0 ? moviesData : cinemas)
                    .filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
                    .filter(item => item.genre.toLowerCase().includes(genre.toLowerCase()))
                    .map(movie => {
                        return (
                            <Link href={`/movie/${movie.id}`} key={movie.id}>
                                <MovieCard key={movie.id} movie={movie} />
                            </Link>
                        )
                    })
            }
        </div>
    )
}