import React from 'react'
import Trending from './components/Trending'
import Movies from './components/Movies'
import Search from './components/Search'
import Tvseries from './components/Tvseries'
import Error from './components/Error'
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Movie from './components/Movie'
import './css/app.css'
export default function App() {
  return (
<>

<BrowserRouter>
<Header />
<Routes>
      <Route exact path="/" element={<Trending />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/tvseries" element={<Tvseries />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/detail/:tag/:id" element ={<Movie />} />
      <Route exact path="*" element={<Error />} />

      </Routes>
<Footer />
</BrowserRouter>
</>
  )
}
