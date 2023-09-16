import React, { Component, useState, useEffect } from "react";
import { img_300, unavailable } from '../config';

function Moviemap() {
    const [movie, setMovie] = useState([]);
    const fetchTrending = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
      const dataJ = await data.json(); // fetching data from API in JSON Format
      setMovie(dataJ.results); //storing that data in the state
    };
    useEffect(() => {
      fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
    });
    movie.length = 10
    return (

        <>


            {
                movie.map((Val) => {
                    return(
                            <div className="bg-white rounded-xl overflow-clip shadow-xl hover:shadow-2xl" data_testid="movie-card" key={Val.id}>
                                <img
                                src={Val.backdrop_path ? `${img_300}/${Val.backdrop_path}` : unavailable}
                                className="w-full"
                                alt={`${Val.title} movie`}
                                data_testid="movie-poster"
                                />
                                <div className="">
                                    <h5 className="text-center" data_testid="movie-title">{Val.title || Val.name}</h5>
                                    <div className="">
                                        <div className="px-4">{Val.media_type === "tv" ? "TV" : "Movie"}</div>
                                        <div className="px-4 pb-4" data_testid="movie-release-date">{Val.first_air_date || Val.release_date}</div>
                                        <button className="bg-transparent text-blue-500 ring-2 ring-blue-500/50 hover:ring-blue-700 hover:bg-blue-700 font-bold m-4 p-1 rounded-lg"> View Details </button>
                                    </div>
                                </div>
                            </div>
                    )
            }
            )}
        </>
    )
}

export default Moviemap