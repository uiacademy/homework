import React from 'react'

export default function SearchResults(props) {
  const data = props.data.slice(0, 10);
  return (
    <div>
        {data.map((data, index) => {
          return (
            <div className="results" key={index}>
              <ul key={index}>
                <li key={index}>{data.original_title}
                <span>{data.vote_average} Rating, {data.release_date.slice(0, 4)}</span></li>
              </ul>
            </div>
          )
        })}
    </div>
  )
}