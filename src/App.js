import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import NoMatch from './Pages/NoMatch';

function App() {

  return (
    <>
       <Routes>
          <Route path="/movies" element={<Home  />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/movies/:movie" element = {<MovieDetails />} />
       </Routes>
    </>
  );
}

export default App;
