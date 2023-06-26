'use client'
import { FunctionComponent, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import { createPortal } from "react-dom"
import { Dropdown } from "../Dropdown/Dropdown"
import Image from 'next/image'
import { Cinemas, GenresForFilterType } from "@/types"

interface FilterSearchProps {
    label:string, 
    children: Cinemas | GenresForFilterType, 
    stateSetter: (prop: string) => void
}

export const FilterSearch: FunctionComponent<FilterSearchProps> = ({ label, children, stateSetter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [dropDownPos, setDropDownPos] = useState({})
    const [placeholder, setPlaceholder] = useState(`Выберите ${label.toLocaleLowerCase()}`)
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
                <span className={styles.fieldName} style={placeholder !== `Выберите ${label.toLocaleLowerCase()}` ? {color:'#1B1F23'} : {}}>{placeholder}</span> 
                <Image className={isDropdownOpen ? styles.buttonUp : ""} rel="icon" src="/icons/open-grey.svg" width={18} height={18} alt="open"/>
            </div>
            {isDropdownOpen && createPortal(
                <Dropdown 
                    position={dropDownPos} 
                    children={children} 
                    setIsDropdownOpen={setIsDropdownOpen} 
                    stateSetter={stateSetter} 
                    placeholder={`Выберите ${label.toLocaleLowerCase()}`} 
                    setPlaceholder={setPlaceholder}
                />,
                document.getElementById("dropdown")!
            )}
        </label>
    )
}
