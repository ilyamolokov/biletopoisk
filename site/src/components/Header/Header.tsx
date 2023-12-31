'use client'
import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import Link from "next/link"
import Image from 'next/image'
import { useSelector } from "react-redux";
import { selectTotalAmount } from "@/redux/features/cart/selector";
import { RootState } from "@/types"

export const Header: FunctionComponent = () => {
    const productAmount = useSelector((state:RootState) => selectTotalAmount(state))

    return <>
        <header className={styles.header}>
            <Link href="/" className={styles.headerTitle}>Билетопоиск</Link>
            <div className={styles.cartIconContainer}>
                {!!productAmount && <div className={styles.quantity}>{productAmount}</div>}
                <Link href={'/cart'}>
                    <Image className={styles.cartIcon} rel="icon" alt="cart" src="/icons/cart.svg" width={32} height={32} />
                </Link>
            </div>
        </header>
    </>
}
