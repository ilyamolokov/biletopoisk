import { FunctionComponent } from "react"
import styles from "./styles.module.css"

export const Header: FunctionComponent = () => {
    return <>
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Билетопоиск</h1>
            <div className={styles.cartContainer}>
                <div className={styles.quantity}>30</div>
                <img rel="icon" src="icons/cart.svg" sizes="32x32" />
            </div>
        </header>
    </>
}