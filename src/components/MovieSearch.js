import React, { useState } from 'react'

import axios from 'axios'

import Movie from './Movie'

let MovieSearch = () => {
  const [searchTerm, updateSearchTerm] = useState('')
  const [movieData, updateMovieData] = useState(null)

  var search = () => {
    axios.get(`http://www.omdbapi.com/?apikey=YOUR_API_KEY_HERE&t=${searchTerm}`)
      .then(function (response) {
        updateMovieData(response.data)
      })
      .catch(function (error) {
        console.log('ACK! : ', error)
      })
  }
  var reset = () => {
    updateSearchTerm('')
    updateMovieData(null)
  }
  return (
    <div className="movie-app">
      <div className="movie-search">
        <input
          className="movie-search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => updateSearchTerm(e.target.value)}
        />
      </div>
      <div className="movie-search-btns">
        <button onClick={ () => search() } className="movie-btns search-btn">Search</button>
        <button onClick={ () => reset() } className="movie-btns reset-btn">Reset</button>
      </div>
      <Movie data={movieData} />
    </div>
  )
}

export default MovieSearch
