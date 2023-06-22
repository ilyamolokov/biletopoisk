import { FunctionComponent } from "react"
import styles from "./styles.module.css"

export const MovieDetails: FunctionComponent = () => {
    return (
        <div className={styles.movieDetails}>
            {
                <div className={styles.movieImage}>
                    <img rel="icon" src="icons/review.svg" sizes="9x9" />
                </div>
            }
            <div className={styles.movieInfo}>
                <div className={styles.movieNameAndAddToCart}>
                    <h1 className={styles.movieName}>Властелин колец: Братство кольца</h1>
                    <div className={styles.addToCart}>
                        <img className={styles.button} rel="icon" src="icons/minus.svg" sizes="9x9" />
                        <span className={styles.quantity} >0</span>
                        <img className={styles.button} rel="icon" src="icons/plus.svg" sizes="9x9" />
                    </div>
                </div>
                <span className={styles.details}>
                    <b>Жанр: </b>
                    {'Фэнтези'}
                </span>
                <span className={styles.details}>
                    <b>Год выпуска: </b>
                    {'2001'}
                </span>
                <span className={styles.details}>
                    <b>Рейтинг: </b>
                    {'8'}
                </span>
                <span className={styles.details}>
                    <b>Режиссер: </b>
                    {'Питер Джексон'}
                </span>
                <span className={styles.description}>
                    <b>Описание: </b>
                    <div className={styles.text}>
                        {'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.'}
                    </div>
                </span>
            </div>
        </div>
    )
}