'use client'
import { useState } from "react"
import styles from "./styles.module.css"
import { FilterSearch } from "@/components/FilterSearch/FilterSearch"
import { MovieList } from "@/components/MovieList/MovieList"
import { useGetCinemasQuery } from "@/redux/services/movieApi"
import { API_URL, genresForFilter } from "@/common/constants"
import { Movies } from "@/types"

export default function Main() {
  const { data: cinemasData, isLoading: isLoadingCinemas, error: isErrorCinemas } = useGetCinemasQuery();
  const [input, setInput] = useState("");
  const [genre, setGenre] = useState("");
  const [cinemas, setCinemas] = useState<Movies>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleGenre = (newGenre:string) => {
    setGenre(newGenre);
  };

  const handleCinema = (cinemaId:string) => {
    fetch(API_URL + `movies?cinemaId=${cinemaId}`)
        .then(res => res.json())
        .then((data:Movies) => setCinemas(data))
  };

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.filterOuterContainer}>
      <div className={styles.filterContainer}>
        <h4>Фильтр поиска</h4>
        <br />
        <form className={styles.filterForm}>
          <label>
            <p className={styles.fieldName}>Название</p>
            <input
              className={styles.textField}
              type="text"
              placeholder="Выберите название"
              value={input}
              onChange={handleChange}
            />
          </label>
          <FilterSearch label={'Жанр'} children={genresForFilter} stateSetter={handleGenre}/>
          {
            <FilterSearch 
              label={'Кинотеатр'} 
              children={(!isLoadingCinemas && cinemasData && !isErrorCinemas) ? cinemasData : []}
              stateSetter={(!isLoadingCinemas && cinemasData && !isErrorCinemas) ? handleCinema : ()=>{}}
            />
          }
        </form>
      </div>
      </div>
      <div className={styles.movieListContainer}>
        <MovieList cinemas={cinemas} input={input} genre={genre} />
      </div>
    </div>
  )
}
