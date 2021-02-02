import React from 'react'
import {ReactComponent as Movie} from './icons/movie.svg'
import {ReactComponent as Search} from './icons/search.svg'

export default function Header() {
  return (
    <div>
      <header>
        <div className="search-content">
          <div className="search-wrap">
            <Movie className="movie-icon"/>
            <input type="text" placeholder="Enter Movie Name" id="search"/>
          </div>
          <Search className="search-icon"/>
        </div>
      </header>
    </div>
  )
}
