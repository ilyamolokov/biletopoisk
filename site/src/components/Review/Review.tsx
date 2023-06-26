import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import Image from 'next/image'
import { TypeReview } from "@/types"

interface ReviewProps { 
    review:TypeReview
}

export const Review: FunctionComponent<ReviewProps> = ({review}) => {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewImage}>
                <Image rel="icon" src="/icons/review.svg" alt="review" width={26} height={22} />
            </div>
            <div className={styles.reviewInfo}>
                <div className={styles.reviewerNameAndRating}>
                    <span className={styles.reviewerName}>{review.name}</span>
                    <div className={styles.rating}>Оценка: {Math.round(review.rating)}</div>
                </div>
                <br/>
                <span className={styles.reviewText}>{review.text}</span>
            </div>
        </div>
    )
}