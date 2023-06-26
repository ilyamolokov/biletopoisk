import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import { useGetReviewQuery } from "@/redux/services/movieApi";
import { Review } from "../Review/Review";
import { TypeReviews } from "@/types";
import { Loading } from "../Loading/Loading";
import { NotFound } from "../NotFound/NotFound";

interface ReviewsProps { 
    movieId: string 
}

interface useQueryProps { 
    data: TypeReviews, 
    isLoading: boolean, 
    error: any 
}

export const Reviews: FunctionComponent<ReviewsProps> = ({ movieId }) => {
    const { data, isLoading, error } = useGetReviewQuery(movieId) as useQueryProps;

    if (isLoading) {
        return <Loading/>
    }
    if (!data || error) {
        return <NotFound/>
    }

    return (
        <div className={styles.reviewsCard}>
            {data.map(review => {
                return <Review key={review.id} review={review}/>
            })}
        </div>
    )
}