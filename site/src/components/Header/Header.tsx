'use client'
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import { createPortal } from "react-dom"
import { Modal } from "../Modal/Modal"
import Link from "next/link"
import Image from 'next/image'

export const Header: FunctionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return <>
        <header className={styles.header}>
            <Link href="/" className={styles.headerTitle}>Билетопоиск</Link>
            <div className={styles.cartContainer}>
                <div className={styles.quantity}>0</div>
                <Image className={styles.cartIcon} onClick={() => setIsModalOpen(!isModalOpen)} rel="icon" alt="cart" src="/icons/cart.svg" width={32} height={32} />
                {isModalOpen && createPortal(
                    <Modal setIsModalOpen={setIsModalOpen}/>,
                    document.getElementById("modal")!
                )}
            </div>
        </header>
    </>
}
