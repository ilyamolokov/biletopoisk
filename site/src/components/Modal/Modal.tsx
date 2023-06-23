'use client'
import { FunctionComponent, SetStateAction, useCallback, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import Image from 'next/image'

interface Props {
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  }

export const Modal: FunctionComponent<Props> = ({setIsModalOpen}) => {
    const ref = useRef<HTMLDivElement>(null);

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


    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal} ref={ref}>
                <div className={styles.modalHeader}>
                    <p  className={styles.title}>Удаление билета</p>
                    <Image className={styles.exit} onClick={()=>setIsModalOpen(currentValue=>false)} rel="icon" src="/icons/exit.svg" width={10} height={10} alt="exit"/>
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
