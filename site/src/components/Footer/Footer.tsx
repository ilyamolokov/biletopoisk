import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import Link from "next/link"

export const Footer: FunctionComponent = () => {
    return <>
        <footer className={styles.footer}>
            <Link href="/questions" className={styles.footerText}>Вопросы-ответы</Link>
            <Link href="/about" className={styles.footerText}>О нас</Link>
        </footer>
    </>
}