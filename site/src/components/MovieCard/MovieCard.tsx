"use client"
import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import { genres } from "@/common/constants"
import { Counter } from "../Counter/Counter";
import Image from 'next/image'
import { Movie } from "@/types";

type MovieCardProps = {
    movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className={styles.movieCard}>
            <Image className={styles.movieImage} src={movie.posterUrl} alt="poster" width={100} height={120} />
            <div className={styles.movieInfo}>
                <div className={styles.movieName}>
                    <span>{movie.title}</span>
                    <Counter movieId={movie.id} />
                </div>
                <span className={styles.movieGenre}>{genres[movie.genre] || ''}</span>
            </div>
        </div>
    )
}