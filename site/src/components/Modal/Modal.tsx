'use client'
import { FunctionComponent, SetStateAction, useCallback, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { cartActions } from "@/redux/features/cart"

interface Props {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>,
    movieId: string
}

export const Modal: FunctionComponent<Props> = ({ isModalOpen, setIsModalOpen, movieId }) => {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch()

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsModalOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    useEffect(() => {
        if (isModalOpen) {
            document.querySelector('#modal')?.classList.add("modalOpen");
            document.body.style.overflow = 'hidden';
        } else {
            document.querySelector('#modal')?.classList.remove("modalOpen");
        }
        return () => { 
            document.querySelector('#modal')?.classList.remove("modalOpen") 
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);


    return (
        <div className={styles.modal} ref={ref} onClick={(e) => e.preventDefault()}>
            <div className={styles.modalHeader}>
                <p className={styles.title}>Удаление билета</p>
                <Image className={styles.exit} onClick={() => setIsModalOpen(false)} rel="icon" src="/icons/exit.svg" width={10} height={10} alt="exit" />
            </div>
            <p className={styles.description}>Вы уверены, что хотите удалить билет?</p>
            <div className={styles.buttons}>
                <button className={styles.buttonYes} onClick={() => dispatch(cartActions.delete(movieId))}>Да</button>
                <button className={styles.buttonNo} onClick={() => setIsModalOpen(false)}>Нет</button>
            </div>
        </div>
    )
}
