'use client'
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import { createPortal } from "react-dom"
import { Modal } from "../Modal/Modal"
import Link from "next/link"

export const Header: FunctionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return <>
        <header className={styles.header}>
            <Link href="/" className={styles.headerTitle}>Билетопоиск</Link>
            <div className={styles.cartContainer}>
                <div className={styles.quantity}>0</div>
                <img className={styles.cartIcon} onClick={() => setIsModalOpen(!isModalOpen)} rel="icon" src="icons/cart.svg" sizes="32x32" />
                {isModalOpen && createPortal(
                    <Modal setIsModalOpen={setIsModalOpen}/>,
                    document.getElementById("modal")!
                )}
            </div>
        </header>
    </>
}
