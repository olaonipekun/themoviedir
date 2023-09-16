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
    
    return (

        <>


            {
                movie.map((Val) => {
                    return(
                            <div className="bg-white rounded-xl overflow-clip shadow-xl hover:shadow-2xl" key={Val.id}>
                                <img
                                src={Val.backdrop_path ? `${img_300}/${Val.backdrop_path}` : unavailable}
                                className="w-full"
                                alt={`${Val.title} movie`}
                                data_testid="movie-poster"
                                />
                                <div className="">
                                    <h5 className="text-center">{Val.title || Val.name}</h5>
                                    <div className="">
                                        <div>{Val.media_type === "tv" ? "TV" : "Movie"}</div>
                                        <div>{Val.first_air_date || Val.release_date}</div>
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