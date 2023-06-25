'use client'
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import { FilterSearch } from "@/components/FilterSearch/FilterSearch"
import { MovieList } from "@/components/MovieList/MovieList"
import { Movies, useGetCinemasQuery, useGetMoviesQuery } from "@/redux/services/movieApi"
import { MovieCard } from "@/components/MovieCard/MovieCard"
import Link from "next/link"
import { API_URL, genresForFilter,genres } from "@/common/constants"
import { GenreKey } from "@/components/MovieCard/MovieCard"
import { useDispatch } from "react-redux"

export default function Main() {
  const { data: cinemasData, isLoading: isLoadingCinemas, error: isErrorCinemas } = useGetCinemasQuery();

  const [input, setInput] = useState("");
  const [genre, setGenre] = useState("");
  const [cinemas, setCinemas] = useState<Movies>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleGenre = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const genre = target.getAttribute('data-value') ?? ''
    setGenre(genre);
  };

  // const handleCinema = (event: any) => {
  //   const cinemaId = event.target.value
  //   fetch(API_URL + `movies?cinemaId=${cinemaId}`)
  //     .then(res => res.json())
  //     .then(data => setCinemas(data))
  // };

  const handleCinema = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const cinemaId = target.getAttribute('data-value')
    // setIsDropdownOpen(false);

    // условие с проверкой 
    fetch(API_URL + `movies?cinemaId=${cinemaId}`)
        .then(res => res.json())
        .then(data => setCinemas(data))
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
          <FilterSearch label={'Жанр'} placeholder={'Выберите жанр'} children={genresForFilter} stateSetter={handleGenre}/>
          {isLoadingCinemas 
          ? <FilterSearch label={'Кинотеатр'} placeholder={'Выберите кинотеатр'} children={[]}/>
          : (!cinemasData || isErrorCinemas) 
            ? <FilterSearch label={'Кинотеатр'} placeholder={'Выберите кинотеатр'} children={[]}/> 
            : <FilterSearch label={'Кинотеатр'} placeholder={'Выберите кинотеатр'} children={cinemasData} stateSetter={handleCinema}/>
          }
          {/* <FilterSearch label={'Кинотеатр'} placeholder={'Выберите кинотеатр'} children={genresForFilter.map(genre=> genres[genre as GenreKey])}/> */}

          {/* <select name="genres" defaultValue='' id="genres" onChange={handleGenre}>
            <option value="">Выберите Жанр</option>
            {
              genresForFilter
                .map(genre => <option value={genre} key={genre}>{genres[genre as GenreKey]}</option>)
            }
          </select> */}
          {/* {
            isLoadingCinemas
              ? (<select defaultValue='' name="cinemas" id="cinemas" onChange={handleCinema}>
                <option value="">Выберите кинотеатр</option>
              </select>)
              : (
                (!cinemasData || isErrorCinemas)
                  ? (<select defaultValue='' name="cinemas" id="cinemas" onChange={handleCinema}>
                    <option value="">Выберите кинотеатр</option>
                  </select>)
                  : (<select defaultValue='' name="cinemas" id="cinemas" onChange={handleCinema}>
                    <option value="">Выберите кинотеатр</option>
                    {cinemasData.map(cinema => {
                      return <option value={cinema.id} key={cinema.id}>{cinema.name}</option>
                    })}
                  </select>)
              )
          } */}
        </form>
      </div>
      </div>
      <div className={styles.movieListContainer}>
        <MovieList cinemas={cinemas} input={input} genre={genre} />
      </div>
    </div>
  )
}
