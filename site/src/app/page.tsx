// 'use client'
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import { FilterSearch } from "@/components/FilterSearch/FilterSearch"

export default function Main() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.filterContainer}>
        <h4>Фильтр поиска</h4>
        <br />
        <form className={styles.filterForm}>
          <label>
            <p className={styles.fieldName}>Название</p>
            <input className={styles.textField} type="text" placeholder="Выберите название" />
          </label>
          <FilterSearch label={'Жанр'} placeholder={'Выберите жанр'} children={['hello', 'world', 'me']} />
          <FilterSearch label={'Кинотеатр'} placeholder={'Выберите кинотеатр'} children={['a', 'b', 'c']} />
        </form>
      </div>
      <div className={styles.movieList}>

      </div>
    </div>
  )
}
