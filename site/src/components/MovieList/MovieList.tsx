import { useGetMoviesQuery } from "@/redux/services/movieApi"
import styles from "./styles.module.css"
import { MovieCard } from "../MovieCard/MovieCard";
import Link from "next/link";


export const MovieList = () => {
    const { data, isLoading, error } = useGetMoviesQuery();

    if (isLoading) {
        return <span>Loading...</span>
    }
    if (!data || error) {
        return <span>NotFound</span>
    }

    return (
        <div className={styles.movieList}>
            {data.map(movie => {
                return (
                    <Link href={`movie/${movie.id}`}>
                        <MovieCard key={movie.id} movie={movie}/>
                    </Link>
                )
            })}
        </div>
    )
}