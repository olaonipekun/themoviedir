import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

const MovieDetails = () => {
  const api_url = "https://api.themoviedb.org/3"
  const [isLoading, setLoading] = React.useState(true);
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null)

  const [searchParams] = useSearchParams();
  const mov = searchParams
  console.log(mov)

  return (
    <div>
      <p> id = {mov}</p>
      <Link to="/movies">
        <button className="bg-transparent text-slate-800 ring-2 ring-slate-800 text-sm font-sans hover:ring-slate-700 hover:text-white hover:bg-slate-700 font-bold m-4 p-1 rounded-sm"> go back </button>
      </Link>
    </div>
  )
}

export default MovieDetails
