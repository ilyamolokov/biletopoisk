import { FunctionComponent } from "react"
import styles from "./styles.module.css"
import Image from 'next/image'

export const Counter: FunctionComponent = () => {
    return (<div className={styles.addToCart}>
        <Image className={styles.button} rel="icon" src="/icons/minus.svg" sizes="9x9" width={20} height={20} alt="minus"/>
        <span className={styles.quantity} >0</span>
        <Image className={styles.button} rel="icon" src="/icons/plus.svg" sizes="9x9" width={20} height={20} alt="plus" />
    </div>)
}