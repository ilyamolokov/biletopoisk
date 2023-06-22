import { FunctionComponent, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import { createPortal } from "react-dom"
import { Dropdown } from "../Dropdown/Dropdown"

export const FilterSearch: FunctionComponent<any> = ({ children }: any) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const ref = useRef<HTMLLabelElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <label ref={ref}>
            <p className={styles.fieldName}>Жанр</p>
            <div className={styles.selectField} onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                <span>Выберите жанр</span>
                <img className={isDropdownOpen ? styles.buttonUp : styles.buttonDown} rel="icon" src="icons/open-grey.svg" sizes="18x18" />
            </div>
            {isDropdownOpen && createPortal(
                <Dropdown children={children} />,
                document.getElementById("dropdown")!
            )}
        </label>
    )
}
