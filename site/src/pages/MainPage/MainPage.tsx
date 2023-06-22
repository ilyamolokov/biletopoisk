'use client'
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import { FilterSearch } from "@/components/FilterSearch/FilterSearch"

export const MainPage: FunctionComponent = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.filterContainer}>
                <h4>Фильтр поиска</h4>
                <br />
                <form className={styles.filterForm}>
                    <label>
                        <p className={styles.fieldName}>Название</p>
                        <input className={styles.textField} type="text"  placeholder="Выберите название"/>
                    </label>
                    <FilterSearch children={['hello','world','me']}/>
                    <FilterSearch children={['a','b','c']}/>
                </form>
            </div>
        </div>
    )
}