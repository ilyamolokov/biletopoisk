'use client'
import { useGetMovieQuery } from "@/redux/services/movieApi"
import styles from "./styles.module.css"
import { MovieDetails } from "@/components/MovieDetails/MovieDetails"
import { useRouter } from 'next/router';
import { Reviews } from "@/components/Reviews/Reviews";

export default function Movie({ params }: { params: { id: string } }) {
    const { data, isLoading, error } = useGetMovieQuery(params.id);

    if (isLoading) {
        return <span>Loading...</span>
    }
    if (!data || error) {
        return <span>NotFound</span>
    }
    return (<>
        <MovieDetails movie={data}/>
        <Reviews movieId={data.id}/>
        
    </>)
}