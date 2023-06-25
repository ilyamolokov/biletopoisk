import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import { API_URL } from "@/common/constants";

export const Dropdown: FunctionComponent<any> = ({ children, position, placeholder, setIsDropdownOpen, stateSetter }: any) => {
    const ref = useRef<HTMLDivElement>(null);

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

    // const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     const target = event.target as HTMLDivElement;
    //     setIsDropdownOpen(false);
    //     console.log(target.getAttribute('data-value'));
    //   };

    // const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     const target = event.target as HTMLDivElement;
    //     const cinemaId = target.getAttribute('data-value')
    //     setIsDropdownOpen(false);

    //     // условие с проверкой 
    //     fetch(API_URL + `movies?cinemaId=${cinemaId}`)
    //         .then(res => res.json())
    //         .then(data => stateSetter(data))
    // };

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDropdownOpen(false);
        stateSetter(event);
    };

    return (
        <div className={styles.dropdown} style={position} ref={ref}>
            <div onClick={handleClick} className={styles.dropdownChild} data-value="">{placeholder}</div>
            {children?.map((child: any) => <div onClick={handleClick} key={child?.id} data-value={child?.id} className={styles.dropdownChild}>{child?.name ?? child}</div>)}
        </div>
    )
}
