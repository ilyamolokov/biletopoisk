import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import { GenreKey } from "../MovieCard/MovieCard"
import { genres } from "@/common/constants"
import { Counter } from "../Counter/Counter"
import Image from 'next/image'

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

export const MovieDetails: FunctionComponent<{movie:Movie}> = ({movie}) => {
    return (
        <div className={styles.movieDetails}>
            <Image rel="icon" src={movie.posterUrl} className={styles.movieImage} alt="poster" width={400} height={500}/>
            <div className={styles.movieInfo}>
                <div className={styles.movieNameAndAddToCart}>
                    <h1 className={styles.movieName}>{movie.title}</h1>
                    <Counter movieId={movie.id}/>
                </div>
                <span className={styles.details}>
                    <b>Жанр: </b>
                    {genres[movie.genre as GenreKey]}
                </span>
                <span className={styles.details}>
                    <b>Год выпуска: </b>
                    {movie.releaseYear}
                </span>
                <span className={styles.details}>
                    <b>Рейтинг: </b>
                    {movie.rating}
                </span>
                <span className={styles.details}>
                    <b>Режиссер: </b>
                    {movie.director}
                </span>
                <span className={styles.description}>
                    <b>Описание: </b>
                    <div className={styles.text}>
                        {movie.description}
                    </div>
                </span>
            </div>
        </div>
    )
}