'use client'
import { useGetMovieQuery } from "@/redux/services/movieApi"
import { MovieDetails } from "@/components/MovieDetails/MovieDetails"
import { Reviews } from "@/components/Reviews/Reviews";
import { Loading } from "@/components/Loading/Loading";
import { NotFound } from "@/components/NotFound/NotFound";

export default function Movie({ params }: { params: { id: string } }) {
    const { data, isLoading, error } = useGetMovieQuery(params.id);

    if (isLoading) {
        return <Loading/>
    }
    if (!data || error) {
        return <NotFound/>
    }
    return (
        <>
            <MovieDetails movie={data}/>
            <Reviews movieId={data.id}/>
        </>
    )
}