import React, {useState} from 'react'

export default function SearchResults(props) {

  const data = props.data.slice(0, 5);
  const inputLength = props.inputLength;
  const searchvalue = props.inputTxt;

  console.log(props.clicked)

  if(inputLength >= 3 && props.clicked === false) {
  return (
    <div className="results">
        {data.map((data, index) => {
          return (
            <div className="results__list" key={index} onClick={() => props.selected(true)}>
              <ul key={index} id={data.id} onClick={() => props.selectionHandler(data.original_title)}>
                <li key={index}>{data.original_title}</li><br/>
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