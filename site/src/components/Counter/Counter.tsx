"use client"
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { cartActions } from "@/redux/features/cart"
import { useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { usePathname } from 'next/navigation'
import { createPortal } from "react-dom"
import { Modal } from "../Modal/Modal"
import { RootState } from "@/types"

interface CounterProps {
    movieId:string
}

export const Counter: FunctionComponent<CounterProps> = ({ movieId }) => {
    const dispatch = useDispatch();
    const path = usePathname();
    const productAmount = useSelector((state:RootState) => selectProductAmount(state, movieId))
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleIncrement = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(cartActions.increment(movieId))
    }
    const handleDecrement = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        if(path === "/cart") {
            productAmount===1 ? setIsModalOpen(true) : dispatch(cartActions.decrement(movieId))
        } else {
            dispatch(cartActions.decrement(movieId))
        }
        
    }
    const handleModal = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        setIsModalOpen(true)
    }
    return (
        <div className={styles.addToCart}>
            <Image onClick={ (e)=> handleDecrement(e) }  className={productAmount === 0 
                ? `${styles.buttonActive} ${styles.buttonInactive}` 
                : styles.buttonActive
            } rel="icon" src="/icons/minus.svg" sizes="9x9" width={20} height={20} alt="minus"/>
            <span className={styles.quantity}>{productAmount}</span>
            <Image onClick={ (e)=> handleIncrement(e) } className={productAmount === 30 
                ? `${styles.buttonActive} ${styles.buttonInactive}` 
                : styles.buttonActive
            } rel="icon" src="/icons/plus.svg" sizes="9x9" width={20} height={20} alt="plus" />
            {
                path === "/cart" 
                &&  
                <>
                    <Image className={styles.exit} onClick={(e)=>{handleModal(e)}} rel="icon" src="/icons/exit.svg" sizes="9x9" width={20} height={20} alt="exit"/>
                    {isModalOpen && createPortal(<Modal movieId={movieId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>, document.getElementById("modal")!)}
                </>
            }
        </div>
    )
}