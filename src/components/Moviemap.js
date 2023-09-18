import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-regular-svg-icons";




export const CardStyle = ({ aStyle, cStyle, children}) => {  

    return (
        <div className={cStyle} style={aStyle}>{children}</div>
    )
}

function Moviemap() {
    const api_url = "https://api.themoviedb.org/3"
    const [movie, setMovie] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const [isActive, setActive] = useState("false");

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION}`
        }
      };



    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await fetch(`${api_url}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`, options)
                if(!response.ok){
                    throw new Error ("Network response is not ok")
                }
                const data = await response.json(); // fetching data from API in JSON Format
                setMovie(data.results); //storing that data in the state
            } catch(error) {
                setError(error)
            }
            
        }
        fetchMovie()
        setLoading(false)
    });
    movie.length = 10

    const ToggleClass = () => {
        setActive(!isActive);
        setTimeout(()=>{alert("succesfully added")}, 1000)
    }

    return (

        <>
            {error ? <p className="grid grid-flow-col w-full text-center font-bold">An error occurred: {error.message}</p>: null}
            { isLoading? <div> Loading ... </div> : movie.map((Val) => {
                    return(
                                <CardStyle cStyle={ isActive ? "bg-white rounded-xl overflow-clip shadow-xl hover:shadow-2xl" : "bg-slate-700 rounded-xl overflow-clip shadow-2xl hover:shadow-2xl text-white"} data_testid="movie-card" key={Val.id}>
                                    <img
                                    src={Val.backdrop_path ? `${img_300}/${Val.backdrop_path}` : unavailable}
                                    className="w-full opacity-100"
                                    alt={`${Val.title} movie`}
                                    data_testid="movie-poster"
                                    />
                                    <div className="">
                                        <Link to={`/movies/${Val.id}`}>
                                            <h5 className={ isActive ? "px-4 pb-3 pt-3 text-xl font-bold text-slate-800" : "px-4 pb-3 pt-3 text-xl font-bold text-white"} data_testid="movie-title">{Val.title || Val.name}</h5>
                                        </Link>
    
                                        <div className="">
                                            <div className={ isActive ? "px-4 pb-4 font-bold text-slate-600" : "px-4 pb-4 font-bold text-white" } data_testid="movie-release-date">{Val.first_air_date || Val.release_date}</div>
                                            <div className="w-full grid grid-cols-2">
                                                <Link to={`/movies/${Val.id}`}>
                                                    <button className={ 
                                                        isActive ? "bg-transparent text-slate-800 ring-2 ring-slate-800 text-sm font-sans hover:ring-slate-700 hover:text-white hover:bg-slate-700 font-bold m-4 p-1 rounded-sm" :
                                                        "bg-transparent text-white ring-2 ring-white text-sm font-sans hover:shadow-lg hover:text-slate-800 hover:bg-white font-bold m-4 p-1 rounded-sm"}> 
                                                        Movie Details 
                                                    </button>
                                                </Link>
                                                <div className= { isActive ? "text-end px-6 text-2xl py-4 text-slate-800" : "text-end px-6 text-2xl py-4 text-white" }>
                                                    <FontAwesomeIcon icon={faStar} className="cursor-pointer" id="fStar" onClick={ToggleClass}/>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </CardStyle>
                        )
                }
            )}
        </>
    )
}

export default Moviemap