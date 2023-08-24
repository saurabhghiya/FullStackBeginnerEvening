import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import MoviePage from './components/MoviePage';

function App() {
  let temp = {};
  temp.results = new Array(20);
  temp.results.fill({});

  let [data,setData] = useState(temp);
  let [pageNo, setPageNo] = useState(1);
  let [watchlist, setWatchlist] = useState([]);
  let [genres,setGenres] = useState({});
  // let [movieId, setMovieId] = useState(0);

  useEffect(() => {
    let jsonstring = localStorage.getItem('watchlist');
    let localItem = JSON.parse(jsonstring) || [];
    setWatchlist(localItem);

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      params: { language: 'en' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJkNzE0ZGFjMzViY2Y1NGI2ZTE4OTY4ODE1MWM2MiIsInN1YiI6IjY0YjJjMTdkNzg1NzBlMDEwMDg4ZDBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xgEPmfq4ts8hDxnrY16ReG-f7aYc_R4t55bNk5wBFU'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        let res = response.data.genres;
        let genreList = {};
        for(let obj of res){
          genreList[obj.id] = obj.name;
        }
        genreList[0] = 'All Genres';
        setGenres(genreList);
      })

  },[]);

  // console.log(movieId);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact
            path="/"
            element={
                <Movies 
                  pageNo = {pageNo}
                  setPageNo = {setPageNo}
                  watchlist = {watchlist}
                  setWatchlist = {setWatchlist}
                  data = {data}
                  setData = {setData}
                />
            }
          />
          <Route exact
            path="/watchlist"
            element={
              <Watchlist
                watchlist = {watchlist}
                setWatchlist = {setWatchlist}
                genres = {genres}
              />
            }
          />
          <Route exact
            path="/moviepage"
            element={
              <MoviePage/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
