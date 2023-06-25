'use client'
import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import { createPortal } from "react-dom"
import { Dropdown } from "../Dropdown/Dropdown"
import Image from 'next/image'

export const FilterSearch: FunctionComponent<any> = ({ label, placeholder, children, stateSetter }: any) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [dropDownPos, setDropDownPos] = useState({})
    const ref = useRef<HTMLLabelElement>(null);

    useEffect(() => {
        if (isDropdownOpen) {
            document.querySelector('#dropdown')?.classList.add("dropdownOpen");
        } else {
            document.querySelector('#dropdown')?.classList.remove("dropdownOpen");
        }
        return () => { 
            document.querySelector('#dropdown')?.classList.remove("dropdownOpen") 
        };
    }, [isDropdownOpen]);
    


    return (
        <label ref={ref}>
            <p className={styles.fieldName}>{label}</p>
            <div className={`${styles.selectField} ${isDropdownOpen ? styles.selectFieldActive: ''}`} onClick={() => {
                setIsDropdownOpen(true)
                const top = ref.current?.getBoundingClientRect().bottom
                const left = ref.current?.getBoundingClientRect().left
                setDropDownPos({...dropDownPos, top, left})
            }} >
                <span className={styles.fieldName}>{placeholder}</span>
                <Image className={isDropdownOpen ? styles.buttonUp : ""} rel="icon" src="/icons/open-grey.svg" width={18} height={18} alt="open"/>
            </div>
            {isDropdownOpen && createPortal(
                <Dropdown position={dropDownPos} children={children} setIsDropdownOpen={setIsDropdownOpen} placeholder={placeholder} stateSetter={stateSetter} />,
                document.getElementById("dropdown")!
            )}
        </label>
    )
}
