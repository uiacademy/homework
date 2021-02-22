import React from 'react'
import Noimg from '../header/icons/noimage.png'

export default function MovieInfo(props) {

  const movie = props.data;

  if(props.clicked === true){
    return (
        <div className="movie">
          {movie.map((movie, index) => {
            if(movie.original_title === props.selected_value){
              const path = movie.poster_path;
              const img_src = "https://image.tmdb.org/t/p/original/" + path;
                return(
                  <div className="movie__card" key={index}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    {(movie.poster_path !== null)?<img src={img_src} alt=""/>:<img src={Noimg} alt=""/>}
                    <section>
                      <p>Popularity: <span>{movie.popularity}</span></p>
                      <p>Vote Average: <span>{movie.vote_average}</span></p>
                      <p>Language: <span>{movie.original_language}</span></p>
                      <p>Released: <span>{movie.release_date}</span></p>
                    </section>
                  </div>
                );
            }else{
              return null;
            }
            })
          }
        </div>
    )  
  }
  else{
    return null;
  }
}
