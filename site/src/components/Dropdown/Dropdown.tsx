import { FunctionComponent, useCallback, useEffect, useRef } from "react"
import styles from "./styles.module.css"

export const Dropdown: FunctionComponent<any> = ({ 
    children,
    position,
    placeholder,
    setPlaceholder,
    setIsDropdownOpen,
    stateSetter }) => {
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

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement;
        const dataId = target.getAttribute('data-id') ?? ''
        const dataPlaceholder = target.getAttribute('data-placeholder') ?? ''
        setPlaceholder(dataPlaceholder);
        setIsDropdownOpen(false);
        stateSetter(dataId);
    };

    return (
        <div className={styles.dropdown} style={position} ref={ref}>
            <div onClick={handleClick} className={styles.dropdownChild} data-id="" data-placeholder={placeholder} >{placeholder}</div>
            {children?.map((child: any) => <div onClick={handleClick} key={child?.id} data-id={child.id} data-placeholder={child.name} className={styles.dropdownChild}>{child.name}</div>)}
        </div>
    )
}
