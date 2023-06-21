import { FunctionComponent } from "react"
import styles from "./styles.module.css"

export const Review: FunctionComponent = () => {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewImage}>
                <img rel="icon" src="icons/review.svg" sizes="26x22" />
            </div>
            <div className={styles.reviewInfo}>
                <div className={styles.reviewerNameAndRating}>
                    <span className={styles.reviewerName}>Андрей</span>
                    <div className={styles.rating}>Оценка: 8</div>
                </div>
                <br/>
                <span className={styles.reviewText}>По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...</span>
            </div>
        </div>
    )
}