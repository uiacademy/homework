import React, { useState, useEffect } from 'react'
import {ReactComponent as Movie} from './icons/movie.svg'
import {ReactComponent as Search} from './icons/search.svg'
import SearchRez from '../search/SearchResults'

export default function Header() {

  const BASE_URL = 'https://api.themoviedb.org/3/';
  const APIKEY = '68ae61f2720168696df123e0c841e5d8';
  const [searchText, setsearchText] = useState([]);
  const [data, setdata] = useState([]);

  const inputHandler = (e) => {
    const text = e.target.value
    setsearchText(text)
    if(text !== ''){
      let url = ''.concat(BASE_URL, 'search/movie?api_key=', APIKEY, '&query=', text);
      fetch(url)
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        setdata(data.results);
      })
      .catch(function(error){

      })
    }
  }

  return (
    <div>
      <header>
        <div className="search-content">
          <div className="search-wrap">
            <Movie className="movie-icon"/>
            <input type="text" placeholder="Enter Movie Name" id="search" onChange={inputHandler} value={searchText} />
          </div>
          <Search className="search-icon"/>
        </div>
          <SearchRez data={data}/>
      </header>
    </div>
  )
}
