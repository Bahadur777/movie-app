import React from 'react'

const Movie =async() => {
    const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ac5132cb1msh052a673f7ba3879p1b0f21jsn559234a95b4b',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log("this is resutl", result);
} catch (error) {
	console.error(error);
}
  return (
    <div>Movie</div>
  )
}

export default Movie