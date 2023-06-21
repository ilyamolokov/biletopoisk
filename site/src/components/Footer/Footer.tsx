import { FunctionComponent } from "react"
import styles from "./styles.module.css"

export const Footer: FunctionComponent = () => {
    return <>
        <footer className={styles.footer}>
            <h2 className={styles.footerText}>Вопросы-ответы</h2>
            <h2 className={styles.footerText}>О нас</h2>
        </footer>
    </>
}