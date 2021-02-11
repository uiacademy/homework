import React, { useState, useEffect } from 'react'
import {ReactComponent as Movie} from './icons/movie.svg'
import {ReactComponent as Search} from './icons/search.svg'
import SearchRez from '../search/SearchResults'
import MovieInfo from '../movie_info/MovieInfo'
import Loading from './icons/loading.gif'

export default function Header(props) {

  const BASE_URL = 'https://api.themoviedb.org/3/';
  const APIKEY = '68ae61f2720168696df123e0c841e5d8';

  const [searchText, setsearchText] = useState();
  const [data, setdata] = useState([]);
  const [inputLength, setinputLength] = useState(1);
  const [clicked, setclicked] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if(searchText !== '' ){
      let url = ''.concat(BASE_URL, 'search/movie?api_key=', APIKEY, '&query=',searchText);
      fetch(url)
      .then((result) => {
        if(clicked === true){
          setloading(true);
          setTimeout(() => {
            setloading(false);
            return result.json()
          }, 3000);
        }else{
          return result.json()
        }
      })
      .then((data) => {
        setdata(data.results);
      })
      .catch(function(error){
        console.log(error);
        return; // atvirai tai nezinau ar padetu nes error negavau ^^
      })
    }
  },[searchText, clicked]);

  const inputHandler = (e) => {
    const text = e.target.value;
    setsearchText(text);
    setclicked(false);
    setinputLength(text.length);
  }

  return (
    <div>
      <header>
        <div className="search-content">
          <div className="search-wrap">
            <Movie className="movie-icon"/>
            <input 
              type="search" 
              placeholder="Enter Movie Name" 
              id="search" 
              onChange={inputHandler}
              value={searchText} 
            />
          </div>
          <Search className="search-icon"/>
        </div>
          <SearchRez data={data} inputLength={inputLength} selectionHandler = {searchText => setsearchText(searchText)} inputTxt={searchText} clicked={clicked} selected={clicked => setclicked(clicked)}/>
      </header>
      {loading === true ? <img className="loading" src={Loading} alt="loading"/> : <MovieInfo data={data} clicked={clicked} selected_value={searchText}/> }
    </div>
  )
}
