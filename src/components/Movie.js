import React from 'react'

let Movie = (props) => {
  if(props.data === null) {
    return(<div></div>)
  }

  let data = props.data
  
  if(data.Response === "False") {
    return(
      <div className="movie">
        <h1>Movie not found! <span role="img" aria-label="Oh No!">😱</span></h1>
      </div>
    )
  }

  return(
    <div className="movie">
      <img className="movie-poster" src={data.Poster} alt={data.Title} />
      <h1 className="movie-title">{data.Title}</h1>
      <div className="movie-year">{data.Year}</div>
      <hr />
      <div className="movie-plot">{data.Plot}</div>
      <hr />
      <div className="movie-peeps">
        <div><em>ACTORS:</em> {data.Actors}</div>
        <br />
        <div><em>WRITERS:</em> {data.Writer}</div>
      </div>
    </div>
  )
}

export default Movie
