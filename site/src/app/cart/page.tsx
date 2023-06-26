'use client'
import { useGetMoviesQuery } from "@/redux/services/movieApi"
import styles from "./styles.module.css"
import MovieCard from "@/components/MovieCard/MovieCard";
import Link from "next/link";
import { selectCartModule, selectTotalAmount } from "@/redux/features/cart/selector";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

export default function Cart() {
    const { data, isLoading, error } = useGetMoviesQuery();
    const cart = useSelector((state: RootState) => selectCartModule(state))
    const totalAmount = useSelector((state: RootState) => selectTotalAmount(state))
    const cartProducts = new Set(Object.keys(cart))
    
    if (isLoading) {
        return <span>Loading...</span>
    }
    if (!data || error) {
        return <span>NotFound</span>
    }
    return (
        !totalAmount
            ? (<div className={styles.cartEmpty}>
                <p className={styles.cartEmptyText}>В корзине пока пусто</p>
            </div>)
            :
            <div className={styles.cartContainer}>
                <div className={styles.movieList}>
                    {data.map(movie => {
                        if (cartProducts.has(movie.id)) {
                            return (
                                <Link href={`movie/${movie.id}`} key={movie.id}>
                                    <MovieCard key={movie.id} movie={movie} />
                                </Link>
                            )
                        }
                    })}
                </div>
                <div className={styles.totalAmount}>
                    <span>Итого билетов:</span>
                    <span>{totalAmount}</span>
                </div>
            </div>
    )
}