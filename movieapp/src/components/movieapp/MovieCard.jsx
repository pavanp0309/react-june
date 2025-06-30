import React from 'react'
let imgUrl=`https://image.tmdb.org/t/p/w500`

const MovieCard = (props) => {
    console.log(props)
    let {title,poster_path,overview}=props
  return (
    <div className="col-sm-12 col-md-3 col-lg-3">
        <div className='card'>
       <img src={`${imgUrl}${poster_path}`} alt={title} width={"100%"} height={"150px"} />
       <div className="card-body">
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{overview.slice(0,60)}...</p>
       </div>
    </div>
    </div>
  )
}

export default MovieCard
