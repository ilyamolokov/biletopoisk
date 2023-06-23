import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"

export const Dropdown: FunctionComponent<any> = ({ children, position }: any) => {
    const topMargin = 72;
    position.top += topMargin;
    position.position = "fixed";

    return (
        <div className={styles.dropdown} style={position}>
            {children?.map((child: string) => <div className={styles.dropdownChild}>{child}</div>)}
        </div>
    )
}
