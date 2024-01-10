"use client";
import './movie.css'

import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchPoint, setSearchPoint] = useState('');
  // const [endPoint, setEndPoint] = useState('')
  const [fMovies, setFMovies] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3ac5132cb1msh052a673f7ba3879p1b0f21jsn559234a95b4b",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("this is the result", result);

        if (result.d && result.d.length > 0) {
          setMovies(result.d);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onChangeHandler = (e) =>{
    setSearchPoint(e.target.value)
    console.log("The search point is", searchPoint);
    const filteredMovies = movies.filter((movie) => movie.l && movie.l.toLowerCase().includes(searchPoint.toLowerCase()));
    setFMovies(filteredMovies);
    console.log("The filtered movies are", filteredMovies);
  }
   const submitHandler =e=>{
      e.preventDefault()
   }
  return (
    <div className='movie-section'>
      <div className='search'>
        <form onSubmit={submitHandler} >
          <input type="text" value={searchPoint}  onChange={onChangeHandler} placeholder='search movies'/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="suggestions">
        {fMovies && (fMovies.map((fm) =>(<li key={fm.id}>{fm.l}</li>)))}
      </div>
      <ul className="movie-row">
        {movies.map((movie) => (
          <li key={movie.id} className='movie-col'>
            {movie.i && (
              <>
                <img src={movie.i.imageUrl} alt={movie.l} />
                <p>{movie.l}</p>
                <p>{movie.q}</p>
                <p>{movie.rank}</p>
                <p>{movie.s}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;