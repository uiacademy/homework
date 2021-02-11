import React from 'react'

export default function SearchResults(props) {

  const data = props.data.slice(0, 5);
  const inputLength = props.inputLength;

  if(inputLength >= 3 && props.clicked === false) {
    return (
      <div className="results">
          {data.map((data, index) => {
            return (
              <div className="results__list" onClick={() => props.selectionHandler(data.title)}key={index} >
                <ul key={index} id={data.id} onClick={() => props.selected(true)} >
                  <li key={index}>{data.title}</li><br/>
                  <span>{data.vote_average} Rating, {data.release_date.slice(0, 4)}</span>
                </ul>
              </div>
            )
          })}
      </div>
    )
  }else{
    return null;
  }
}