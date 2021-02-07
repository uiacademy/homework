import React from 'react'

export default function SearchResults(props) {

  const data = props.data.slice(0, 5);
  const inputLength = props.inputLength;
  
  const selectorHandler = (id) => {
    console.log(id)    
    return id;
  }
  
  if(inputLength >= 3){
  return (
    <div className="results">
        {data.map((data, index) => {
          return (
            <div className="results__list" key={index}>
              <ul key={index} id={data.id} onClick={() => selectorHandler(data.original_title)}>
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