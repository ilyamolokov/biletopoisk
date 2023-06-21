import { FunctionComponent } from "react"
import styles from "./styles.module.css"

export const MainPage: FunctionComponent = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.filterContainer}>
                <h4>Фильтр поиска</h4>
                <br/>
                <form className={styles.filterForm}>
                    <label>
                        <p className={styles.fieldName}>Название</p>
                        <input className={styles.textField} type="text"  placeholder="Выберите название"/>
                    </label>
                    <label>
                        <p className={styles.fieldName}>Жанр</p>
                        <select className={styles.selectField}>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                        </select>
                    </label>
                    {/* <label>
                        <p className={styles.fieldName}>Кинотеатр</p>
                        <select className={styles.selectField}>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                        </select>
                    </label> */}
                </form> 
            </div>
        </div>
    )
}