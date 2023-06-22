import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"

export const Dropdown: FunctionComponent<any> = ({ children }: any) => {
    return (
        <div className={styles.dropdown}>
            {children?.map((child: string) => <div className={styles.dropdownChild}>{child}</div>)}
        </div>
    )
}
