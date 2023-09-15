import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvSeries from './Pages/TvSeries';
import NoMatch from './Pages/NoMatch';

function App() {
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
