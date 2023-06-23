import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import { useGetReviewQuery } from "@/redux/services/movieApi";
import { Review } from "../Review/Review";

interface Review { 
    id: string, 
    name: string, 
    text:string, 
    rating: number
}

export const Reviews: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
    const { data, isLoading, error } = useGetReviewQuery(movieId);

    if (isLoading) {
        return <span>Loading...</span>
    }
    if (!data || error) {
        return <span>NotFound</span>
    }

    return (
        <div className={styles.reviewsCard}>
            {data.map(review => {
                return <Review key={review.id} review={review}/>
            })}
        </div>
    )
}