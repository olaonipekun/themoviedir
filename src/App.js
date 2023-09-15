import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvSeries from './Pages/TvSeries';
import NoMatch from './Pages/NoMatch';

function App() {
  const [movie, setMovie] = useState([]);
  const fetchTrending = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setMovie(dataJ.results); //storing that data in the state
    console.log(dataJ)
  };
  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);

  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
    </>
  );
}

export default App;
