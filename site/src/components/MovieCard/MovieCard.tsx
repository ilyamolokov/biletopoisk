import { FunctionComponent } from "react"
import styles from "./styles.module.css"

export const MovieCard: FunctionComponent = () => {
    return (
        <div className={styles.movieCard}>
            <div className={styles.movieImage}></div>
            <div className={styles.movieInfo}>
                <div className={styles.movieName}>
                    <span>Властелин колец: Братство кольца</span>
                    <div className={styles.addToCart}>
                        <img className={styles.button} rel="icon" src="icons/minus.svg" sizes="9x9" />
                        <span className={styles.quantity} >0</span>
                        <img className={styles.button} rel="icon" src="icons/plus.svg" sizes="9x9" />
                    </div>
                </div>
                <span className={styles.movieGenre}>Фэнтези</span>
            </div>
        </div>
    )
}