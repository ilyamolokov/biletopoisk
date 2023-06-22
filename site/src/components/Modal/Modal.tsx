'use client'
import { FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"

interface Props {
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  }

export const Modal: FunctionComponent<Props> = ({setIsModalOpen}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);


    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal} ref={ref}>
                <div className={styles.modalHeader}>
                    <p  className={styles.title}>Удаление билета</p>
                    <img className={styles.exit} onClick={()=>setIsModalOpen(currentValue=>false)} rel="icon" src="icons/exit.svg" sizes="10x10" />
                </div>
                <p className={styles.description}>Вы уверены, что хотите удалить билет?</p>
                <div className={styles.buttons}>
                    <button className={styles.buttonYes}>Да</button>
                    <button className={styles.buttonNo} onClick={()=>setIsModalOpen(currentValue=>false)}>Нет</button>
                </div>
            </div>
        </div>
    )
}
