import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Review } from "@/components/Review/Review";
import { MovieDetails } from "@/components/MovieDetails/MovieDetails";
import { Questions } from "@/components/Questions/Questions";

import { MainPage } from "@/pages/MainPage/MainPage";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return <div className={roboto.className}>
    {/* <Header /> */}
    {/* <MovieCard />
    <Footer/> */}
    {/* <Questions/> */}

    <MainPage/>
  </div>
}
