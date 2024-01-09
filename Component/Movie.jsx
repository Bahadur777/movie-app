"use client";

import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <>
      <div>Movie</div>
      <ul className="">
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.i && (
              <>
                <img src={movie.i.imageUrl} alt={movie.l} />
                <p>{movie.l}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movie;