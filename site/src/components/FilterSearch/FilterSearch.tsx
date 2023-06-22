'use client'
import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import { createPortal } from "react-dom"
import { Dropdown } from "../Dropdown/Dropdown"

export const FilterSearch: FunctionComponent<any> = ({ label, placeholder, children }: any) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const ref = useRef<HTMLLabelElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    }, []); 
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    console.log()
    return (
        <label ref={ref}>
            <p className={styles.fieldName}>{label}</p>
            <div className={`${styles.selectField} ${isDropdownOpen ? styles.selectFieldActive: ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                <span className={styles.placeholder}>{placeholder}</span>
                <img className={isDropdownOpen ? styles.buttonUp : styles.buttonDown} rel="icon" src="icons/open-grey.svg" sizes="18x18" />
            </div>
            {isDropdownOpen && createPortal(
                <Dropdown children={children} />,
                document.getElementById("dropdown")!
            )}
        </label>
    )
}
