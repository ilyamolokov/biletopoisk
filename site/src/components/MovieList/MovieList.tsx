import { useGetMoviesQuery } from "@/redux/services/movieApi"
import styles from "./styles.module.css"
import  MovieCard  from "../MovieCard/MovieCard";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Movies, Movie } from "@/types";
import { Loading } from "../Loading/Loading";
import { NotFound } from "../NotFound/NotFound";

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
    const { data, isLoading, error } = useGetMoviesQuery() as useQueryProps;

    if (isLoading) {
        return <Loading/>
    }
    if (!data || error) {
        return <NotFound/>
    }

    return (
        <div className={styles.movieList}>
            {
                (cinemas.length === 0 ? data : cinemas)
                    .filter((item:Movie) => item.title.toLowerCase().includes(input.toLowerCase()))
                    .filter((item:Movie) => item.genre.toLowerCase().includes(genre.toLowerCase()))
                    .map((movie:Movie) => {
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